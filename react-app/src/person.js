export class Person {
    constructor(name) {
        this.name = name;   
        // Teacher class'ından bir obje oluşturulurken "name" property'si burada atanacak 
    }

    walk() {
        console.log("walk");
    } 
} 

// başa export yazarak class'ı private'den public'e çevirmiş oluyoruz.
// export ifadesi olmasaydı ön tanımlı olarak bu class private olacaktı.
