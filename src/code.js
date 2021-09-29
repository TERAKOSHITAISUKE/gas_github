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
   const item = new Onigiri('梅', 120, 5);
   console.log(item.name);
   console.log(item.price);
   console.log(item.stock);
  };
}