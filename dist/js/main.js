// Menu
const menuButtons = document.querySelectorAll('.menu button');
const calculators = document.querySelectorAll('.calculator');

function handleMenu() {
  menuButtons.forEach(button => button.classList.remove('active'));
  calculators.forEach(calc => {
    if (this.value != calc.id) {
      calc.classList.remove('active');
    } else {
      calc.classList.add('active');
    }
  });
  this.classList.add('active');
}

menuButtons.forEach(button => button.addEventListener('click', handleMenu));

// Okrugle Sipke Function
function okrugleSipke() {
  var kolicina = document.getElementById('kolicina1').value;
  console.log(kolicina);
  var tipMaterijala = document.getElementById('tipMaterijala1').value;
  var precnik = document.getElementById('precnik1').value / 2;
  var duzina = document.getElementById('duzina1').value;
  var rezultat =
    (kolicina *
      (precnik * precnik * Math.PI) *
      (duzina / 1000) *
      tipMaterijala) /
    1000000;

  var decimals = document.getElementById('broj-decimala-1').value;

  if (decimals != '') {
    rezultat = rezultat.toFixed(decimals);
  }

  document.getElementById('rezultat1').value = rezultat;
}

// Sestougaone Sipke Function
function sestougaoneSipke() {
  var kolicina = document.getElementById('kolicina2').value;
  var tipMaterijala = document.getElementById('tipMaterijala2').value;
  var sirina = document.getElementById('sirina2').value;
  var duzina = document.getElementById('duzina2').value;
  var rezultat =
    (kolicina * (sirina * sirina * 0.866) * (duzina / 1000) * tipMaterijala) /
    1000000;

  var decimals = document.getElementById('broj-decimala-2').value;

  if (decimals != '') {
    rezultat = rezultat.toFixed(decimals);
  }

  document.getElementById('rezultat2').value = rezultat;
}

// Okrugle Cevi
function okrugleCevi() {
  var kolicina = document.getElementById('kolicina3').value;
  var tipMaterijala = document.getElementById('tipMaterijala3').value;
  var precnik1 = document.getElementById('spoljni-precnik3').value / 2;
  var precnik2 = precnik1 - document.getElementById('debljina-zida3').value;
  var duzina = document.getElementById('duzina3').value;

  var rezultat =
    (kolicina *
      (precnik1 * precnik1 * Math.PI - precnik2 * precnik2 * Math.PI) *
      (duzina / 1000) *
      tipMaterijala) /
    1000000;

  var decimals = document.getElementById('broj-decimala-3').value;

  if (decimals != '') {
    rezultat = rezultat.toFixed(decimals);
  }

  document.getElementById('rezultat3').value = rezultat;
}

// Pravougaone Cevi Function
function pravougaoneCevi() {
  var kolicina = document.getElementById('kolicina-4').value;
  var tipMaterijala = document.getElementById('tipMaterijala-4').value;
  var sirina = document.getElementById('sirina-b-4').value;
  var visina = document.getElementById('visina-a-4').value;
  var debljina = document.getElementById('debljina-zida-4').value;
  var duzina = document.getElementById('duzina-4').value;
  var rezultat =
    ((2 * sirina + 2 * visina - 4 * debljina) / 1000) *
    debljina *
    (duzina / 1000) *
    tipMaterijala *
    kolicina;

  rezultat = rezultat / 1000;

  var decimals = document.getElementById('broj-decimala-4').value;

  if (decimals != '') {
    rezultat = rezultat.toFixed(decimals);
  }

  document.getElementById('rezultat-4').value = rezultat;
}

// Limovi Function
function limovi() {
  var kolicina = document.getElementById('kolicina-5').value;
  var tipMaterijala = document.getElementById('tipMaterijala-5').value;
  var sirina = document.getElementById('sirina-5').value;
  var debljina = document.getElementById('debljina-5').value;
  var duzina = document.getElementById('duzina-5').value;
  var rezultat =
    (kolicina * (sirina * debljina) * (duzina / 1000) * tipMaterijala) /
    1000000;

  var decimals = document.getElementById('broj-decimala-5').value;

  if (decimals != '') {
    rezultat = rezultat.toFixed(decimals);
  }

  document.getElementById('rezultat-5').value = rezultat;
}
