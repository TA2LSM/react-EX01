//"use strict"

/*
import React from 'react';          // react modülünden React objesini import et
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

/**
 * Orijinal Hello World tipi default uygulamaya ek olarak deneme için yazılan kısım
 */
/*
// "const" ya da "let" modern javaScript ifadesidir. Evvelden "var" kullanılıyormuş.
const element = <h1>Hello World</h1>;   // type: h1 olan React elementi oluşturulacak
// Bu satır bir JSX ifadesi sonunda ; var. String'ler "" içinde DEĞİL!
// BABEL bu ifadeyi "React.createElement" şekline otomatik çevirecek.
// Bu nedenle tepede React objesi import ediliyor.
// Burada amaç JSX şeklinde daha kolay bir yazımla kodu yazmak ve derleme
// işini BABEL'e bırakmak. 

//console.log(element);
// Eğer npm start ile react uygulaması çalıştırılmışsa her kaydedildiğinde otomatik olarak
// tekrar derleme yapılır ve değişiklikler direkt etkin olur. Buna "Hot module reloading"
// deniyor.

ReactDOM.render(element, document.getElementById("root"));
// Yukarı yazdığımız kod, public\index.html içinde id=root olan div kısmına yerleştirilecektir. 
// Gerçek hayattaki uygulamalarda, uygulamaya ait komponent render edilir. Bu komponent'te
// navigation bar, side bar, profil ...vs gibi children bileşenleri bulunmaktadır.
// Yani DOM olarak, tasarladığımız her şeyi root altında render ediyoruz.
*/

//--------------------------------------------------------------------------------
//--- 2. Bölüm ile ilgili kodları daha rahat yazmak için yukarıdaki kısmı kapattık
//--------------------------------------------------------------------------------

//--- DEĞİŞKENLER ----------------------------------------------------------------
// var -> fonksiyon içinde erişilebilecek değişkenler tanımlamak için aşağıdaki örnekte
// sadece for döngüsünde erişilebilir olması gereken i, fonksiyon içinde erişilebilir oldu.
// let -> sadece kod bloğu içinde erişilebilir olması istenen değişkenleri tanımlamak için
// const -> sadece kod bloğu içinde erişilebilir sabitleri tanımlamak için kullanılır
// function sayHello() {
//     for(var i = 0; i < 5; ++i) {
//         console.log("Hello " + i);
//     }
//     console.log("Hello (Extra)" + i);  // i burada da erişilebilir durumda
//     // javaScript'te bir değişken "var" olarak bir kod bloğu içinde tanımlanırsa o fonksiyon
//     // içinde her yerden erişilebilir. (kod akışında, tanımlandığı noktadan sonra tabii ki)

//     const str = "World ";
//     for(let j = 0; j < 5; ++j) {
//         //const str = "World ";
//         console.log("Hello " + str + j);
//     }    
//     //console.log("Hello (Extra)" + j);  // j burada erişilebilir DEĞİL !!!

//     // const x = 1;
//     // x = 2;          // derleme hatası verir
// }

// sayHello();
//--------------------------------------------------------------------------------

//--- OBJELER --------------------------------------------------------------------
// const person = {
//     name: "TA2LSM",                    // property
//     // bir obje içinde bir anahtar değerine fonksiyon atanmışsa o fonksiyon bir metottur.
//     // walk, person objesinin bir metodudur. talk da aynı şekilde. walk, talk gibi
//     // daha kısa yazılabilir.
//     walk: function(x) {console.log(x)},      // method
//     talk() {console.log("Hello")}      // method
// };

// const targetMember = "name";
// person[targetMember] = "Semih"; //eğer ki nereye erişeceğimizi biliyorsak direkt person.name = "Semih" denebilir.
// console.log(person.name);

// person.talk();          // talk metoduna bu şekilde de aşağıdaki walk metoduna erişimdeki gibi de erişebiliriz
// person["walk"](5);      // 5 parametresini böyle geçiyoruz
//--------------------------------------------------------------------------------

//--- KEYWORDS -------------------------------------------------------------------
// // (1)
// // "this" keyword'ü, javaScript'te HER ZAMAN hangi objeyi ifade ediyorsa onun adresini
// // (reference) döner. Diğer dillerde "this" ifadesinin işleyişi farklıdır. 
// const person = {
//     name: "TA2LSM",
//     walk() {
//         console.log(this)
//     }
// };

// person.walk();  
// // burada fonksiyonu, bir objenin metodu olarak çağırırsak "this" ifadesi HER ZAMAN 
// // o objenin referansını (adresini) döner. person objesinin başlangıç adresini referans alarak
// // person objesi terminale basılır.

