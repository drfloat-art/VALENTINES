document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const nextStep = document.getElementById("nextStep");
    const loveBtn = document.getElementById("loveBtn");
    const loveMessage = document.getElementById("loveMessage");
    const loveText = document.getElementById("loveText");
    const loveSong = document.getElementById("loveSong");
    const dogImg = document.querySelector(".dog-img");
    const footerText = document.querySelector(".footer-text");
    const question = document.getElementById("question");
    const valentineContainer = document.getElementById("valentineContainer");

    const paragraphText = `HEUIIIIIIIIIIIII BABE 😸❤️❤️❤️.\n\nIt's Valentine's Day and I just wanted to do this special thing for you and I hope you like it, also hoping we are on call for this bc I really wanna catch your live reaction to it but anyway let me start 😤.\n\nI've loved you for 7 months now and I did before we started dating. Once we got tg I've been the happiest person ever, I've had an actual reason to keep living, you my sweet girl saved me and I just LAAAAAV YOUUU SOOO MUCHHH AHHHH😸❤️.\n\nEach time I think of you my heart warms up because you make me feel like myself again—you brought back the happy child in me that's been gone for so long. My heart races each time I think of you because you give it a spark.\n\nYou are the light to my life, the protector and owner of my HEART, MIND, AND SOUL. You are the most beautiful girl ever and I just love you so much and I hope you're not getting tired of these paragraphs because I write my heart out every time 🙁.\n\nBut HAPPY VALENTINE'S DAY MY BEAUTIFUL BABY GIRL MWAHHHH😘😸❤️❤️`;

    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener("click", function() {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        question.style.display = "none";
        nextStep.style.display = "block";
    });

    loveBtn.addEventListener("click", function() {
        nextStep.style.display = "none";
        valentineContainer.style.opacity = "0";  
        setTimeout(() => valentineContainer.style.display = "none", 1000);

        loveMessage.style.display = "block";
        loveSong.play();
        
        let i = 0;
        loveText.style.opacity = 1;
        loveText.style.transform = "translateY(0)";
        loveText.innerHTML = "";

        function typeWriter() {
            if (i < paragraphText.length) {
                loveText.innerHTML += paragraphText.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Slower text reveal
            } else {
                // Show the dog and text after a delay when paragraph is fully revealed
                setTimeout(() => {
                    dogImg.style.display = "block";
                    footerText.style.display = "block";
                }, 1000);
            }
        }
        typeWriter();
    });
});