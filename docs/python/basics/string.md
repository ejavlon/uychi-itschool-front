---
sidebar_position: 3
title : 'String'
---
import Box from '@mui/material/Box';

<Box sx={{textAlign: 'justify'}}>

# String (str)
Satrlar – qo'shtirnoq ichiga olingan Unicode kodidagi belgilar ketma-ketligi
orqali ifodalanadi. Pythonda satrlar apostrof `''` va qo'shtirnoqlar `""` orqali
berilishi munkin. Uchta ketma-ket kelgan apostrof ham satrlarni ifodalashda
ishlatiladi.
```python
message = 'Bu Python-dagi satr'
message = "Bu ham satr"
```

Agar satrda bitta tirnoq bo'lsa, uni ikki qo'shtirnoq ichiga qo'yishingiz kerak:
```python
message = "Ma'lumot uchun uchun"
```

Agar satrda qo'sh tirnoq bo'lsa, siz bitta tirnoqdan foydalanishingiz mumkin:
```python
message = '"Maqsading bo\'lmasa, maqsadi borlarga xizmat qilasan" - savdogarlar ustozi kitobidan'
```

Agar bir tirnoqdan foydalanganganizgizda satrda bir tirnoq qatnashsa `\` belgidan foydalaning
```python
message = 'Ma\'lumot uchun uchun'
```

Agar satrda `\` belgi qatnashsa satr oldidan `r` harfini qo'shib satrda `\` belgisidan foydalanish mumkin
```python
message = r'\home\python\lesson1' # linuxda
message = r'D:\python\lesson1' # windowsda
```

## Ko'p qatorli satrlarni yaratish
Satrni bir necha qatorga o'tkazish uchun siz uchta qo'shtirnoq `"""`…`"""` yoki uchta bir tirnoq  `'''`…`'''` dan foydalanasiz. Masalan:
```python
user_data = '''
first_name : Eshmat
last_name : Teshmatov
username : teshmatkhan
password : ****
'''

print(user_data)
```

## F-String  bilan satrlarda o'zgaruvchilardan foydalanish
Ba'zan siz satrda o'zgaruvchilar qiymatlaridan foydalanmoqchi bo'lsangiz,
`f` harfni qo'shtirnoq oldiga qo'ying va o'zgaruvchini `{}` bilan o'rang
```python
name = 'Eshmat'
message = f'Salom {name}!'
print(message) # Salom Eshmat!
```

## Satrlarini birlashtirish
Satr harflarini bir-birining yoniga qo'yganingizda, Python ularni avtomatik ravishda bitta satrga birlashtiradi . Masalan:
```python
greeting = 'Xayrli ' 'Tong!'
print(greeting) # Xayrli Tong!
```

Ikki qatorli o'zgaruvchilarni birlashtirish uchun `+` operatordan foydalanasiz :
```python
greeting = 'Xayrli '
time = 'Kun'

greeting = greeting + time + '!'
print(greeting) # Xayrli Kun!
```

## String unicode elementlariga kirish
Satr belgilar ketma-ketligi bo'lgani uchun uning unicode elementlariga indeks yordamida kirishingiz mumkin. 
Satrdagi birinchi belgining indexi nolga teng.
```python
str = "Python String"
print(str[0]) # P
print(str[1]) # y
```

Agar siz manfiy indeksdan foydalansangiz, Python satr oxiridan boshlab belgini qaytaradi. Masalan:
```python
str = "Python String"
print(str[-1])  # g
print(str[-2])  # n
```

Quyida `Python String`ning string indekslari ko'rsatilgan :
```
+---+---+---+---+---+---+---+---+---+---+---+---+---+
| P | y | t | h | o | n |   | S | t | r | i | n | g | 
+---+---+---+---+---+---+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6   7   8   9   10  11  12
-13  -12 -11 -10 -9  -8  -7  -6  -5  -4   -3  -2  -1 
```

## Satr uzunligini hisoblash
Satr uzunligini olish uchun siz `len()` funksiyadan foydalanasiz. Masalan:
```python
str = "Python String"
str_len = len(str)
print(str_len) # 13
```

## Satrlarni kesish
Kesish sizga satrdan ichki satrni olish imkonini beradi. Masalan:
```python
str = "Python String"
print(str[0:2]) # Py
```

## Strings immutable(o'zgarmas)
Pythonda satrlar o'zgarmasdir. Bu siz satrni o'zgartira olmaysiz degan ma'noni anglatadi. Masalan, satrdagi bir yoki bir nechta belgilarni yangilasangiz, siz xatoga duch kelasiz:
```python
str = "Python String"
str[0] = 'J'
```
</Box>