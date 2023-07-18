const dino = document.getElementById("dino");
// document = дає доступ до документу, getElementId = дає доступ до елемента в якому ми прописали id = "dino" 
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump() // функція jump() буде додавати властивості з анімацією (які ми прописали в style.css) нашому елементу 
}) 
// ми додали addEventListener = обробник події, а дужках ("keydown") = натиснення кнопки

function jump() {
    if (dino.classList != 'jump') { //якщо властивості 'jump' не прописаний для 'dino'
        dino.classList.add("jump") // то ми його додаємо
    }

    setTimeout (function () {
        dino.classList.remove("jump")
    }, 300) // кожні 300 мілісекунд буде видалятися властивості 'jump' 
}

// function jump() {
//     dino.classList.add("jump"); // нашій константі 'dino' ми будемо додавати властивості (що в style.css) 'jump'
// }

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 50 &&  cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!!')
    }
}, 10)

// getComputedStyle повертає об'єкт в якому знаходяться властивості всіх CSS властивостей елемента
// parseInt перебразовує число