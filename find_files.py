import os

search_dirs = [
    r'c:\Users\athar\OneDrive\Desktop\IMP_PROJECTS\nexus_etsa',
    r'c:\Users\athar\OneDrive\Desktop',
]

keywords = ['taraksh', 'prijay', 'manthan', 'chinmayi', 'arya', 'manan', 'aero']

found = []
for sdir in search_dirs:
    for root, dirs, files in os.walk(sdir):
        # skip node_modules and .git
        if 'node_modules' in root or '.git' in root:
            continue
        for f in files:
            name_lower = f.lower()
            if any(k in name_lower for k in keywords):
                found.append(os.path.join(root, f))

print('FOUND', len(found), 'FILES:')
for path in found:
    print(path)
