---
sidebar_position: 5
title: 'Boolean'
---

import Box from '@mui/material/Box';

<Box sx={{textAlign: 'justify'}}>

# Boolean
Dasturlashda siz ko'pincha shartning to'g'ri yoki noto'g'riligini tekshirishni va natijaga qarab ba'zi harakatlarni bajarilishi mumkin.
Rost va yolg'onni ko'rsatish uchun Python sizga mantiqiy ma'lumotlar turini taqdim etadi. Pythin-da bool turidagi o'zgaruvchilar mantiqiy
qiymat turlani saqlashda ishlatiladi.

bool turidagi o'zgaruvchi o'zida ikkita qiymatni saqlashi mumkin: `True` va `False`.Misol uchun:
```python
is_active = True
is_admin = False
```

Ikki raqamni solishtirganda , Python natijani mantiqiy qiymat sifatida qaytaradi. Masalan:
```python
number_one = 20
number_two = 10
result = number_one > number_two

print(result) # True
print(number_one < number_two) # False
```

Shuningdek, ikkita satrni solishtirish mantiqiy qiymatga olib keladi:
```python
print('a' < 'b') # True

print('a' > 'b') # False
```

## bool() funktsiyasi
Python-dagi `bool()` funktsiyasi qiymatni mantiqiy ( `True` yoki `False`) ga aylantirish uchun ishlatiladi. 
U berilgan qiymatga qarab `True` yoki `False` qiymat qaytaradi.Masalan:
```python
>>> bool('Hi')
True
>>> bool('')
False
>>> bool(100)
True
>>> bool(0)
False
```

Quyidagi qiymatlar python-da False qiymat qaytaradi:
    - Nol raqami ( 0)
    - Bo'sh qator `''`
    - `False`
    - `None`
    - Bo'sh ro'yxat `[]`
    - Bo'sh kortej `()`
    - Bo'sh to'plam `{}`
## Mantiqiy operatorlar
Murakkab shartli ifodalarni yozish, odatda mantiqiy amallar yordamida
amalga oshiriladi. Pythonda quyidagi mantiqiy operatorlar mavjud:  
### AND (mantiqiy ko'paytirish)
Murakkab ifodadagi biror bir qism ifodani
qiymati False bo'lsa, ifodaning yakuniy qiymati `False` , aks holda `True` qiymat
qaytaradi. Masalan:
```python
age = 21
weight = 72
result = age > 17 and weight == 72
print(result) # True
```

Yuqoridagi dasturda murakkab mantiqiy amal ikki qismdan `age > 17` va
`weight > 56` qismlardan tashkil topgan bo'lib, ular `and` mantiqiy operatori bilan
birlashtirilgan. Agarda ikkala mantiqiy amal `True` qiymat qaytarsa ifodaning
qiymati `True` bo'ladi, aks holda `False` qiymat qaytaradi

`and` operatorining biror bir operandi False qiymatga ega bo‟lsa, u holda
boshqa operand qiymati tekshirib (hisoblanib) o'tirilmaydi, har doim natija `False`
bo'ladi. Bunday xususiyat ish unumdorligini bir oz bo'lsada oshirish imkonini
beradi. Xuddi shunaqa xususiyat or operatori uchun ham o'rinli. Ya'ni `or`
operatorining biror bir operandi qiymati `True` qiymatga ega bo'lsa, boshqa
operandlar tekshirilmaydi, natija sifatida har doim True qiymati qaytariladi.

Mantiqiy ifodalarda faqatgina taqqoslash amallaridan foydalanish shart emas.
Ixtiyoriy mantiqiy amal yoki boolean turidagi qiymatlar `True`, `False` ham
ishlatilishi mumkin. Masalan:
```python
age = 21
weight = 72
status = True
result = age > 17 and weight > 56 and status
print(result) # True
```
### OR (mantiqiy qo'shish)
Agarda ifodadagi biror bir qism ifoda `True` qiymat
qaytarsa, yakuniy natija ham `True`, aks holda `False` bo'ladi
```python
age = 21
status = False
result = age > 17 or status
print(result) # True
```

### NOT (mantiqiy inkor)
Ifodaning qiymatini `True` bo'lsa, natija `False` va
aksincha.
```python
age = 21
status = False
print(not age > 17) # False
print(not status) # True
```

Agar bitta ifodada bir nechta mantiqiy operatorlar qatnashgan bo'lsa, u holda
ularning ustunligiga (prioritetiga) alohida e'tibor qatarish kerak. Dastlab `not`
operatori keyin `and` va eng so'ngra `or` operatori bajariladi. Masalan:
```python
age = 22
status = False
weight = 58
result = weight == 58 or status and not age > 21 # True
print(natija)
```
Ushbu dasturda keltirilgan ifodadagi mantiqiy amallar kuyidagi ketmaketlikda bajariladi:
    1. `not age > 21` mantiqiy ifoda `False` qiymat qaytaradi;
    2. `status and False` (not age > 21) esa `False` qiymat qaytaradi;
    3. `weight == 58 or True` (status and not age > 21) esa `True` qiymat qaytaradi

:::info Yodda tuting
Shuni alohida ta'kidlash kerarki, mantiqiy ifodalarda mantiqiy amallarning
bajarilish ketma-ketligini qavslar `()` yordamida o'zgartirish mumkin.
:::
</Box>