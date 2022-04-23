import { Person } from "./person"; // ./person dosyasına relative path verdik. teacher.js ile aynı dizindeyiz
// VS code, import { Pe yazınca, Person önerisini verip direkt yukarıdaki satırı tamamlıyor

function promote() {}   // dışardan erişilemez
export function promote2() { console.log("promote2"); }   // dışardan erişilebilir

export default class Teacher extends Person {  // Teacher class'ı aynı zamanda Person class'ını da içeriyor.
    constructor(name, degree) {
        super(name); 
        // child class olan Teacher'ın master Person class'ının constructor'ı,
        // "name" parametresi ile çağrılıyor.
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

// class'lar javaScript'te teknik olarak birer objedir !!!
