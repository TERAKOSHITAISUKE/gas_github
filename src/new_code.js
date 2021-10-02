function tera2_5() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート2');
  const data = sheet.getDataRange().getValues();
  data.shift();

  class Onigiri {
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
    getTaxIncluded(tax = 0.1) {
      return this.price * (1 + tax)
    }
    isSoldOut() {
      if (this.stock > 0) {
        return 'true';
      } else {
        return 'false';
      }
    }
  };

  const item = new Onigiri('梅', 100, 50);
  console.log(item);                      //{ name: '梅', price: 100, stock: 50 }
  console.log(item.getTaxIncluded(0.08)); //108
  console.log(item.isSoldOut());          //true
}