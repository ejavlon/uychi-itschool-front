---
sidebar_position: 1
---

# Python sintaksisi
Python tilida dastur instruktsiyalar to'plamidan tashkil topgan bo'lib, har bir
instruktsiya alohida qatorda joylashgan bo'lishi kerak bo'ladi. Masalan:

```python
print(3 + 5)
print("Python – dasturlash tili!")
```

Python da xat boshi ```(otstup)``` juda muhim ahamiyatga ega hisoblanadi.Xat
boshining noto'g'ri joylashtirilishi dasturda xatolikka olib keladi. Masalan
yuqoridagi dastur kodini quyidagicha yozamiz:

```python
print(3 + 5)
    print("Python – dasturlash tili!")
```

Ushbu dastur kodi yuqoridagisi bilan bir xil bo'lishiga qaramasdan
interpretator xatolik haqida xabar chiqaradi va dastur bajarilmaydi. Shuning uchun
ham Pythonda har bir instruktsiya alohida qatorda yozilishi shart. Ushbu hususiyat
Pythonning boshqa tillardan, masalan: `Java`, `C#` tillaridan farqli jihatlaridan biri
hisoblanadi.

Shunga qaramasdan Python tilining ba`zi konstruktsiyalari bir necha
qatorlarda yoziladi. Masalan if shart konstruktsiyasi shular jumlasidan:

```python
if 10 < 20:
print("Shart bajarildi")
```

Bu holatda 10 soni 20 sonidan kichik va "Shart bajarildi" so'zi chiqariladi.
print("Shart bajarildi") instruktsiyasi oldida albatta xat boshi bo'lishi shart, chunki
u alohida o'zi ishlatilmagan balki if shart konstruktsiyasining qismi sifatida
qo'llanilgan. Odatda xat boshi 4 ga karrali probellar soni (4, 8,12) bilan yozish
kelishilgan, lekin probellar soni 5 va undan ortiq bo'lsa ham dastur ishlaydi.

## Instruktsiyalarning davomi

Python instruktsiyalarni ajratish uchun yangi qator belgisidan foydalanadi. U har bir instruktsiyani bitta qatorga joylashtiradi.
Biroq, uzun instruktsiya teskari chiziq ```\``` belgisidan foydalangan holda bir nechta satrlarni qamrab olishi mumkin.
Quyidagi misolda ikkinchi qatordagi gapni davom ettirish uchun teskari chiziq ```\``` belgisidan qanday foydalanish ko‘rsatilgan:

```python
if (a == True) and (b == False) and \
   (c == True):
    print("instruktsiyalarning davomi")
```

## Registrga sezuvchanlik
Python – registrga sezuvchan til hisoblanadi.
Shuning uchun `print`, `Print` yoki `PRINT` ifodalar turli ifodalarni anglatadi. Agarda
`print` berilganlarni chiqarish ifodasi o'rniga `Print` ishlatilsa xatolik yuz berganligini
ifodalovchi ```name "Print" is not defined``` shaklidagi xabar chiqadi.

## Kommentariyalar (Izohlar)
Pythonda u yoki bu dastur kodlari qismlari
nima ish qilishini qayd qilib ketish uchun izohlardan foydalaniladi. Interpretator dasturni 
baytkodga tarjima qilayotganda yoki bajarayotganda izohlarni  e'tiborsiz
qoldiradi. Shuning uchun izohga olingan berilganlar dastur ishlashiga hech qanday ta'sir ko'rsatmaydi.

Python dasturlash tilida izoh qo'yish uchun ```#``` belgisidan foydalaniladi.
Odatda izohlar blokli va satrli izohlarga ajratiladi. Lekin har ikkalasi ham ```#```
belgisi orqali hosil qilinadi. Farqi satr izohlar dastur kodi yozilgan qatorda koddan
keyin yoziladi va u shu satr nima ish bajarishi to'g'risidagi ma'lumotlardan tashkil
topadi, ya'ni:

```python
print("Shart bajarildi") # xabarni konsolga chiqarish
```

Blokli izohlar esa dasturning biror qismi nima ish bajarishi yoki shu qism
mazmunini foydalanuvchiga qisqacha ochib berish uchun ishlatilib, dasturni shu
qismi kodlaridan oldin alohida satr yoki satrlarda ```#``` va bitta probel bilan yoziladi,
masalan:

```python
# ushbu funksiya 1 dan n gacha bo`lgan butun sonlarning
# yigindisini hisoblaydi

def Summa(n):
    s=0
    for a in range(1,n+1):
        s = s + a
        print(a, " ",s)
    return s
```

## Kalit so'zlar
Ba'zi so'zlar Pythonda alohida ma'noga ega. Ular kalit so'zlar deb ataladi.
Quyida Python-da kalit so'zlar ro'yxati ko'rsatilgan:    
```
False      class      finally    is         return
None       continue   for        lambda     try
True       def        from       nonlocal   while
and        del        global     not        with
as         elif       if         or         yield
assert     else       import     pass
break      except     in         raise
```

Joriy kalit so'zlar ro'yxatini topish uchun siz quyidagi koddan foydalanasiz:

```python
import keyword

print(keyword.kwlist)
```

## Asosiy funksiyalar
Python o'z ichiga bir necha ichki funksiyalarni qamrab
olgan. Ularni ba'zilari dasturlash jarayonida, ayniqsa dasturlash sistaksisini
o'rganish paytida juda ko'p qo'llanilganligi sababli ularni alohida qarab chiqamiz.

Ma'lumotni konsol ekraniga chiqarish – ```print()``` funksiyasi hisoblanadi.
Funksiyaga argument sifatida konsolga chiqariluvchi qiymatlar (satr, son, ifoda va
x.k.) berilishi mumkin:

```python
print("Hello world!")
```

Agarda birdaniga bir nechta qiymatlarni chop etish talab qilinsa, u holda
ularni print() funksiyasiga ```,``` bilan ajratib kiritiladi:

```python
print("F.I.SH.:","Eshmatov","Toshmat")
```

> Natijada ular ekranga probel bilan ajratilgan holatda chop etiladi:  
F.I.O: Eshmatov Toshmat

Agarda ```print()``` funksiyasi ma'lumotlarni chop qilish uchun mo'ljallangan
bo'lsa, ```input()``` ekrandan berilganlarni kiritish uchun qo'llaniladi. ```input()```
funksiyasiga argument sifatida biror bir satr berilishi mumkin. Ushbu satr konsol
ekranida aks ettirilib, kiritilishi kerak bo'lgan berilganlar uchun yordamchi taklif
vazifasini bajaradi. Masalan:

```python
name = input("F.I.O.: ")
print("Salom", name)
```

Natijaning konsol ekranidagi ko'rinishi quyidagicha bo'ladi:
> F.I.O.: Eshmatov Toshmat  
Salom Eshmatov Toshmat

