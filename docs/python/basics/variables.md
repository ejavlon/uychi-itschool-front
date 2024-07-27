---
sidebar_position: 2
title: "O'zgaruvchilar"
---
import Box from '@mui/material/Box';

<Box sx={{textAlign: 'justify'}}>

# O'zgaruvchilar va berilganlar turlari
Pythonda, boshqa dasturlash tillaridagi kabi o'zgaruvchilar aniq bir turdagi
berilganlarni saqlash uchun xizmat qiladi. Pythonda o'zgaruvchilar alfavit belgilari
yoki tag chizig'i belgisi bilan boshlanishi va tarkibi son, alfavit belgilari, tag
chizig'i belgilaridan iborat bo'lishi, ya'ni bir so'z bilan aytganda identifikator
bo'lishi kerak. Bundan tashqari o'zgaruvchi nomi Pythonda ishlatiladigan kalit
so'zlar nomi bilan mos tushmasligi shart.

Masalan, o'zgaruvchi nomi `and`, `as`,
`assert`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`,
`except`, `False`, `finally`, `for`, `from`,
`global`, `if`, `import`, `in`, `is`, `lambda`, `None`, `nonlocal`,
`not`, `or`, `pass`, `raise`, `return`, `True`,
`try`, `while`, `with`, `yield` kabi kalit so'zlar nomi bilan mos tushishi mumkin emas.
    
O'zgaruvchini aniqlash (hosil qilish) quyidagicha amalga oshiriladi:
```python
a = 14
name = "SDY"
```
:::info Bu yerda:  
`=` – tayinlash operatori.Ushbu sintaksisda siz a o'zgaruvchisiga qiymat berasiz
Yana ham aniqrog'i `a` o'zgaruvchi 14 qiymatning xotiradagi adresiga link desak ham bo'ladi.
:::

Yuqorida a va name o'zgaruvchilari yaratildi va ularga qiymat berildi. Shuni
alohida ta'kidlash kerakki, Pythonda o'zgaruvchini dastlab e'lon qilish degan
tushuncha mavjud emas.  
Masalan: c++ tilida  int a kabi o'zgaruvchi e'lon qilinadi
balki o'zgaruvchi kiritiladi va unga qiymat beriladi (masalan: a=14).

Berilgan qiymatga ko'ra interpretator o'zgaruvchining turini aniqlaydi.
Pythonda o'zgaruvchilarni nomlashning ikki turi: `camel case` va `snake case`
turlaridan foydalanish tavsiya qilingan.

`camel case` turida o'zgaruvchiga nom berilganda, agar o'zgaruvchi nomi
alohida so'zlar birikmasidan tashkil topgan bo'lsa, ikkinchi so'zdan boshlab har bir
so'zning birinchi harfi katta harfda (katta registr) bo'lishi talab qilinadi. Masalan:
```python
firstName = "Aliyev"
```

`snake case` turida esa so'zlar orasiga tag chizig'i `_` belgisi
qo'yiladi. Masalan:
```python
first_name = "Aliyev"
```
O'zgaruvchilar biror bir turdagi berilganlarni saqlaydi. Pythonda bir necha
xildagi berilganlar turlari mavjud bo'lib, ular odatda to'rtta guruhga ajratiladi:
sonlar, ketma-ketliklar, lug'atlar va to'plamlar:


`bool` (boolean) – True va False mantiqiy qiymatlar uchun;  
`int` – butun sonlar uchun, butun turdagi songa kompyuter xotirasida 4 bayt joy ajratiladi;  
`float` – suzuvchan nuqtali sonlar (haqiqiy sonlar) uchun, haqiqiy sonlarni saqlash uchun kompyuter xotirasidan 8 bayt joy ajratiladi;  
`complex` – kompleks sonlar uchun;  
`str` – satrlar uchun, Python 3.x versiyasidan boshlab satrlar bu- Unicode kodirovkasidagi belgilar ketma-ketligini ifodalaydi;  
`bytes` – [0-255] diapazondagi sonlar ketma ketligi uchun  
`bytearray` – baytlar massivi uchun;  
`list` – ro'yхatlar uchun;  
`tuple` – kortejlar uchun;  
`set` – tartiblanmagan unikal ob'ektlar kollektsiyasi uchun;  
`frozenset `– set singari, faqat u o'zgartirilishi mumkin emas (immutable);  
`dict` – lug'atlar uchun. Har bir element kalit so'z va qiymat juftligi ko'rinishida ifodalaniladi.  

Python – dinamik turlarga ajratuvchi dasturlash tili hisoblanadi. Yuqorida
aytib o'tilganidek, Pythonda o'zgaruvchi turi unga yuklangan qiymat orqali
aniqlanadi. Agarda o'zgaruvchiga bittalik `''` yoki ikkitalik `""` qo'shtirnoq
yordamida satr yuklansa, o'zgaruvchi str turiga ega bo'ladi, agarda o'zgaruvchiga
butun son yuklansa – int, haqiqiy son yuklansa (masalan: 3.14) yoki eksponentsial
ko'rinishdagi qiymat yuklansa (masalan: 11e-1) u float turiga ega bo'ladi.
Masalan:
```python
user_id = 234 # int
x = 1.2e2  # = 1200.0float
y = 6.7e-3 # = 0.0067float
z = 1.223 # float 
user_password = "sdy123" # str
b = True # bool
```

Pythonda haqiqiy (float) turidagi o'zgaruvchilar [-10308 , +10308] oraliqdagi
sonlar bilan hisoblash ishlarini amalga oshirsa bo'ladi, lekin faqat 18 ta raqamlar
ketma-ketligi ko'rinadi (konsol ekraniga chiqarilganda). Ixtiyoriy
katta yoki
kichik sonlarni o'zgaruvchidagi ifodasi 18 ta belgidan oshib ketsa, u holda
eksponentsial orqali yaxlitlab ifodalanadi.

Shuni ham ta`kidlash kerakki, Pythonda o'zgaruvchiga yangi qiymat berish
orqali uning turi o'zgartirilishi mumkin. Masalan:
```python
age = 17 # int
print(age)
age = "o'n etti" # str
print(age)
```

Ushbu dasturda dastlab `age = 17` ifodasi orqali age o'zgaruvchisi int turiga
ega edi. Keyingi `age = "o'n etti"` ifoda bilan uning turi str turiga o'zgartirildi.
Bundan keyingi jarayonlarda age o'zgaruvchisi eng ohirgi yuklangan qiymat turiga
mos bo'ladi.

O'zgaruvchilarning turini aniqlashda `type()` – funksiyasidan foydalaniladi.
Masalan:
```python
age = 17
print(type(age))
age = "o'n etti"
print(type(age))
```
Konsol ekranidagi natija:
> &lt;class 'int'&gt;  
&lt;class 'str'&gt;
</Box>