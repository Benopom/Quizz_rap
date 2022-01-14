const form = document.querySelector(".form-quizz");

let tabRep = [];
const bonneRep = ['c', 'b', 'c', 'c', 'a'];
let verifTab = [];
const messageResult = document.querySelector(".resultats h2");
const messageAide = document.querySelector(".aide");
const noteResult = document.querySelector(".note");
let note = 0;
const boxQuestions = document.querySelectorAll(".box_questions")
let quotesDiv = document.getElementById('quote');
let divImg = document.querySelector('.img');



form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    for(let i=1; i<=5; i++) {
    tabRep.push(document.querySelector(`input[name="Q${i}"]:checked`).value);
    }

    //console.log(tabRep);
    verifFunc(tabRep);
    tabRep = [];
    //console.log(note);
    //console.log(`verif tab: ${verifTab}`);
    ajouterCouleur(boxQuestions);
    verifTab = [];
    note = 0;
    //console.log(boxQuestions[1].style);
})

function verifFunc(a) {

    for(j=0; j<5; j++) {
        if (a[j] === bonneRep[j]) {
            verifTab.push(true);
            }
        else {verifTab.push(false);
        }

        if(verifTab[j]===true) {
            note ++;
        }
    }


switch (note) {
    case 0 : {
        messageResult.textContent = `Oups, il y ${5-note} erreurs, essaie encore !`;
        kanyeSay();
        noteResult.textContent = `Ta note : ${note}/5 🙄`;
        

    break;}

    case 1 :{
        messageResult.textContent = `Oups, il y ${5-note} erreurs, essaie encore !`;
        kanyeSay();
        noteResult.textContent = `Ta note : ${note}/5 😏`;
    break;}

    case 2 :{
        messageResult.textContent = `Oups, il y ${5-note} erreurs, essaie encore !`;
        kanyeSay();
        noteResult.textContent = `Ta note : ${note}/5 😐`;

    break;}

    case 3 :{
        messageResult.textContent = `Oups, il y ${5-note} erreurs, essaie encore !`;
        kanyeSay();
        noteResult.textContent = `Ta note : ${note}/5 💪`;

    break;}

    case 4 :{
        messageResult.textContent = `Oups, il y ${5-note} erreur, essaie encore !`;
        kanyeSay();
        noteResult.textContent = `Ta note : ${note}/5 🤩`;
    break;}

    case 5 :{
        messageResult.textContent = "Bravo !";
        noteResult.textContent = `${note}/5 🥳`;
        quotesDiv.innerHTML = "";
        eddieShow();
    break;}

    default: {"Wops cas inattendu"
    break;}
    }
}

function ajouterCouleur(boxQuestions) {
    for (let k=0; k<5; k++) {
        if (verifTab[k] === true) {
            boxQuestions[k].style.background = 'lightgreen';
        }
        else {
            boxQuestions[k].style.background = '#ffb8b8';
            boxQuestions[k].classList.add('echec');
        
            setTimeout(() => { //enlever au bout d'un moment la class pour pouvoir al remettre s'il se retrompe
                boxQuestions[k].classList.remove('echec');
            }, 500)
        }

    }
}

boxQuestions.forEach(item => {
    item.addEventListener('click', () => { item.style.background = 'white'
    })}) 

function kanyeSay() {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => { 
        quotesDiv.innerHTML = `<p> "${quote.quote}" - Kanye West </p>`
    })
};



function eddieShow() {
    const image = document.createElement('img');
    image.src = 'https://media.giphy.com/media/l378sxNXQTL2LRrOM/giphy.gif'
    quotesDiv.appendChild(image);
}


/* 
1- envoyer les réponses dans un tableau (aller écouter dans le html le submit d'abord) ✔
2- comparer les réponses de ce tableau au tableau de réponses bonnes et générer un tableau booléen indiquant les faux ✔
3- Changer les valeurs innerHTML de la partie résultat et afficher un message en fonction du résultat, une petite phrase sympa et le score pour chaque cas ✔
4- Changer les couleurs des blocs en fonction de la réponse apportée + ajouter l'animation 'echec' (penser à l'enlever pour qu'elle puisse revenir)
5- desactiver les couleurs quand l'utilisateur rééssaie 
*/ 
