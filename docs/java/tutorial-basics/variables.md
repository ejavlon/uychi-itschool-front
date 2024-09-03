--- 
sidebar_position: 5
title: "O'zgaruvchilar" 
--- 
 
import Box from '@mui/material/Box'; 
 
<Box sx={{textAlign: 'justify'}}> 
 
# Java-da o'zgaruvchilar

## Static va dynamic dasturlash tillari

Statik (Static) va Dinamik (Dynamic) dasturlash tillari dasturlarni turli yo'llar bilan kompilyatsiya qilish va bajarishni tashkil etadigan ikkita asosiy dasturlash tillari toifasidir. 

### Static dasturlash tillari 

Statik dasturlash tillari bu kompilyatsiya vaqtida (compile-time) kodning ko'p qismini tekshiradigan va aniqlaydigan dasturlash tillaridir. Ushbu tillarda ko'pincha statik tiplash (static typing) ishlatiladi, ya'ni barcha o'zgaruvchilar, funktsiyalar va argumentlarning turlari oldindan aniq belgilangan bo'ladi.

- Xususiyatlari:

    - Tip tekshiruvi kompilyatsiya vaqtida: O'zgaruvchilarning va methodlarning tiplari dastur kompilyatsiya qilinayotgan vaqtda aniqlanadi va tekshiriladi. Masalan, Integer turidagi o'zgaruvchiga String qiymatni tayinlash xatosi kompilyatsiya vaqtida aniqlanadi.
    Yuqori bajarilish tezligi: Kodning statik bo'lishi va kompilyatsiya vaqtida ko'p xatolar aniqlanishi sababli, statik tillar odatda yuqori bajarilish tezligini ta'minlaydi.
    - Xatolarni erta aniqlash: Statik dasturlash tillari xatolarni kompilyatsiya vaqtida aniqlashga imkon beradi, bu esa dastur kodini ishga tushirishdan oldin xatolarni tuzatishga yordam berad
- Misollar:

    - Java: Har bir o'zgaruvchi va method oldindan belgilangan tipga ega.
    - C/C++: Statik tiplash qoidalariga rioya qilinadi va o'zgaruvchilarni e'lon qilishda ularning turi ko'rsatiladi.

- Tezlik:  
    - Statik tillar odatda tezroq ishlaydi, chunki tiplar kompilyatsiya vaqtida aniqlanadi va optimallashtiriladi

- Moslashuvchanlik:
    - Statik tillar esa ko'proq oldindan aniq belgilangan strukturali loyihalar uchun mos keladi.

- Xato aniqlash: 
    - Statik tillar xatolarni dastur kompilyatsiya qilinayotganda aniqlashga yordam beradi

### Dinamik Dasturlash Tillari

Dinamik dasturlash tillari kompilyatsiya vaqtida emas, balki dastur ishlash vaqtida (runtime) kodning ko'p qismini aniqlaydigan va tekshiradigan tillardir. Ushbu tillarda ko'pincha dinamik tiplash (dynamic typing) ishlatiladi, ya'ni o'zgaruvchilarning turlari oldindan aniq belgilangan bo'lmasligi mumkin va ularning turlari dastur ishlayotgan vaqtda aniqlanadi.

- Xususiyatlari:

    - Tip tekshiruvi bajarilish vaqtida: O'zgaruvchilarning va funksiyalarning tiplari dastur ishlayotgan vaqtda aniqlanadi va tekshiriladi. Bu esa dastur yanada moslashuvchan bo'lishini ta'minlaydi.
    Moslashuvchanlik: Dinamik tillar ko'proq moslashuvchan bo'lib, dasturchiga kod yozishda ko'proq erkinlik beradi. Misol uchun, o'zgaruvchining turi bajarilish vaqtida o'zgarishi mumkin.
    - Xatolarni kech aniqlash: Dastur ishlash vaqtida xatolarni aniqlash mumkin, bu esa ba'zi holatlarda kechikishlarga yoki xatolarning dastur ishini to'xtatishiga olib kelishi mumkin.

