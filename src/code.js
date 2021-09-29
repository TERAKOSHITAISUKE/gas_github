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


function tera2_3(){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート2');
  const data = sheet.getDataRange().getValues();
  const column_name = data[0];
  let column_name_str = data[0].join(',');
  // console.log(data[1].join(','))
  // return

  // class Onigiri{
  //   constructor(column_name_str){
  //     this.column_name[0] = column_name[0];
  //     this.column_name[1] = column_name[1];
  //     this.column_name[2] = column_name[2];
  //   }
  //  }
   class Onigiri{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
   }
  const test = new Onigiri(data[1][0],data[1][1],data[1][2]);
  console.log(test.price);
}

/**
 * varsion_1
 * シートのレコード全てをクラス化したおにぎりのログを吐き出すコード
 */

 function tera2_3_1() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート2');
  const data = sheet.getDataRange().getValues();
  data.shift();

  class Onigiri {
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  }

  //for of 文を使って
  for (const el of data) {
    const item = new Onigiri(el[0], el[1], el[2]);
    console.log(item);
    /**
      { name: 'ツナ、ツナマヨネーズ', price: 100, stock: 210 }
      { name: 'しゃけ', price: 100, stock: 300 }
      { name: '明太子', price: 110, stock: 500 }
      { name: '梅干し', price: 100, stock: 600 }
      { name: '昆布', price: 90, stock: 700 }
      { name: 'かつお', price: 100, stock: 100 }
      { name: 'たらこ', price: 130, stock: 10 }
      { name: 'いくら', price: 150, stock: 0 }
      { name: '天むす', price: 160, stock: 150 }
      { name: '海老マヨネーズ', price: 100, stock: 2 }
    */
  }
  
  //mapを使って
  const item_map = data.map(el => new Onigiri(el[0], el[1], el[2]));
  console.log(item_map);

  /**
   * 	[ { name: 'ツナ、ツナマヨネーズ', price: 100, stock: 210 },
      { name: 'しゃけ', price: 100, stock: 300 },
      { name: '明太子', price: 110, stock: 500 },
      { name: '梅干し', price: 100, stock: 600 },
      { name: '昆布', price: 90, stock: 700 },
      { name: 'かつお', price: 100, stock: 100 },
      { name: 'たらこ', price: 130, stock: 10 },
      { name: 'いくら', price: 150, stock: 0 },
      { name: '天むす', price: 160, stock: 150 },
      { name: '海老マヨネーズ', price: 100, stock: 2 } ]
   */

}

/**-------------------------------------------------------------------------------- */


/**
 * version_2
 * 関数doingのtera2_3()に
 * 数字の引数を渡すとクラス化したおにぎりのログを吐き出すコード
 * 
 */
function doing() {
  tera2_3(1, 2, 3, 10);//引数に任意の数字を入力する
}

function tera2_3(...x) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート2');
  const data = sheet.getDataRange().getValues();
  const number_array = [...x];

  //シートの最大行を越えたらアラートするif文
  const lastRow = sheet.getLastRow();
  const number_array_max = Math.max(...number_array);

  if (lastRow < number_array_max) {
    console.error('シートにあるレコードの最大行数を越えています。1から', lastRow - 1, 'の間でで入力し直してください')
  } else {

    class Onigiri {
      constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
      }
    }

    //for of 文を使って
    for (const i of number_array) {
      const item = new Onigiri(data[i][0], data[i][1], data[i][2]);
      console.log(item);
      /**
      *{ name: 'ツナ、ツナマヨネーズ', price: 100, stock: 210 }
      *{ name: 'しゃけ', price: 100, stock: 300 }
      *{ name: '明太子', price: 110, stock: 500 }
      *{ name: '海老マヨネーズ', price: 100, stock: 2 }
      */
    }

    //filterとmapを使って
    const item_filter = data.filter((x, index) => number_array.includes(index) == true).map(el => new Onigiri(el[0], el[1], el[2]));
    console.log(item_filter);
    /**
     * 	[ { name: 'ツナ、ツナマヨネーズ', price: 100, stock: 210 },
     * { name: 'しゃけ', price: 100, stock: 300 },
     * { name: '明太子', price: 110, stock: 500 },
     * { name: '海老マヨネーズ', price: 100, stock: 2 } ]
    */
  }
}