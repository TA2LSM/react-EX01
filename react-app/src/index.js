import React from 'react';          // react modülünden React objesini import et
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/**
 * Orijinal Hello World tipi default uygulamaya ek olarak deneme için yazılan kısım
 */

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
