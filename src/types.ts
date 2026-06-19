/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SalaryGroup {
  id: string; // Roman numeral, e.g. "I", "II", ..., "XXXII"
  antes44: number; // 44 hours - Before
  antes40: number; // 40 hours - Before
  despues44: number; // 44 hours - After
  despues40: number; // 40 hours - After
}

export interface AdditionalPayment {
  id: string;
  name: string;
  amount: number;
}

export interface TaxBreakdown {
  totalSalaryPlusExtras: number;
  discount5: number;
  after5Percent: number;
  minus3260: number;
  taxRate: number; // e.g., 0.03 or 0.05
  taxAmount: number;
  finalNet: number;
}
