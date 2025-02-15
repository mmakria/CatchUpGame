const cubes = document.querySelectorAll('.container')
const cubesArray = Array.from(cubes)
const grid = document.querySelector('.grid')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const bullet = document.querySelector('.bullet')
const paragraphe = document.querySelector('.paragraphe')
const btnShow = document.querySelector('.show')
const cardScore = document.querySelector('.score')
const timer = document.querySelector('.timer')
let score = 0;
let x = 0;
let y = 0;


// refaire un tableau des cubes avec map
let rect = cubesArray.map((cube)=>{
    return cube.getBoundingClientRect()
})



document.addEventListener('DOMContentLoaded', () => {
    const bullet = document.querySelector('.bullet');
    let x = 500; //  Left position
    let y = 500; //  Top position

    // Initialisation des positions
    bullet.style.position = 'absolute';
    bullet.style.left = `${x}px`;
    bullet.style.top = `${y}px`;

    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowUp") {
            y -= 20; // Déplacer vers le haut
        } else if (e.key === "ArrowDown") {
            y += 20; // Déplacer vers le bas
        } else if (e.key === "ArrowRight") {
            x += 20; // Déplacer vers la droite
        } else if (e.key === "ArrowLeft") {
            x -= 20; // Déplacer vers la gauche
        }
        // Mise à jour des styles CSS
        bullet.style.left = `${x}px`;
        bullet.style.top = `${y}px`;

        //recupere juste le nombre top et left à comparer avec la position des cubes

        const bulletY = parseFloat(window.getComputedStyle(bullet).top)
        const bulletX = parseFloat(window.getComputedStyle(bullet).left)
        // boucle et condition pour gerer le changement de couleur des active au green
        // Matcher avec les couleurs
        for (let i = 0; i < 13; i++) {
            if (bulletY >= rect[i].top &&
                bulletY <= rect[i].bottom &&
                bulletX >= rect[i].left &&
                bulletX <= rect[i].right &&
                cubesArray[i].classList.contains("active")
            ){
                //cubesArray[0].style.backgroundColor = 'green'
                cubesArray[i].classList.add('touchey');
                score+=10;
                cardScore.innerHTML = `Score: ${score}`;
            }
        }
        //console.log(`Position: left=${x}, top=${y}`);
    });
});


let rectBullet = bullet.getBoundingClientRect()



//let rectBullet = bullet.getBoundingClientRect() // --> ne prends pas en compte les translate







// au click je lance les colorations des cubes
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
startBtn.addEventListener('click', () => {
    setInterval(() => {
        console.log("Bonjour !");
        cubes[getRandomInt(12)].classList.toggle('active');
    }, 500);

    setTimeout(()=>{
    timer.innerHTML(12)
    }, 10000)
})






// apparition text
btnShow.addEventListener('click', () => {
    if (paragraphe.style.display != 'none') {
        paragraphe.style.display = 'none'
        btnShow.innerHTML = "Hide"
    } else {
        paragraphe.style.display = 'block'
        btnShow.innerHTML = "Show"
    }
})


// Déplacement de la bullet // avec translate compliqué car ne recupere pas la position
/*document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        y -= 20;
        bullet.style.transform = `translate(${x}px, ${y}px)`; // Utilise transform au lieu de translate
    } else if (e.key === "ArrowDown") {
        y += 20;
        bullet.style.transform = `translate(${x}px, ${y}px)`;
    } else if (e.key === "ArrowRight") {
        x += 20;
        bullet.style.transform = `translate(${x}px, ${y}px)`;
    } else if (e.key === "ArrowLeft") {
        x -= 20;
        bullet.style.transform = `translate(${x}px, ${y}px)`;
    }
});*/

//idem pour getBoundingClientRect les elements ne se mettent pas à jour dans la console
/*
console.log(window.getComputedStyle(bullet))
console.log(window.getComputedStyle(bullet).x)*/



/*setInterval(() => {
    console.log("Bonjour !");
    cubes[getRandomInt(6)].classList.toggle('active');
}, 500);*/
/*setTimeout(() => {
    cubes[getRandomInt(7)].classList.add('active');
    cubes[getRandomInt(7)].classList.remove('active');
}, 300);*/
