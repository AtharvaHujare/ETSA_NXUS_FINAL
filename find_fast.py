import os

search_roots = [
    r'c:\Users\athar\OneDrive\Desktop\IMP_PROJECTS\nexus_etsa',
    r'c:\Users\athar\OneDrive\Desktop\IMP_PROJECTS',
    r'c:\Users\athar\OneDrive\Desktop',
]

keywords = ['taraksh', 'prijay', 'manthan', 'chinmayi', 'arya', 'manan']

found = []
for sroot in search_roots:
    if not os.path.exists(sroot):
        continue
    for root, dirs, files in os.walk(sroot):
        if any(skip in root for skip in ['node_modules', '.git', '.gemini', 'AppData']):
            continue
        # Limit depth if scanning entire Desktop
        rel = os.path.relpath(root, sroot)
        if sroot == r'c:\Users\athar\OneDrive\Desktop' and rel.count(os.sep) > 2:
            continue
        for f in files:
            name_lower = f.lower()
            if any(k in name_lower for k in keywords):
                found.append(os.path.join(root, f))

print('TARGETED FOUND:', len(found))
for p in found:
    print(p)
