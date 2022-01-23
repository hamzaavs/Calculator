function toplam() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
  
    var toplama = number1 + number2;
    document.querySelector(".sonuç").innerHTML = toplama;
  
  }
  
  function çıkarma(çıkar) {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
  
    çıkar = number1 - number2;
    document.querySelector(".sonuç").innerHTML = çıkar;
  }
  
  function çarpma(çarpmak) {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
  
    çarpmak = number1 * number2;
    document.querySelector(".sonuç").innerHTML = çarpmak;
  }
  
  function bölme(bölmek) {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
  
    bölmek = number1 / number2;
    document.querySelector(".sonuç").innerHTML = bölmek;
  }
  
  function change() {
    var color = document.getElementById("background-color").value;
    document.body.style.background = color;
  }
  
  function divChange() {
    var colors = document.getElementById("div-color").value;
    document.body.style.color = colors;
  }
  