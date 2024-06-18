// Função do LOADING ==============================================
const loadingSite = document.querySelector('#loadingOverlay');

setTimeout(() => {
    loadingSite.style.display = "none";
}, 3000);

// Função do NAVEGAR ==============================================
    const botaoNav = document.querySelector('.btn-nav');
    const listaNav = document.querySelector('.nav-list');
    const delay = 300;
    let timeoutId;

    botaoNav.addEventListener('mouseenter', function() {
       timeoutId = setTimeout(function() {
            listaNav.style.display = "block";

            //Animation
            listaNav.classList.remove('roll-left');
            listaNav.classList.add('roll-right');

            //SEARCH
            barraPesquisa.style.display = "none";
            botaoPesquisa.style.display = "block";

            //NOTIFICATION
            listaNoti.style.display = "none";

            //PERFIL
            listaPerfil.classList.remove('apa');
            listaPerfil.classList.add('des');
            setTimeout(function(){
            listaPerfil.style.display = "none";
            }, 300);
            
        }, delay);
    });

    botaoNav.addEventListener('mouseleave', function() {
        clearTimeout(timeoutId);
    });

    document.addEventListener('click', function(event) {
        if (!listaNav.contains(event.target)) {

            //Animation
            listaNav.classList.remove('roll-right');
            listaNav.classList.add('roll-left');
            setTimeout(() => {
                listaNav.style.display = "none";
            }, 500);
        };
    });

    document.addEventListener('mouseleave', function() {
        setTimeout(function() {

            //Animation
            listaNav.classList.remove('roll-right');
            listaNav.classList.add('roll-left');
            setTimeout(() => {
                listaNav.style.display = "none";
            }, 500);
        }, delay);
    });

// Função da SEARCH ===================================================
const botaoPesquisa = document.querySelector('.icon-search');
const barraPesquisa = document.querySelector('.bar-search');
let timeoutIdSearch;

botaoPesquisa.addEventListener("mouseleave", function() {
    clearTimeout(timeoutIdSearch);
});

botaoPesquisa.addEventListener('mouseenter', function() {
    timeoutIdSearch = setTimeout(function() {
        barraPesquisa.style.display = "block";
        botaoPesquisa.style.display = "none";

        //NAVEGAR
        listaNav.classList.remove('roll-right');
        listaNav.classList.add('roll-left');

        //NOTIFICATION
        listaNoti.style.display = "none";

        //PERFIL
        listaPerfil.classList.remove('apa');
        listaPerfil.classList.add('des');
        arrowTwo.classList.remove('rotate-180');
        arrowTwo.classList.add('rotate--180');
        setTimeout(function(){
        listaPerfil.style.display = "none";
        }, 300);
    }, delay);
});

document.addEventListener('click', function(event) {
    if (!barraPesquisa.contains(event.target)) {
        barraPesquisa.style.display = "none";
        botaoPesquisa.style.display = "block";
    };
});

// Função da notificação ===================================================
const botaoNoti = document.querySelector('.btn-noti');
const listaNoti = document.querySelector('.notification');
let timeoutIdNoti;

botaoNoti.addEventListener('mouseenter', function() {
    timeoutIdNoti = setTimeout(function() {
         listaNoti.style.display = "block";

         //Animation
         listaNav.classList.add('roll-left');
         listaNav.classList.remove('roll-right');

         //SEARCH
         barraPesquisa.style.display = "none";
         botaoPesquisa.style.display = "block";

         //PERFIL
         listaPerfil.classList.remove('apa');
         listaPerfil.classList.add('des');
         arrowTwo.classList.remove('rotate-180');
         arrowTwo.classList.add('rotate--180');
         setTimeout(function(){
         listaPerfil.style.display = "none";
         }, 300);
         
     }, delay);
 });

 botaoNoti.addEventListener('mouseleave', function() {
    clearTimeout(timeoutIdNoti);
});

 document.addEventListener('click', function(event) {
    if (!listaNoti.contains(event.target)) {
            listaNoti.style.display = "none";
    };
});

document.addEventListener('mouseleave', function() {
    setTimeout(function() {
        setTimeout(() => {
            listaNoti.style.display = "none";
        }, 200);
    }, delay);
});

