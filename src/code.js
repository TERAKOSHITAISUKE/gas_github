function myFunction() {
  console.log("hello world")
}

//ENOENT: no such file or directory, open 'C:\Users\denps\.clasprc.json'

function tera2_1() {
    class Person{
      constructor(height, weight) {
        this.height = height;
        this.weight = weight;
      }
    }
    const tera = new Person(165, 60);
    console.log(tera, tera.height, tera.weight);//{ height: 165, weight: 60 } 165 60
    
}


function tera2_2(){
   class Onigiri{
      constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
      }
   };
   const item = new Onigiri('梅', 120, 5);
   console.log(item.name, item.price, item.stock);//梅 120 5

   const item2 = new Onigiri('昆布', 90, 20);
   console.log(item2.name, item2.price, item2.stock);//昆布 90 20
}