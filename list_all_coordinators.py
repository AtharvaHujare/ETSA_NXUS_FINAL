import os

for root, dirs, files in os.walk(r'cooridinators_images'):
    for f in files:
        print(os.path.join(root, f))