// // Peki aşağıdaki gibi bir tanımlama yaparsak ne olur?
// const walk = person.walk;   // Fonksiyonu çağırmıyoruz yani .walk() DEĞİL !!!
// console.log(walk);          // Bu noktada "walk" artık bir fonksiyonu işaret eder.

// walk();   
// // Fakat yukarıdaki gibi standalone obje ya da fonksiyon olarak tek başına obje dışından çağırırsak
// // "this" ifadesi global window objesinin referansını döner.
// // react projesinde "strict mode" default olarak "enable" ise "undefined" değer dönecektir.
// // strict mode: javaScript kodlarını daha korumalı olarak işleten bir süreçtir.
// // Bu kod parçasında en tepede yazan "use strict" kaldırılırsa this ifadesinin "window"
// // objesini döndüğü görülebilir.

// // (2)
// const person = {
//     name: "TA2LSM",
//     walk() {
//         console.log(this)
//     }
// };
// person.walk();

// //const walk = person.walk;
// // javaScript'te her fonksiyon aynı zamanda bir objedir. "person.walk." yazarak bu objeye
// // ait metotları görebiliriz.

// // Yukarıdaki kod parçası yerine şu şekilde yazarsak "this" ifadesinin "window" objesi
// // yerine "person" objesini dönmesini sağlayabiliriz.
// const walk = person.walk.bind(person);
// walk();
//--------------------------------------------------------------------------------

//--- ARROW FUNCTIONS ------------------------------------------------------------
// // const square = function(number) {
// //     return number * number;
// // }

// // yukarıdaki fonksiyon ES6 ile birlikte aşağıdaki gibi yazılabilir:
// // const square = (number) => {return number * number}

// // eğer fonksiyon parametre almıyorsa () => {...} şeklinde yazılır.
// // eğer fonksiyon tek parametre alıyorsa (number) kısmındaki parantez de kaldırılabilir.
// // hatta aşağıdaki şekle bile çevrilebilir:
// const square = number => number * number;
// console.log(square(3));

// // Kullanışlı bir örnek:
// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false},
// ];

// //const activeJobs = jobs.filter(function(job) { return job.isActive; });
// const activeJobs = jobs.filter(job => job.isActive); // yukarıdaki yerine bu yazılabiliyor.
// console.log(activeJobs);

// const person = {
//     talk() {
//         console.log("this: ", this);
//     }
// } // bu şekilde person.talk(); çağrılırsa, "person" objesinin referansını görürüz
// const person = {
//     talk() {
//         setTimeout( function() {
//             console.log("this: ", this);           
//         }, 1000);
//     }
// }
// // bu şekilde person.talk(); çağrılırsa, "window" objesinin referansını görürüz
// // çünkü callback fonksiyonu olan function() kısmı person objesine ait değildir.
// // standalone bir fonksiyondur.
// const person = {
//     talk() {
//         var self = this;        //"var that = this;" de yaygın olarak kullanılabiliyor.
//         setTimeout( function() {
//             console.log("self: ", self);           
//         }, 1000);
//     }
// }
// bu şekilde person.talk(); çağrılırsa, "person" objesinin referansını görürüz
// Alternatif olarak yukarıdaki callback kısmını () => {...} şekline çevirirsek
// buna da gerek kalmaz.
// const person = {
//     talk() {
//         setTimeout( () => {
//             console.log("this: ", this);           
//         }, 1000);
//     }
// }

// person.talk();
//--------------------------------------------------------------------------------


//--- ARRAY MAP ------------------------------------------------------------------
// // map işlevi birden fazla değişkeni render etmek için kullanılacak.
// const colors = ["red", "green", "blue"];
// const items = colors.map( color => `<li>${color}</li>`);
// /**
//  * Yukarıdaki fonksiyonun aslı şu şekilde:
//  * const items = colors.map( function(color) { 
//  * return "<li>" + color + "</li>";
//  * });
//  * Burada arrow type callback fonksiyonuna geçilirse, bu fonksiyon tek bir argüman aldığı
//  * için color'daki parantez atılabilir. Fonksiyonda tek satır kod olduğu için "return"
//  * ve {} kısmı kaldırılabilir. Ayrıca dinamik biçimlendirme ile bir patern içine "color" 
//  * değerleri yukarıdaki gibi alınır geri döndürülebilir. ${} --> argument place holder
//  */
// console.log(items);
//--------------------------------------------------------------------------------


