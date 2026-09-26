from PIL import Image

ref_img_path = r'C:\Users\athar\.gemini\antigravity-ide\brain\16afdfa7-5763-4b92-9d97-d6f83c659f65\.user_uploaded\media_1790438619819.jpg'
ref_img = Image.open(ref_img_path)
w, h = ref_img.size
print(f'Size: {w}x{h}')

# In 1024x682:
# The 6 boxes are approximately at y=546 to 626 (h*0.80 to h*0.918)
# Box 1 (V Taraksh): x = 104 to 175
# Box 2 (Prijay): x = 250 to 321
# Let's crop Prijay's actual photo box with exact coordinates:
prijay_box = (250, 545, 321, 626)
prijay_crop = ref_img.crop(prijay_box)
prijay_crop.save('public/images/coordinators/aerox/prijay.webp', 'WEBP', quality=95)

# Also let's ensure all images are optimized (max 400x400) so they load instantly
for name in ['v_taraksh', 'prijay', 'manthan_waghmare', 'chinmayi_pethkar', 'arya_jadhav', 'manan_gandhi']:
    path = f'public/images/coordinators/aerox/{name}.webp'
    im = Image.open(path).convert('RGB')
    im.thumbnail((400, 400))
    im.save(path, 'WEBP', quality=90)
    print(f'Optimized {name}.webp to size {im.size}')
