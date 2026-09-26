import os

search_roots = [
    r'c:\Users\athar\OneDrive\Desktop',
    r'c:\Users\athar\Downloads',
    r'c:\Users\athar\OneDrive\Pictures',
    r'c:\Users\athar\Pictures',
]

for sroot in search_roots:
    if not os.path.exists(sroot):
        continue
    for root, dirs, files in os.walk(sroot):
        if any(skip in root for skip in ['node_modules', '.git', '.gemini', 'AppData', 'venv']):
            continue
        for f in files:
            if 'prijay' in f.lower() or 'taraksh' in f.lower():
                print(os.path.join(root, f))
