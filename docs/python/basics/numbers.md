---
sidebar_position: 4
---

import Box from '@mui/material/Box';

<Box sx={{textAlign: 'justify'}}>

# Numbers
Python `integers`, `float` va `complex numbers` sonlar to'plamini qo'llab-quvvatlaydi.

- `integers` – butun sonlar to'plami
    - 32 bitli int
        - Maximum 2<sup>31</sup> - 1 = 2,147,483,647  
        - Minumum -2<sup>31</sup> = −2,147,483,648
    - 64 bitli int
        -   Maximum 2<sup>63</sup> - 1 = 9,223,372,036,854,775,807
        - Minumum -2<sup>63</sup> = −9,223,372,036,854,775,808
- `float` – suzuvchi nuqtali sonlar to'plami
    - Maximum 1.7976931348623157e+308 
    - Minumum 2.2250738585072014e-308
- `complex numbers` – kompleks sonlar to'plami

## Raqamlarda pastki chiziq
Raqam katta bo'lsa, uni o'qish qiyin bo'ladi. Masalan:
```python
count = 10000000000
```

Uzun raqamlarni o'qish uchun qulayroq qilish uchun raqamlarni pastki chiziq yordamida guruhlashingiz mumkin, masalan:
```python
count = 10_000_000_000
```

## Arifmetik amallar
Pythonda asosiy arifmetik amallar o'z ma'nosi bo'yicha qo'llaniladi:
### `+` – qo’shish amali:
Ikki sonni yig'indisi
```python
print(6 + 5) # 11
```

### `-` – ayirish amali:
Ikki sonni ayirmasi
```python
print(6 - 5) # 1
```

### `*` – ko'paytrish amali:
Ikki sonni ko'paytmasi
```python
print(6 * 5) # 30
```

### `/` – bo'lish amali:
Ikki sonni bo'linmasi
```python
print(6 / 5) # 1.2
```

### `//` – butun qismli bo'lish amali:
Ikki sonni bo'linmasi (ushbu amal bo'lish natijasining faqat butun qismini
qaytaradi, qoldiq qismi tashlab yuboriladi)
```python
print(6 // 5) # 1
```

### `%` – qoldiqli bo’lish amali:
Ikki sonni bo'linmasi (ushbu amal bo'lish natijasining faqat qoldiq qismini
qaytarib, butun qismi tashlab yuboriladi)
```python
print(6 % 5) # 1
```

### `**` – darajaga ko’tarish (oshirish) amali:
a<sup>b</sup> shaklidagi hisoblashlarda qo'llaniladi
```python
print(6 ** 2) # 36
```

Ifodada bir nechta arifmetik amallar ketma-ket kelgan bo‟lsa, ular prioriteti
(ustunligi) bo‟yicha bajariladi. Dastlab, yuqori prioritetga ega bo‟lgan amallar
bajariladi. Amallarning prioriteti kamayish tartibida quyidagi jadvalda ifodalangan:

<div style={{textAlign: 'center'}}>
    | Amallar     | Yo’nalish       | 
    | :-------:   | :-------------: | 
    | `**`          | Chapdan-o'nga   |
    | `*`, `/`, `//`, `%` | Chapdan-o'nga   |
    | `+`, `-`        | Chapdan-o'nga   |
</div>
```python
son = 12//7 + 2 ** 5 * (3 – 4)
print(son) # -31
```

Shuni alohida ta'kidlash kerakki, arifmetik amallar butun sonlar uchun
qanday tartibda bajarilsa, suzuvchan nuqtali haqiqiy sonlar uchun ham xuddi
shunday bo'ladi. Agarda ifodada loaqal bitta haqiqiy son ishtirok qilsa natija
haqiqiy turda ifodalanadi

Yuqoridagi barcha arifmetik amallarni o'zlashtirish amali `=` bilan birgalikda
(arifmetik amal va undan keyin `=` belgisi ketma-ket yoziladi) ishlatish mumkin.
Masalan: `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`. Bunday hollarda ifodaning o'ng tomonidagi
barcha amallar hisoblanib, chiqqan natija chap tomondagi o‟zgaruvchi natijasi
bilan mos arifmetik amal bajariladi va natija yana chap tomondagi o'zgaruvchiga
yuklanadi. Masalan:
```python
son = 2
son += 3 # son = son + 3 amaliga teng kuchli, son=5 bo`ladi
print(son) # 5
son -= 1
print(son) # 4
son *= 4
print(son) # 16
son //= 2
print(son) # 8
son **= 2
print(son) # 64
```
</Box>