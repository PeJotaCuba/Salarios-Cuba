from PIL import Image
import collections

im = Image.open('screenshot.png')
colors = im.getcolors(maxcolors=256)
if colors:
    for count, color in sorted(colors, reverse=True):
        print(f"Color {color} appears {count} times")
else:
    print("More than 256 colors")
