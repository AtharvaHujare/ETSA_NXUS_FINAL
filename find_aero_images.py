import os

# Search for any recent images in C:\Users\athar
search_dirs = [
    r'c:\Users\athar\Downloads',
    r'c:\Users\athar\Pictures',
    r'c:\Users\athar\OneDrive\Desktop',
    r'c:\Users\athar\OneDrive\Pictures',
    r'c:\Users\athar\.gemini',
]

for sdir in search_dirs:
    if not os.path.exists(sdir):
        continue
    for root, dirs, files in os.walk(sdir):
        if any(skip in root for skip in ['node_modules', '.git', 'venv']):
            continue
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                if any(x in f.lower() for x in ['prijay', 'aero', 'tech', 'coordinator']):
                    print(os.path.join(root, f))
