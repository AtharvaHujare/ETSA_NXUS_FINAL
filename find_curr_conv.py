import os

conv_dir = r'C:\Users\athar\.gemini\antigravity-ide\brain\16afdfa7-5763-4b92-9d97-d6f83c659f65'
for root, dirs, files in os.walk(conv_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            print('Conv file:', os.path.join(root, f))
