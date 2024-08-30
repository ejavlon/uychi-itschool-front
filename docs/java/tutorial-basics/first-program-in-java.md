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
 
## Endi nimalar yozilganini bitta qarab chiqaylik. 
 
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
 
export const Highlight = ({children, color}) => ( 
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
 
<Highlight color="green">RUN</Highlight> 
 
:::danger tez kunda  
::: 
</Box>