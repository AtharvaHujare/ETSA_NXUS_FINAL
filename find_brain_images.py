import os
import glob
from PIL import Image

# Search in the conversation brain directory
brain_dir = r'C:\Users\athar\.gemini\antigravity-ide\brain'
for root, dirs, files in os.walk(brain_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            print('Brain file:', os.path.join(root, f))
