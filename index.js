let menuBtn = document.getElementById('menuBtn');
let dropdownMenu = document.getElementById('dropdownMenu');
let divShadow = document.querySelectorAll('.shadowJS');
function changerMenu(bouton) {
    let boutons=document.querySelectorAll('.menuColor');
    boutons.forEach(function(b) {
        b.classList.remove('active');
    });
    bouton.classList.add('active');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    }
}
menuBtn.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});
function envoyerMessage() {
    let nom=document.monForm.nom.value;
    let email=document.monForm.email.value;
    let message=document.monForm.message.value;
    if (nom.trim()==="" || email.trim()==="" || message.trim()==="") {
        alert("Veuillez remplir tous les champs");
        return false;
    }else{
        let url ="mailto:ayetche.amoussou@gmail.com";
        url+="?subject=Message de " + encodeURIComponent(nom);
        url+="&body="+encodeURIComponent(message + "\n\n"+"Répondre à : "+email);
        window.location.href=url;
        return false;
    }
}
divShadow.forEach(function(divShado) {
    divShado.addEventListener('mouseenter',function() {
        this.classList.add('boxShadow');
        this.classList.remove('noboxShadow');
    });
    divShado.addEventListener('mouseleave',function() {
        this.classList.remove('boxShadow');
        this.classList.add('noboxShadow');
    });
})