// Função do perfil ==================================================
const botaoPerfil = document.querySelector('.btn-perfil');
const listaPerfil = document.querySelector('.perfil-div');
const arrowTwo = document.querySelector('.perfil-arrow2')
let timeoutIdPerfil;


botaoPerfil.addEventListener('mouseenter', function() {
    timeoutIdPerfil = setTimeout(function() {
         listaPerfil.style.display = "block";
         listaPerfil.classList.add('apa');
         listaPerfil.classList.remove('des');

         arrowTwo.classList.add('rotate-180');
        arrowTwo.classList.remove('rotate--180');

         //Animation
         listaNav.classList.add('roll-left');
         listaNav.classList.remove('roll-right');

         //SEARCH
         barraPesquisa.style.display = "none";
         botaoPesquisa.style.display = "block";

         //NOTIFICATION
         listaNoti.style.display = "none";
         
     }, delay);
 });

botaoPerfil.addEventListener('mouseleave', function(){
    clearTimeout(timeoutIdPerfil);
});

document.addEventListener('click', function(event) {
    if (!listaPerfil.contains(event.target)) {
    //Animations
        listaPerfil.classList.remove('apa');
        listaPerfil.classList.add('des');
        arrowTwo.classList.remove('rotate-180');
        arrowTwo.classList.add('rotate--180');

        setTimeout(function(){
        listaPerfil.style.display = "none";
    }, 300);
    };
});

document.addEventListener('mouseleave', function() {
    setTimeout(function() {
        //Animations
            listaPerfil.classList.remove('apa');
            listaPerfil.classList.add('des');
            arrowTwo.classList.remove('rotate-180');
            arrowTwo.classList.add('rotate--180');

            setTimeout(function(){
                listaPerfil.style.display = "none";
            }, 300);
    }, 300);
    
});

// Main =====================================================
// DIV DO BOTAO INFO TOP
function toggleIcon() {
    const iconElement = document.getElementById('icon');
    iconElement.classList.toggle('icon-info2');
}

function toggleIconLike() {
    const iconElement = document.getElementById('icon-like');
    iconElement.classList.toggle('icon-like2');
}

// FUNÇÃO DO BOTAO DE MAIS INFORMAÇÕES AQUI ==================================================
const btnInfo = document.querySelector('.button-info-top');
const btnClose = document.querySelector('.close');
const fundoOfuscado = document.querySelector('.fundo-ofuscado');
const corpoInfo = document.querySelector('.div-info');

btnInfo.addEventListener('click', function() {
    fundoOfuscado.classList.add('display-block');
    corpoInfo.classList.add('sobre--expand');
    corpoInfo.classList.remove('sobre-expand');
});

btnClose.addEventListener('click', function() {
    corpoInfo.classList.add('sobre-expand');
    corpoInfo.classList.remove('sobre--expand');

    setTimeout(function() {
        fundoOfuscado.classList.remove('display-block');
    }, 300);
});

//=============== CONFIGURAÇÕES DOS SLIDERS ABAIXO ===============
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggleButton');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const icon = button.querySelector('i');
  
        if (icon.classList.contains('bi-calendar-plus')) {
          icon.classList.remove('bi-calendar-plus');
          icon.classList.add('bi-calendar-check');
        } else if (icon.classList.contains('bi-calendar-check')) {
          icon.classList.remove('bi-calendar-check');
          icon.classList.add('bi-calendar-plus');
        } else if (icon.classList.contains('bi-hand-thumbs-up')) {
          icon.classList.remove('bi-hand-thumbs-up');
          icon.classList.add('bi-hand-thumbs-up-fill');
        } else if (icon.classList.contains('bi-hand-thumbs-up-fill')) {
          icon.classList.remove('bi-hand-thumbs-up-fill');
          icon.classList.add('bi-hand-thumbs-up');
        }
      });
    });
  });  

//===========================================================
// Footer
// Função de gerar código do serviço
const serviceButton = document.getElementById('botaocd');

serviceButton.addEventListener('click', function() {
    serviceButton.innerHTML = `954-750`;
    serviceButton.style.width = `69px`;
    serviceButton.style.fontWeight = 'bold';
});