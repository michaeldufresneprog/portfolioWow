
var limenuvav = $(".section-navigation nav li");
var tailleli = limenuvav.length;
for (let i = 0; i < tailleli; i++) {
    limenuvav[i].addEventListener("click",function(){
        limenuvav[i].classList.toggle("liwhitebackground");
    });
}
var allSection = document.querySelectorAll("main section");
function gestionNavigation(nombre){
    for (let i= 0; i < tailleli; i++) {
        if(limenuvav[i].classList.contains("liwhitebackground") && i != nombre){
            $(allSection[i]).hide(750);
        }
    }
    for (let i= 0; i < tailleli; i++) {
        if(limenuvav[i].classList.contains("liwhitebackground") && i == nombre){
            limenuvav[i].classList.toggle("liwhitebackground");
        }
        if(limenuvav[i].classList.contains("liwhitebackground") && i != nombre){
            limenuvav[i].classList.toggle("liwhitebackground"); 
            $(allSection[nombre]).show(750);
            if(allSection[nombre].classList.contains("section-realisations")){
                afficherRealisation();
            }
            if(allSection[nombre].classList.contains("section-competence")){
                const arrayp = document.querySelectorAll(".competence-texte p");
                let i = 1;
                arrayp.forEach(element => {
                    i = i + 1;
                    element.style.opacity = "1";
                    element.style.color = "#60C693";
                    element.style.transition = `all ${i}s`;
                });
            }
        }
    }
}


function changeCompetence(x){
    var firstLi = document.querySelector(".div-competence span");
    var lastLi = document.querySelector(".div-competence span:nth-of-type(2)");
    if(x != 0){
        firstLi.style.color = "#60C693";
    }
    else{
        firstLi.style.color = "#fff";
    }
    if(x == 2){
        lastLi.style.color = "#fff";
    }
    else{
        lastLi.style.color = "#60C693";
    }
    var liMenuCompetence = document.querySelectorAll(".div-competence li");
    for (let i = 0; i < liMenuCompetence.length; i++) {
        if(liMenuCompetence[i].classList.contains("competenceActive") && i != x){
            liMenuCompetence[i].classList.remove("competenceActive");
            liMenuCompetence[x].classList.add("competenceActive");
            changetext(x);
        }
    }
}

//changer les compétences en fonctions du bon click

changetext = (x) =>{
    const arrayp = document.querySelectorAll(".competence-texte p");
    if(x == 0){
        const arrayHtml = ["HTML","CSS","jQuery React","IDE","Bootstrap"];
        switchText(arrayHtml,arrayp);
    }
    else if(x == 1){
        const arrayGit = ["Git","jira","Agile Scrum","CMS","slack"];
        switchText(arrayGit,arrayp);
    }
    else{
        const arrayBack = ["Php","Laravel","Wordpress","Cpanel","SQL"];
        switchText(arrayBack,arrayp);
    }
}

//mettre le bon texte
switchText = (array,arrayp) =>{
    console.log(array,arrayp);
    let i = 0;
    arrayp.forEach(p => {
        p.innerHTML = array[i];
        i++;
    });
}

$(window).on("load",function(){
    $("body").addClass("opacityBody");
});
$(window).on("load",function(){
    $(".first-image").on("mouseover",function(){
        $(".first-image").addClass("opacityImage");
    });
    $(".first-image").on("mouseout",function(){
        $(".first-image").removeClass("opacityImage");
    });
    $(".section-rideau div:first-child").addClass("transitionRideau");
    $(".section-rideau div:nth-of-type(2)").addClass("transitionSecondRideau");
    $(".section-rideau div:first-child").on("transitionend",function(){
        $(".section-rideau div:first-child").css("display","none");
    });
    $(".section-rideau div:nth-of-type(2)").on("transitionend",function(){
        $(".section-rideau div:nth-of-type(2)").css("display","none");
    });

});

//Afficher les réalisations de manière automatique

afficherRealisation = () =>{
    const arrayli = document.querySelectorAll(".click-li");
        arrayli.forEach(li => {
            li.addEventListener("click",function(){
                cancellerAnimation(compteurRealisation);
            });
    });
    let compteur = 400;
    let i = 0;
    let arrayTexte = ["WORDPESS ZÉNITH","RUSH WEBSITE"];
    const compteurRealisation = window.setInterval(function(){
        const image = $(".image-realisation");
        let texte = $(".div-realisations p");
        texte.html(arrayTexte[i]);
        image.animate({
            top: `-${compteur}px`
        },2000,function(){
            console.log(i);
            if(i == 2){
                setTimeout(function(){
                    texte.css({
                        transform: 'translate(-200px,-250px)',
                        transition:"all 2s"
                    });
                },2700);
            }
            else if(i == 3){
                image.animate({
                    top: `0px`
                },1000);
                texte.css({
                    transform: 'translate(-50%,-50%)',
                    transition:"all 0.5s"
                });
                texte.html("RUSH THE GAME");
                i = 0;
                compteur = 400;
            }
        });
        compteur = compteur + 400;
        i++;
        const arrayli = document.querySelectorAll(".click-li");
        arrayli.forEach(li => {
            li.addEventListener("click",function(){
                cancellerAnimation(compteurRealisation);
            });
        });
    },4500);
}

cancellerAnimation = (compteurRealisation) =>{
    const image = $(".image-realisation");
    let texte = $(".div-realisations p");
    console.log("canceller");
    clearInterval(compteurRealisation);
    image.animate({
        top: `0px`
    },1);
    compteur = 400;
    i = 0;
    texte.html("RUSH THE GAME");
    texte.css({
        transform: 'translate(-50%,-50%)',
        transition:"all 0.5s"
    });
}