import os
from PIL import Image
import pypdf

os.makedirs('public/images/coordinators/aerox', exist_ok=True)

# 1. Taraksh: cooridinators_images/coordinators/gaming/taraksh.png
taraksh_src = r'cooridinators_images/coordinators/gaming/taraksh.png'
if os.path.exists(taraksh_src):
    img = Image.open(taraksh_src).convert('RGB')
    img.save('public/images/coordinators/aerox/taraksh.webp', 'WEBP', quality=90)
    print('Saved taraksh.webp')

# 2. Manthan Waghmare: cooridinators_images/coordinators/tech event 2/manthan waghmare.png
manthan_src = r'cooridinators_images/coordinators/tech event 2/manthan waghmare.png'
if os.path.exists(manthan_src):
    img = Image.open(manthan_src).convert('RGB')
    img.save('public/images/coordinators/aerox/manthan_waghmare.webp', 'WEBP', quality=90)
    print('Saved manthan_waghmare.webp')

# 3. Arya Jadhav: cooridinators_images/coordinators/tech event 2/arya jadhav.jpeg
arya_src = r'cooridinators_images/coordinators/tech event 2/arya jadhav.jpeg'
if os.path.exists(arya_src):
    img = Image.open(arya_src).convert('RGB')
    img.save('public/images/coordinators/aerox/arya_jadhav.webp', 'WEBP', quality=90)
    print('Saved arya_jadhav.webp')

# Function to extract image from a 1-page PDF using pypdf
def extract_pdf_img(pdf_path, out_webp):
    reader = pypdf.PdfReader(pdf_path)
    for page in reader.pages:
        for img_obj in page.images:
            with open(out_webp, 'wb') as f:
                f.write(img_obj.data)
            # Re-save as clean webp
            im = Image.open(out_webp).convert('RGB')
            im.save(out_webp, 'WEBP', quality=90)
            print(f'Extracted image from {pdf_path} -> {out_webp}')
            return True
    print(f'No image in {pdf_path}')
    return False

# 4. Chinmayi Pethkar: cooridinators_images/coordinators/tech event 2/chinmayi.pdf
chinmayi_pdf = r'cooridinators_images/coordinators/tech event 2/chinmayi.pdf'
if os.path.exists(chinmayi_pdf):
    extract_pdf_img(chinmayi_pdf, 'public/images/coordinators/aerox/chinmayi_pethkar.webp')

# 5. Manan Gandhi: cooridinators_images/coordinators/tech event 2/manan.pdf
manan_pdf = r'cooridinators_images/coordinators/tech event 2/manan.pdf'
if os.path.exists(manan_pdf):
    extract_pdf_img(manan_pdf, 'public/images/coordinators/aerox/manan_gandhi.webp')
