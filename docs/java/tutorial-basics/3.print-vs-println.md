--- 
sidebar_position: 3
title: 'Print va println' 
--- 
 
import Box from '@mui/material/Box'; 
 
<Box sx={{textAlign: 'justify'}}> 
 
# Java-da print va println metodlari

Java'da print va println metodlari console'ga xabar chiqarish uchun ishlatiladi

Ularning o'rtasidagi asosiy farqi `Hello world` xabarni console'ga chiqarishda ko'rib chiqaylik.

print metodi orqali:
```javascript
    System.out.print("Hello");
    System.out.print("World");
```
println metodi orqali:
```javascript
    System.out.println("Hello");
    System.out.println("World");
```
 
print metodi yozilgan code'ni ishga tushurgandagi natija:
```
HelloWorld
```

println metodi yozilgan code'ni ishga tushurgandagi natija:
```
Hello
World
```

print metodida unga qanday matn berilgan bo'lsa uni shundayligicha davomidan qo'shi ketdi

println metodida esa berilgan matndan so'ng `\n` (satr oxiri belgisi) qo'shildi

Ya'ni bu yerda quyidagi code teng kuchli (bir xil vazifa bajaradi):
```javascript
    System.out.print("Hello\n")
    System.out.print("World\n")
```
```javascript
    System.out.println("Hello");
    System.out.println("World");
```
</Box>