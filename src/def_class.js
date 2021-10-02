/**
 * class Animal {}
 * var o1 = new Animal(); インスタンスを作成するには new を用います。
 * delete o1; インスタンスを削除するには delete を用います。
*/

/**
 * constructor() は、オブジェクトを生成する際に初期化関数として呼ばれるメソッドを定義します。
 * 下記の例では、オブジェクト生成時に種別(type)引数を渡し、オブジェクト内部のメンバ変数(this.type)に記録しています。
 */
function origin() {
  class Animal {
    constructor(type) {
      this.type = type;
    }
  };

  const o1 = new Animal("Cat");
  console.log(o1.type);         // => Cat
}


/**
 * クラス定義の中では、メソッドを定義することができます。
 * メンバ関数は、オブジェクト.メンバ関数名() の形式で呼び出します。
 * メソッドを定義する際は、function は不要です。
 */

function def_class() {
  class Animal {
    setType(type) {
      this.type = type;
    }
    getType() {
      return this.type;
    }
  };

  const o1 = new Animal();
  o1.setType("Cat");
  console.log(o1.getType());     // => Cat
}

/**
 * static は、スタティックメソッドを定義します。
 * スタティック関数は、オブジェクトを生成しなくても、クラス名.スタティック関数名() で呼び出すことができるメソッドです。
 * 
*/
function def_class_1() {
  class Animal {
    static hello() {
      console.log("Hello!");
    }
  };

  Animal.hello();    // => Hello!
}

/**
 * get はゲッター(getter)、set はセッター(setter)を定義します。
 * ゲッター・セッターは、クラス利用者に対してはプロパティ(属性)のように簡単に代入や参照ができ、
 * かつ、クラス開発者にとっては、代入・参照の際にメソッドがコールされ、代入・参照時にログを記録したり複雑な内部処理を実行することが可能となります。
 */
function def_class_2() {
  class Animal {
    get type() {
      console.log("get:" + this._type);
      return this._type;
    }
    set type(arg) {
      console.log("set:" + arg);
      this._type = arg;
    }
  };

  const o1 = new Animal();
  o1.type = "Cat";         // setter メソッドが呼ばれる
  console.log(o1.type);    // getter メソッドが呼ばれる
}

/**
 * prototype を用いて、定義済のクラスに変数やメソッドを追加することができます。
 */
function def_class_3() {
  class Animal {
  };
  Animal.prototype.type = "Goog Morning";
  Animal.prototype.hello = function () {
    console.log("Hello!");
  }

  const o1 = new Animal();
  console.log(o1.type);
  o1.hello();
}

/**
 * クラスは継承することができます。
 * 継承元をスーパークラス(親クラス)、継承先をサブクラス(子クラス)と呼びます。
 * Animal クラスを親クラスとして、Cat という子クラスを定義するには extends を用いて次のようにします。
 * 子クラスでは、親クラスのメソッドや変数を継承することができます。
*/
function def_class_4() {
  class Animal {
    hello1() {
      console.log("Hello!");
    }
  };

  class Cat extends Animal {
    hello2() {
      console.log("Hello World!");
    }
  };

  const o1 = new Cat();
  o1.hello1();             // => Hello!
  o1.hello2();             // => Hello  World!
}

/**
 * super() は親のコンストラクタを呼び出します。
 * super() は最初に使用する this よりも先に呼び出す必要があります。
*/
function def_class_5() {

  class Animal {
    constructor(type) {
      this.type = type;
    }
  };

  class Cat extends Animal {
    constructor(name) {
      super("Cat");
      this.name = name;
    }
  };

  const o1 = new Cat("Mii-chan");
  console.log(o1.type);        // => Cat
  console.log(o1.name);        // => Mii-chan

}

/**
 * 子クラスのコンストラクタを省略すると、子クラス作成時の引数を使用して親クラスのコンストラクタが自動的に呼び出されます。
 * これは、constructor(...args) { super(...args); } と同じ動作となります。
*/
function def_class_6() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  };

  class Cat extends Animal {
    // constructor(...args) { super(...args); }
  };

  const o1 = new Cat("Mii-chan");
  console.log(o1.name);        // => Mii-chan
}

/**
 * 下記の様にして、親クラスのメソッドを呼び出すこともできます。
*/
function def_class_7() {
  class Animal {
    hello_super() {
      console.log("Hello!");
    }
  };

  class Cat extends Animal {
    hello_child() {
      super.hello_super();
    }
  };

  const o1 = new Cat();
  o1.hello_child();          // => Hello!
}

/**
 * 下記の様にクラス式を用いて、クラス名を持たない匿名クラスを作成することができます。 
 */
function def_class_8() {
  const o1 = class {
    constructor() {
      this.type = "Cat";
    }
  };
  const instance = new o1();
  console.log(instance.type);     // => Cat
}

