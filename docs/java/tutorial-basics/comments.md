--- 
sidebar_position: 4
title: 'Kommentariyalar' 
--- 
 
import Box from '@mui/material/Box'; 
 
<Box sx={{textAlign: 'justify'}}> 
 
# Kommentariyalar

:::info Kommentariyalar
    Java'da commentlar code'larga izoh yozish yoki hujjatlashtrish uchun ishlatiladi.Commentga olingan code  kompilyator tomonidan e'tiborga olinmaydi
    va dastur ishlashiga ta'sir qilmaydi
:::

## Kommentariya turlari

Java-da uch xil komment turi mavjud

    - `//` -  Bir qator comment yaratish uchun
    - `/* */` -  Bir nechta qatorli comment yaratish uchun 
    - `/**  */` -  Documentatsiyalar yaratish uchun

## Kommentariyalar yaratish
Yuqorida keltirilgan comment turlariga misollar ko'rib chiqaylik

### Bir qator comment yaratish

```javascript md
public class Main {
	public static void main(String[] args) {
	   // System.out.println("Salom Dunyo"); 
		System.out.println("Uychi it school");  // console'ga "Uychi it school" chiqadi
	}
}
```

### Bir nechta qatorli comment yaratish

```javascript md
/*
    Dasturchi: Javlon Ergashev
    Sana: 30.08.2024
*/
public class Main {
	public static void main(String[] args) {	   
		System.out.println("Uychi it school");
	}
}
```

### Documentatsiyalar yaratish

```javascript
/**
 * Bu class oddiy bank hisobini tasvirlaydi.
 */
public class BankAccount {

    private double balance;

    /**
     * Yangi bank hisobini yaratadi.
     * 
     * @param initialBalance Boshlang'ich balans.
     */
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    /**
     * Hisobga pul qo'shadi.
     * 
     * @param amount Qo'shiladigan summa.
     */
    public void deposit(double amount) {
        balance += amount;
    }

    /**
     * Hisobdagi balansni qaytaradi.
     * 
     * @return Joriy balans.
     */
    public double getBalance() {
        return balance;
    }
}
```
</Box>