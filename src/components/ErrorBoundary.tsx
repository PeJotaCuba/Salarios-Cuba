import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-left">
            <h1 className="text-2xl font-bold text-red-600 mb-4">¡Ocurrió un error inesperado!</h1>
            <p className="text-sm text-slate-600 mb-4">
              Por favor toma una captura de pantalla de este mensaje:
            </p>
            <pre className="bg-slate-100 p-4 rounded text-xs text-red-800 overflow-auto max-h-[300px]">
              {this.state.error?.toString()}
              {"\n"}
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => {
                localStorage.removeItem("salarios_cuba_current_view");
                window.location.reload();
              }}
              className="mt-6 w-full bg-red-600 text-white font-bold py-3 rounded-lg"
            >
              Reiniciar Aplicación
            </button>
          </div>
        </div>
      );
    }

    const { children } = this.props;
    return children || null;
  }
}
