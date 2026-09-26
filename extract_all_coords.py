import os
from PIL import Image
import pypdf

out_dir = r'public/images/coordinators/aerox'
os.makedirs(out_dir, exist_ok=True)

# 1. V Taraksh
taraksh_src = r'cooridinators_images/coordinators/gaming/taraksh.png'
if os.path.exists(taraksh_src):
    img = Image.open(taraksh_src).convert('RGB')
    img.save(os.path.join(out_dir, 'v_taraksh.webp'), 'WEBP', quality=95)
    print('Saved v_taraksh.webp')

# 2. Manthan Waghmare
manthan_src = r'cooridinators_images/coordinators/tech event 2/manthan waghmare.png'
if os.path.exists(manthan_src):
    img = Image.open(manthan_src).convert('RGB')
    img.save(os.path.join(out_dir, 'manthan_waghmare.webp'), 'WEBP', quality=95)
    print('Saved manthan_waghmare.webp')

# 3. Arya Jadhav
arya_src = r'cooridinators_images/coordinators/tech event 2/arya jadhav.jpeg'
if os.path.exists(arya_src):
    img = Image.open(arya_src).convert('RGB')
    img.save(os.path.join(out_dir, 'arya_jadhav.webp'), 'WEBP', quality=95)
    print('Saved arya_jadhav.webp')

# 4. Chinmayi Pethkar (from chinmayi.pdf)
chinmayi_pdf = r'cooridinators_images/coordinators/tech event 2/chinmayi.pdf'
if os.path.exists(chinmayi_pdf):
    reader = pypdf.PdfReader(chinmayi_pdf)
    for page in reader.pages:
        for img_obj in page.images:
            with open(os.path.join(out_dir, 'chinmayi_pethkar.webp'), 'wb') as f:
                f.write(img_obj.data)
            im = Image.open(os.path.join(out_dir, 'chinmayi_pethkar.webp')).convert('RGB')
            im.save(os.path.join(out_dir, 'chinmayi_pethkar.webp'), 'WEBP', quality=95)
            print('Saved chinmayi_pethkar.webp from pdf')
            break

# 5. Manan Gandhi (from manan.pdf)
manan_pdf = r'cooridinators_images/coordinators/tech event 2/manan.pdf'
if os.path.exists(manan_pdf):
    reader = pypdf.PdfReader(manan_pdf)
    for page in reader.pages:
        for img_obj in page.images:
            with open(os.path.join(out_dir, 'manan_gandhi.webp'), 'wb') as f:
                f.write(img_obj.data)
            im = Image.open(os.path.join(out_dir, 'manan_gandhi.webp')).convert('RGB')
            im.save(os.path.join(out_dir, 'manan_gandhi.webp'), 'WEBP', quality=95)
            print('Saved manan_gandhi.webp from pdf')
            break

# 6. Prijay (from user reference image: media_1790438619819.jpg)
ref_img_path = r'C:\Users\athar\.gemini\antigravity-ide\brain\16afdfa7-5763-4b92-9d97-d6f83c659f65\.user_uploaded\media_1790438619819.jpg'
if os.path.exists(ref_img_path):
    ref_img = Image.open(ref_img_path)
    w, h = ref_img.size
    print(f'Reference image size: {w}x{h}')
    
    # In the reference image (1000x667 approx), there are 6 coordinator cards in a row at the bottom:
    # 1. V Taraksh: ~70px to 200px X, ~540px to 620px Y
    # 2. Prijay: ~220px to 350px X, ~540px to 620px Y
    # 3. Manthan: ~370px to 500px X
    # 4. Chinmayi: ~520px to 650px X
    # 5. Arya: ~670px to 800px X
    # 6. Manan: ~820px to 950px X
    
    # Let's crop Prijay's photo box exactly
    # Box proportions based on image width/height:
    # Prijay is the second card:
    prijay_box = (
        int(w * 0.235), # left
        int(h * 0.795), # top
        int(w * 0.335), # right
        int(h * 0.925)  # bottom
    )
    prijay_crop = ref_img.crop(prijay_box)
    prijay_crop.save(os.path.join(out_dir, 'prijay.webp'), 'WEBP', quality=95)
    print('Saved prijay.webp from reference image')

print('All coordinator photos processed successfully!')
