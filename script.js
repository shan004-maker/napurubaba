const stars = ["⭐", "✨", "🌟", "💫"];
const flowers = ["🌸", "🌺", "🌼", "🌷"];
const hearts = ["❤️", "💖", "💘", "💕"];

// Mouse movement effect
document.addEventListener("mousemove", (e) => {
    const symbol = Math.random() > 0.5 ? 
        stars[Math.floor(Math.random() * stars.length)] : 
        flowers[Math.floor(Math.random() * flowers.length)];

    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    emoji.textContent = symbol;
    
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 1200);
});

// Heart rain effect
function createHeartRain() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

createHeartRain();