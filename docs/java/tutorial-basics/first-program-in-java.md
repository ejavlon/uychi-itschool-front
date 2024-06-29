---
sidebar_position: 2
---

# Java'da sizning birinchi dasturingiz

Xech qanday qo'shimcha dastur va `IDEA'larisiz` birinchi dasturingizni yarating!

```javaScript md title="Main.java"
public class Main{
  public static void main(String args[]){
    System.out.println("Hello world");
  }
}
```


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