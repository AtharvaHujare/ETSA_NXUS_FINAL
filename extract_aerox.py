import pypdf

reader = pypdf.PdfReader('Aero-x rulebook.pdf')
text = '\n--- PAGE ---\n'.join([p.extract_text() for p in reader.pages])
with open('rulebook_aerox_extracted.txt', 'w', encoding='utf-8') as f:
    f.write(text)
print('Extracted', len(reader.pages), 'pages')
