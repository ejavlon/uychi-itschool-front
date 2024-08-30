--- 
sidebar_position: 2 
title: 'Java-da birinchi dastur' 
--- 
 
import Box from '@mui/material/Box'; 
 
<Box sx={{textAlign: 'justify'}}> 
 
# Java-da birinchi dasturingizni yarating 
 
## JDK'ni yuklab olish 
 
Xech qanday qo'shimcha dastur va IDEA dasturlarisiz birinchi dasturingizni yarating! 
 
Buning uchun bizning kompyuterda JDK o'rnatilgan bo'lishi lozim. 
 
Oracle'ning rasmiy  https://www.oracle.com saytidan `JDK`ni operatsion sistemaga mos versiyasini yuklab o'rnating 
 
Bloknot (linuxda shunga alternative text editor) dasturini oching va quyida dastur code'ni yozing 
 
```md title="Main.txt" 
public class Main{ 
  public static void main(String args[]){ 
    System.out.println("Hello world"); 
  } 
}  
```

Yaratilgan `Main.txt` nomli faylni `*.java` formatga o'zgartrib saqlang.   
 
Yaratilgan `Main.java` nomli compile qilish uchun `Main.java` turga papkada cmd (linuxda terminal) dasturini ishga tushiring va quyidagi commandani kiriting: 
```
javac Main.java  
```
 
Yuqoridagi jarayondan so'ng `Main.java` fayli joylashgan papkada Main.class fayl hosil bo'ladi. 
 
`Main.class` - byte code va uni ishga tushurish uchun `Main.class` turga papkada cmd (linuxda terminal) dasturini ishga tushiring va quyidagi commandani kiriting: 
```
java Main
```    
 
Natija quyidagicha ko'rinishda bo'lishi kerak: 
```
  Hello world  
```
 
## Code'ni tahlil qilib chiqaylik
 
```javaScript md title="Main.java" 
public class Main{ 
  public static void main(String args[]){ 
    System.out.println("Hello world"); 
  } 
}
```
 
 
- `Main` -  bu klasni nomi  
- `class` - class yaratish uchun kalit so'z(yuqorida holatda Main nomli class yaratishda ishlatilgan) 
- `public` - access modifikator.Bu yerda public modifikator class'da ishlatilgan (o'zgaruvchi va methodlar yaratishda ham ishlatiladi) yaratilayotgan class'ga 
project'nig ixtiyoriy qismidan murojat qilish imkonini yaratadi. 
 
:::info Yodda tuting
  Bitta `*.java` faylda bittda public class bo'ladi va  uning nomi `*.java` fayli nomi bilan bir xil bo'lishi kerak!
::: 

## Editor o'rnatish

Java muhitida code yozish uchun ko'plab editorlar mavjud, masalan:
- `Visual Studio Code (VS Code)`
  - Niam uchun tanlash kerak: Bepul va ochiq manba, plaginlar bilan yuqori darajada sozlanishi, yengilligi, keng ko'lamli tillarni qo'llab-quvvatlaydi va hamjamiyat   tomonidan katta yordamga ega.

  - Kamchiliklari: Java-da dastur ishlab chiqish uchun ko'proq sozlashni talab qiladi, IntelliJ bilan solishtirganda ba'zi ilg'or xususiyatlardan mahrum.

- `Eclipse`
  - Niam uchun tanlash kerak: Bepul va ochiq manba, Java rivojlanishi uchun kuchli, keng plagin ekotizimi, bir nechta dasturlash tillarini qo'llab-quvvatlaydi.

  - Kamchiliklari: sekinroq va ko'proq resurs talab qilishi mumkin, foydalanuvchi interfeysi eskirgandek tuyulishi mumkin va yangi boshlanuvchilar uchun bu juda qiyin bo'lishi mumkin.

- `NetBeans`

  - Niam uchun tanlash kerak: Bepul va ochiq manba, Java-da dastur ishlab chiqish uchun yaxshi, juda ko'p imkoniyatlardan tashqari, sozlash va ishlatish uchun qulay.

  - Kamchiliklari: Interfeys u qadar zamonaviy emas va u IntelliJ bilan solishtirganda kamroq sayqallangandek tuyulishi mumkin


- `IntelliJ IDEA`
  - Niam uchun tanlash kerak:  kodni to'ldirish, kuchli qayta ishlash vositalari, versiyani boshqarish tizimi integratsiyasi, Mustahkam disk raskadrovka va   sinov vositalari, plaginlar va moslashtirish, smart navigatsiya, tillararo refaktoring

  - Kamchiliklari: Resurs talab qiladi, yangi boshlovchilar uchun qiyin, narxi (community versiya bepul), uzoqroq vaqtda ishga tushushi, murakkab konfiguratsiya 


<!-- export const Highlight = ({children, color}) => ( 
  <span 
    style={{ 
      display : 'inline-block', 
      backgroundColor: color, 
      borderRadius: '20px', 
      color: '#fff', 
      padding: '10px', 
      cursor: 'pointer', 
      marginBottom : '15px', 
    }} 
    onClick={() => { 
      alert(`Hello world`); 
    }}> 
    {children} 
  </span> 
); 
 
<Highlight color="green">RUN</Highlight>  -->
 
</Box>