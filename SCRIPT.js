// fonciton mail


// fonction jeu réecrite
function lancerJeu(){

//récupération 
let boutonEnvoyer = document.getElementById("boutonEnvoyer");
let btnValiderRadios = document.getElementById("btnValiderRadios");
let zoneEcriture = document.getElementById("motUser");

let choixUtilisateur = '';
let i = 0;
let scoreJoueur = 0;

btnValiderRadios.addEventListener("click", (event)=>{
    let btnRadioMots = document.getElementById("mots");
    let btnRadioPhrases = document.getElementById("phrases");

    if(btnRadioMots.checked===true){
        listePropositions = ["Adrien", "Floraison", "Guillotine", "Youtube","Choux", "Byslide"];
        afficherProposition(listePropositions[i]);
        console.log("Mots choisis")
    }else{
        listePropositions = ["Il pleuvra ce soir.", "Attention à la marche !", "Pierre qui roule n'amasse pas mousse...", "Rien ne se passe."];
        afficherProposition(listePropositions[i]);
        console.log("Phrases choisies");
    }
    event.preventDefault();

})




    boutonEnvoyer.addEventListener("click", ()=>{
    console.log(zoneEcriture.value);
    let btnRadio1 = document.getElementById("mots");
    let btnRadio2 = document.getElementById("phrases");

    if(btnRadio1.checked || btnRadio2.checked){

        if(zoneEcriture.value === listePropositions[i]){
                scoreJoueur++;
                i++; 

            }else{
                i++; 
            }


            if(listePropositions[i] === undefined){
                afficherProposition("Fin du jeu !");
                boutonEnvoyer.disabled = true;

            }else{
                afficherProposition(listePropositions[i]);
            }
            zoneEcriture.value = '';
            afficherScore(scoreJoueur, (i));
    }else{
        alert("Veuillez choisir entre phrases ou mots")
        console.log("Erreur rien n'est coché!")
    }
    })

// Gestion de l'événement submit sur le formulaire de partage du SCORE. 
gererFormulaire(scoreJoueur);


}




/*/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FONCTIONS UTILITAIRES/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

//fonction gestion du form de score

function gererFormulaire(scoreFinal){

    let formScore = document.getElementById("formscore");
        formScore.addEventListener("submit", (event)=>{
        event.preventDefault();
        let mailAmi = document.getElementById("mailAmi");
        let email = mailAmi.value;

        let nomUser = document.getElementById("nomUser");
        let user = nomUser.value;
        
        formScore.innerHTML=``;
        formScore.classList.add("msgEnvoiMail")
        formScore.innerHTML= ` Merci d'avoir joué  ${user}, votre score a bien été partagé à ${email} :)`


        });
    
}
   


//fonction de partage du score par mail
function afficherEmail(nom, adresseMail, score) {
    let mailto = `mailto:${adresseMail}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}



// fonction vérification champ vide ou non
function verificationChamp(balise1, balise2){
    if(balise1.value===""||balise2.value===""){
        console.log("Champs vide(s) !")
        balise1.setAttribute("placeholder", "ATTENTION ! Champs vide!");
        balise2.setAttribute("placeholder", "ATTENTION ! Champs vide!");
    }else{
        console.log("Champs remplis :)")
        afficherEmail(user, email, scoreJoueur)
    }

}

// fonctions de vérification champ au bon format ou non

function validerNom(nomATester){
    let regex = new RegExp("^[a-z0-9.-_]+[a-z0-9.-_]+$");
    let resultat = regex.test(nomATester);

    if (resultat===false){
        throw new Error("Le nom n'est pas valide (Renseignez au moins 2 caractères)")
    }

    
}

function validerEmail(mailATester){
    let regex2 = new RegExp("^[a-z0-9.-_]+@+[a-z0-9.-_]+\.+[a-z0-9.-_]{5,5}$");
    let resultat2 = regex2.test(mailATester);
    

    if (resultat2===false){
        throw new Error("L'e-mail n'est pas valide :(")
    }
}


//fonctions corps du jeu

function afficherProposition(motAAfficher){
    let zoneAffichageMotsProposes = document.getElementById("motPropose");

    zoneAffichageMotsProposes.innerText = motAAfficher;
}


function afficherScore(scoreJoueur,compteur){
    let zoneAffichageDuScore = document.getElementById("scoreAffichage");
    zoneAffichageDuScore.innerText = "Votre score est de : " + scoreJoueur + " / " + compteur;

}






































































// function affichageScore(scoreUser) {
//    let nouvelElement = scoreUser;
//    let parentElement = document.getElementById("scoreAffichage");
//    parentElement.append("Votre score est de :  " + nouvelElement + " / " + listeMots.length  +" ! 😎​ ");
//}


/////////////////////////////////////
/// FONCTION JEU ORIGINALE  part 1///
/////////////////////////////////////

//**function jeu(scoreUser){
//  let i=0;
 //   while(i<4){

 //       let motUser=prompt("Tapez le mot suivant: " + listeMots[i]);

 //       if(motUser===listeMots[i]){

  //          console.log("Le mot est correct !");
  //          i++;
 //           scoreUser++;
  //          console.log(scoreUser);


  //          }else{

  //          console.log("Le mot est incorrect!");
  //          i++;


 //           }

 //       }
  //  }

//////////////////////////
// Partie 2 fonction jeu//
/////////////////////////

    //}else{

    //    for(let i=0 ; i<4 ; i++){

    //        let phraseUser=prompt("Tapez la phrase suivante: " + listePhrases[i]);

    //            if(phraseUser===listePhrases[i]){

    //              console.log("La phrase est correcte !");
    //              scoreUser++;

    //            }else{

    //                console.log("La phrase est incorrecte !");
    //            }
    //    } 
    //}






/////////////////////////////////////////////////////
// Entraînement utilisation methode "innerText" : //
////////////////////////////////////////////////////

//function affichageScore2(){
    //let nombreScore = "Votre score est de 3 / 3 !";
    //let div = document.createElement("div");
    //div.innerText = nombreScore;

    //let parentDiv = document.getElementById("scoreAffichage");
    //parentDiv.appendChild(div);
    //}






//////////////////////////////////////////////
//Entrainement utilisation Interpolation : //
/////////////////////////////////////////////

//function affichageScore3(scoreUser){
    //let titreZoneScore = "Votre score est de : ";
    //let scoreUtilisateur = scoreUser;

   // let divBulleScore = `
                       // <div>
   //                         <h2>${titreZoneScore}</h2>
   //                         <p>${scoreUtilisateur} / 4 !</p>
   //                     </div>
   //                     `
   //                     ;

   // let parentDivBulleScore = document.getElementById("scoreEtPartage");
   // parentDivBulleScore.innerHTML=divBulleScore;