- Misollar:

    - Python: O'zgaruvchilarning tiplari oldindan belgilanishi shart emas, va ular har qanday vaqtda o'zgarishi mumkin.
    - JavaScript: Dinamik tipli dasturlash tili bo'lib, o'zgaruvchilarni e'lon qilishda ularning turi belgilanmaydi.
- Tezlik:
    - Dinamik tillarda tiplar ishlash vaqtida aniqlanadi, bu esa ba'zan qo'shimcha resurslar talab qiladi.

- Moslashuvchanlik:
    - Dinamik tillar ko'proq moslashuvchan va tez-tez o'zgarib turadigan kodlar bilan ishlash uchun qulayroq.

- Xato aniqlash: 
    - Dinamik tillarda xatolar ko'pincha dastur ishlash vaqtida aniqlanadi.


<div style={{textAlign: 'center'}}>
    <!-- ![jre.jpg](./static/jdk.jpg) -->
    ![java-data-types.jpg](./static/java-data-types.png)
</div>

## Primitive ma'lumot turlari

Java dasturlash tilida primitiv o'zgaruvchi turlari dasturda asosiy ma'lumotlarni saqlash uchun ishlatiladi. Bu turlar to'g'ridan-to'g'ri qiymatlarni saqlaydi va har biri o'zining xotira hajmi va qiymat diapazoniga ega. Quyida Java-da mavjud bo'lgan primitiv o'zgaruvchi turlari, ularning xotira hajmi va qiymat oralig'i haqida ma'lumotlar keltirilgan:

### Butun sonlar

| Nomlanishi | Qiymatlar oralig'i | Stack'da egallagan hajmi | Izoh |
| :--------: | :----------------: | :----------------------: | :--: |
| byte | -128 dan 127 gacha | 1 bayt (8 bit) |  Eng kichik butun sonli tur. |
| short | -32,768 dan 32,767 gacha | 2 bayt (16 bit) | Kichikroq butun sonlarni saqlash uchun ishlatiladi.|
| int | -2,147,483,648 dan 2,147,483,647 gacha | 4 bayt (32 bit) | Odatda umumiy butun sonli ma'lumotlarni saqlash uchun ishlatiladi. Eng ko'p ishlatiladigan primitiv tur.|
| long | -9,223,372,036,854,775,808 dan 9,223,372,036,854,775,807 gacha | 8 bayt (64 bit) |  Juda katta butun sonlarni saqlash uchun ishlatiladi. |


### Haqiqiy sonlar

| Nomlanishi | Qiymatlar oralig'i | Stack'da egallagan hajmi | Izoh |
| :--------: | :----------------: | :----------------------: | :--: |
| float | ±3.40282347E+38F (taxminan ±1.4E-45F dan ±3.4E+38F gacha) | 4 bayt (32 bit) | Suzuvchi nuqtalik o'nlik kasrli sonlarni saqlash uchun ishlatiladi. |
| double | ±1.79769313486231570E+308 (taxminan ±4.9E-324 dan ±1.7E+308 gacha) | Yuqori aniqlikdagi o'nlik kasrli sonlarni saqlash uchun ishlatiladi. Ko'proq matematik hisoblashlar va aniqlik talab qiladigan operatsiyalar uchun ishlatiladi.|

### Belgi va mantiqiy toifa turlari

| Nomlanishi | Qiymatlar oralig'i | Stack'da egallagan hajmi | Izoh |
| :--------: | :----------------: | :----------------------: | :--: |
| char | 0 dan 65,535 gacha (Unicode harflar va belgilarga mos keladi) | 2 bayt (16 bit) | Yagona belgi yoki harfni saqlash uchun ishlatiladi. Unicode kodlash tizimidan foydalanadi. |
| boolean | `true` yoki `false` | Rasmiy xotira hajmi standarti mavjud emas, lekin Java-da odatda 1 bayt yoki bitta bitdan foydalaniladi | Mantiqiy qiymatlar (haqiqatlik yoki yolg'onlikni) saqlash uchun ishlatiladi.|

</Box>