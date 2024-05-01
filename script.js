
$(document).ready(function(){
  // Quando viene cliccato il link
  $('#scrollToTop').click(function(){
      // Scorri fino alla cima della pagina
      $('html, body, main').animate({scrollTop : 0},200);
      return false;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const splashScreen = document.querySelector('.splash-screen');

  // Nascondi lo splash screen dopo 2 secondi
  setTimeout(function() {
      hideSplashScreen();
  }, 1500); // Ritardo di 2000 millisecondi (2 secondi) prima di nascondere lo splash screen

  // Funzione per nascondere lo splash screen
  function hideSplashScreen() {
      // Applica l'animazione di dissolvenza dopo un breve ritardo
      setTimeout(function() {
          splashScreen.style.animation = 'fadeOut 1.5s forwards'; // Avvia l'animazione di dissolvenza
      }, 50); // Ritardo breve prima di applicare l'animazione
      // Nasconde completamente lo splash screen dopo l'animazione
      setTimeout(function() {
          splashScreen.style.display = 'none';
      }, 1500); // Nasconde lo splash screen dopo 2 secondi (durata dell'animazione)
  }
});

//
//
//
//
// Script al caricamento della pagina
 
window.onload = () => {

    // SCROLL DELLA PAGINA E MODIFICA DELLA GRANDEZZA DEL MENU DI NAVIGAZIONE
    window.addEventListener('scroll', function() {
      var header = document.querySelector('header');
      if (window.scrollY > 0) {
          header.classList.add('scrolledHeader');
      } else {
          header.classList.remove('scrolledHeader');
      }
    });

    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      const main = document.getElementById('main');
      const titleAnchor = document.querySelector('.menu-left .title a');
  
      if (window.scrollY > 0) {
          header.classList.add('header-scrolled');
          // Rimuovi il tag <br> dalla stringa di testo
          titleAnchor.innerHTML = "F800";
      } else {
          header.classList.remove('header-scrolled');
          // Reimposta la stringa di testo originale
          titleAnchor.innerHTML = "Fiorenzuola <br> si racconta, <br> l'800 svelato";
      }
  });



//COLLAPSE DEI MENU
const collapsibleToggles = document.querySelectorAll('.collapsible-toggle');

collapsibleToggles.forEach(function(toggle) {
  toggle.addEventListener('change', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del cambio di stato del collapsible
    
    if (this.checked) {
      
      //var altezza = contenuto + header;
      // Chiudi tutti i collapsible tranne quello corrente
      collapsibleToggles.forEach(function(otherToggle) {
        if (otherToggle !== toggle) {
          otherToggle.checked = false;
        }
      });

      // Scrolla il collapsible appena aperto nella vista se necessario
      const topPosition = toggle.parentElement.offsetTop - 91; // Posizione desiderata a 91px dal margine superiore
      //console.log(topPosition);
      window.scrollTo({ top: topPosition, behavior: 'smooth', duration: 500 });
    }
  });
});




       

}
  
//OVERLAY IMMAGINE
document.addEventListener('DOMContentLoaded', function() {
  // Seleziona tutte le immagini
  const images = document.querySelectorAll('.image-container img');

  images.forEach(function(image) {
      // EVENTO CLICK
      image.addEventListener('click', function() {
          // Ottieni l'URL dell'immagine cliccata
          const imageUrl = this.src;

          // Visualizza l'overlay con l'immagine ingrandita
          const overlay = document.querySelector('.overlay');
          const overlayImage = overlay.querySelector('#overlay-image');
          overlayImage.src = imageUrl;
          overlay.style.display = 'block';

      });
  });

  // Aggiungi un evento di click al pulsante di chiusura dell'overlay
  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
      closeBtn.addEventListener('click', function() {
          const overlay = document.querySelector('.overlay');
          overlay.style.display = 'none';
      });
  }

  // Chiudi l'overlay cliccando fuori dall'immagine
  const overlay = document.querySelector('.overlay');
  if (overlay) {
      overlay.addEventListener('click', function(event) {
          if (event.target === overlay) {
              overlay.style.display = 'none';
          }
      });
  }
});



