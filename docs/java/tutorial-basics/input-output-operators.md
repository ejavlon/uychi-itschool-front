--- 
sidebar_position: 6
title: "Kiritish, chiqarish va o'zlashtrish operatori" 
--- 
 
import Box from '@mui/material/Box'; 
 
<Box sx={{textAlign: 'justify'}}> 
 
# Java-da kiritish, chiqarish va o'zlashtrish operatori 

Java-da kiritish, chiqarish va o'zlashtirish operatorlari quyidagilar:

## Kiritish (Input):

Kiritish uchun Java-da `Scanner` sinfidan foydalaniladi. Bu sinf orqali foydalanuvchi konsoldan qiymat kiritishi mumkin.

```javascript
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ismingizni kiriting: ");
        String name = scanner.nextLine();  // String qiymat kiritish
        System.out.println("Salom, " + name + "!");
    }
}
```

## Chiqarish (Output):

Chiqish operatorlari uchun Java-da `System.out.println()`, `System.out.print()` va `System.out.printf` ishlatiladi.

- `System.out.println()` – ma'lumotni chiqaradi va yangi qatorga o'tadi.
- `System.out.print()` – ma'lumotni chiqaradi, lekin yangi qatorga o'tmaydi.
- `System.out.printf` – formatlangan matnni chiqarish uchun ishlatiladi

```javascript
public class Main {
    public static void main(String[] args) {
        System.out.print("Bu qator yangi qatorga o'tmaydi. ");
        System.out.println("Bu qator yangi qatorga o'tadi.");
    }
}
```

Formatlangan matnni chiqarish uchun namuna:

```javascript
public class Main {
    public static void main(String[] args) {
        String name = "Javlon";
        int age = 25;
        double height = 1.78;
        
        // %s - string, %d - butun son, %f - kasrli son (double)
        System.out.printf("Ismingiz: %s, Yoshingiz: %d, Bo'yingiz: %.2f metr\n", name, age, height);
    }
}
```

## O'zlashtirish (Assignment):

O'zlashtirish operatori `=` belgisi orqali qiymatlarni o'zgaruvchilarga tayinlash uchun ishlatiladi.

```javascript
public class Main {
    public static void main(String[] args) {
        int x = 10;  // x ga 10 qiymatini tayinlash
        String text = "Salom";  // text ga "Salom" qiymatini tayinlash
        
        System.out.println("x ning qiymati: " + x);
        System.out.println("text ning qiymati: " + text);
    }
}
```

- O'zlashtirish operatori o'zgaruvchi va unga qiymat tayinlash uchun ishlatiladi.
- Kiritish va chiqarish esa foydalanuvchi bilan o'zaro aloqani tashkil qiladi

</Box>