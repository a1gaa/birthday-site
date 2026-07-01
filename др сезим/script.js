const text =
"Сегодня особенный день! ✨ Пусть каждый момент будет наполнен счастьем, улыбками и теплом. Желаю исполнения всех самых заветных мечтаний, крепкого здоровья, настоящей любви и бесконечного вдохновения. С Днём Рождения! 💜";

const typing = document.getElementById("typing");
let index = 0;

function typeText() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 35);
    }
}

typeText();

const button = document.getElementById("openGift");
const gift = document.getElementById("gift");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    gift.style.display = "flex";

    gift.animate([
        {opacity:0},
        {opacity:1}
    ],{
        duration:700,
        fill:"forwards"
    });

    music.play().catch(() => {});

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            confetti({
                particleCount:80,
                spread:120,
                startVelocity:45,
                origin:{
                    x:Math.random(),
                    y:Math.random()*0.5
                }
            });

        },i*500);

    }

});