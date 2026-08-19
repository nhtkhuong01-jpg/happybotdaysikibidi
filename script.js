const receiverName = " 💖 Ly Na Sikibidi 🎂 ";

const birthdayMessage = "Chúc bạn có một sinh nhật thật vui vẻ, luôn hạnh phúc, luôn may mắn và có thật nhiều khoảnh khắc đáng nhớ! ❤️";

const photoFile = "sikibi.jpg.jpg";
const musicFile = "haphap.mp3";


const receiver = document.getElementById("receiver");
const message = document.getElementById("message");
const photo = document.getElementById("birthdayPhoto");
const music = document.getElementById("birthdayMusic");

const cover = document.getElementById("cover");
const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");


receiver.textContent = receiverName;
message.textContent = birthdayMessage;
photo.src = photoFile;


/* ⭐ TẠO HIỆU ỨNG SAO */
function createSparkles() {

    for (let i = 0; i < 80; i++) {

        const star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";
        star.style.left = "50%";
        star.style.top = "50%";
        star.style.fontSize = Math.random() * 25 + 15 + "px";
        star.style.zIndex = "999";
        star.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 500 + 100;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        star.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        "translate(-50%, -50%) translate(" +
                        x + "px, " +
                        y + "px) scale(1.5)",
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        document.body.appendChild(star);

        setTimeout(function () {
            star.remove();
        }, 2000);
    }
}


/* 🎁 BẤM MỞ THIỆP */
openBtn.addEventListener("click", function () {

    createSparkles();

    cover.classList.add("hide");

    setTimeout(function () {
        card.classList.add("show");
    }, 500);

    music.play().catch(function (error) {
        console.error("Không thể phát nhạc:", error);
    });
});