//--- OBJECT DESTRUCTING ---------------------------------------------------------
// const address = {
//     street: "Sokak 1",
//     city: "Sehir 2",
//     country: "Ulke 3"
// }

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// // yukarıdaki gibi tekrarlayan şekilde yapmak yerine aşağıdaki gibi yapılabilir:
// // const { street, city, country } = address; 
// // console.log(street, city, country);
// // const { street } = address;
// // console.log(street);
// const { street: st } = address;  // "street" özelliğini "st" olarak çıkartır.
// console.log(st);
// // Oluşturulacak street, city ve country, const tipinde olacaktır.
// // {} ifadesi "destructing" operatörüdür. Bu işlem ile address objesinden street,
// // city ve country kısmını çıkartıyoruz. sadece street için const { street } = address; 
// // yazılabilir.
//--------------------------------------------------------------------------------


//--- SPREAD OPERATOR ------------------------------------------------------------
// // const first = [1, 2, 3];
// // const second = [4, 5, 6];

// // //const combined = first.concat(second);
// // const combined = [...first, "+", ...second, "done"]; // spread operator "..."
// // //const clone = [...first];       // dizi kopyamala 
// // console.log(combined);
// // yukarıda dizi ile ilgili işlemler [] ile yapılıyor

// const first = { name: "Semih"};
// const second = { surname: "SENOL"};
// const third = { job: "Engineer"};

// const combined = {...first, ...second, ...third, location: "Turkiye"};
// const cloneObj = {...combined};
// console.log(combined, cloneObj);
// // yukarıda obje ile ilgili işlemler {} ile yapılıyor
//--------------------------------------------------------------------------------


//--- CLASSES --------------------------------------------------------------------
// // "alt" tuşuna basılı iken seçili duurmdaki bir kod parçası aşağı ve yukarı yön
// // tuşları ile taşınabiliyor.
// class Person { // pascal naming olacak CoolPerson, CalmPerson... vs gibi (çünkü class tanımlanıyor)
//     constructor(name) { // bu isim reserved yani bir keyword
//         this.name = name;   // buradaki this HER ZAMAN tanımlanacak objenin referansını döner
//     }

//     walk() {
//         console.log("walk");
//     } 
// } // Bu işleme "blueprint" deniyor yani bir nevi templete

// const person = new Person("Semih"); // bir class'tan yeni bir obje türetirken "new" ifadesi çok önemli !!!
// console.log(person);
//--------------------------------------------------------------------------------


//--- INHERITANCE ----------------------------------------------------------------
// class Person {
//     constructor(name) {
//         this.name = name;   
//         // Teacher class'ından bir obje oluşturulurken "name" property'si burada atanacak 
//     }

//     walk() {
//         console.log("walk");
//     } 
// } 

// class Teacher extends Person {  // Teacher class'ı aynı zamanda Person class'ını da içeriyor.
//     constructor(name, degree) {
//         super(name); 
//         // child class olan Teacher'ın master Person class'ının constructor'ı,
//         // "name" parametresi ile çağrılıyor.
//         this.degree = degree;
//     }
//     teach() {
//         console.log("teach");
//     }
// }

// const teacher = new Teacher("Semih", "MSc");
// console.log(teacher);
// //teacher. yazıp bakılırsa hangi özellik (property) hangi class'tan geliyor görülebilir.
//--------------------------------------------------------------------------------


//--- MODULES, NAMED & DEFAULT EXPORTS -------------------------------------------
// Person ve Teacher class'ları ayrı modüllere (dosyalara) taşındı

//import { Person } from "./person";    
// Sadece Teacher class'ından obje tireteceğimiz için burada bunu import etmeye gerek yok.

//import { Teacher } from "./teacher";    // yandaki import işlemi "named import"tur
// Eğer teacher.js'deki class tanımlamasında 
// "export default class Teacher extends Person {...}
// olarak yazılırsa bu ilgili dosyadan SADECE Teacher class'ını export ediyoruz
// demektir. O zaman yukarıdaki import şekli şuna çevrilebilir:
// import Teacher from "./teacher"; (default export) işlemi
// ayrıca named import'lar da yapılabilir. Mesela:
import Teacher, { promote2 } from "./teacher";  
// "./" ifadesi sadece kendi modüllerimizde kullanılacak
// Mesela aşağıdaki ifadede react, node_modules klasörü altında bulunan bir modül
// ve bu modül için derleyici dosya yolunu biliyor. Bu nedenle ./ ifadesine gerek yok.
// import React, { Component } from "react";  

const teacher = new Teacher("Semih", "MSc");
promote2(); // named import olduğu için burada yukarıdaki isimle çağrılabilir.
console.log(teacher);
//teacher. yazıp bakılırsa hangi özellik (property) hangi class'tan geliyor görülebilir.
//--------------------------------------------------------------------------------
