//Variabile per lo spostamento delle coccinelle
  let movimento = 0;

function setup() {
  createCanvas(600,700);
  angleMode(DEGREES); // unità di misura x angoli
  frameRate(15);
}

function draw() {
  background("#7CBCAE");

  push();
// Titolo
  fill("#F0D4AF");           
  noStroke ()
  textFont('Life Savers'); // link nel file HTML     
  textSize(90);           
  textStyle(BOLD);     
  textAlign(CENTER, CENTER); 
  text("The beauty", 300, 200);
  text("of the little", 300, 350);
  text("things", 300, 500);
  pop();

// Incrementiamo lo spostamento ad ogni frame
  movimento = (movimento+0.7) % 625; // Ad ogni frame c'è il valore aumenta di 0.7, ma non può superare 625. Arrivato a 625 si azzera e riparte.

// Creazione griglia 
  for (let i = 0; i <= 6; i++) { // crea le colonne (da 0 a 6, ossia 7).
  for (let j = 0; j < 6; j++) { // crea le e righe (da 0 a 5, ossia 6).

    // Distanza e margini
    let Posxiniziale = i * 100; // avere distanzaX coccinelle di 100px
    let Posy = 100 + j * 100; // creo un margine sup. di 100px  e definisco distanzaY coccinelle di 100px
    let Posx; // non si specifica perchè varia subito dopo

// Spostamento con direzione alternata   
      if (j % 2 === 0) {
      Posx = Posxiniziale - movimento; // RIGHE PARI (j = 0, 2, 4) => Muovono verso SINISTRA
      } 
      else {
        Posx = Posxiniziale + movimento; // RIGHE DISPARI (j = 1, 3) => Muovono verso DESTRA
      }
      push();

// Traslazione dell'origine, da ora (0,0) è al centro della coccinella
  translate(Posx, Posy);

// Rotazione delle coccinelle di ciascuna colonna per farle un po' diverse tra loro
  let angolo = 0; 
  if (i % 4 === 0) {
  angolo = -20; 
  } else if (i % 4 === 1) {
  angolo = 10;  
  } else if (i % 4 === 2) {
  angolo = -5; 
  } else {
  angolo = 25; 
  }

// Effetto vibrazione (tipo stelle)
let randomrotation = random(-1, 1); // rotazione casuale
let randomsize = random(42, 45); // dimensione causale
rotate(angolo + randomrotation); // rotazione finale


// DISEGNO

  //OMBRE COCCINELLA
      //testa coccinella ombra
      fill (36,67,88,100);
      noStroke();
      circle(2,1 - 22,20);

      //corpo coccinella ombra
      fill (36,67,88,100);
      noStroke();
      circle(3, 1, randomsize);

      //antenne coccinella ombra
      stroke(36,67,88,100);
      strokeWeight(2);
      line(0, 0 - 30, 0 - 10, 0 - 35);
      line(0, 0 - 30, 0 + 10, 0 - 35);

  //COCCINELLA
    //antenne coccinella
    stroke("#244358");
    strokeWeight(1);
    line(0, 0 - 30, 0 - 10, 0 - 35);
    line(0, 0 - 30, 0 + 10, 0 - 35);

    //testa coccinella
    fill ("#244358");
    circle(0,0 - 22,20); 
    noStroke();

    //corpo coccinella
    fill ("#C5252B");
    noStroke();
    circle(0, 0, randomsize);

    //dettagli corpo coccinella
    fill ("#244358");
    noStroke();
    // Ala Sinistra
    circle(0 - 12, 0 - 10, 6); 
    circle(0 - 16, 0 + 2, 6); 
    circle(0 - 9, 0 + 12, 6); 
    // Ala Destra 
    circle(0 + 12, 0 - 10, 6); 
    circle(0 + 16, 0 + 2, 6);
    circle(0 + 9, 0 + 12, 6);
    // Riga Ali
    stroke("#244358");
    strokeWeight(1);
    line(0, 0 - 17, 0, 0 + 17);
    pop();

  } // Chiusura ciclo j
  } // Chiusura ciclo i
}
