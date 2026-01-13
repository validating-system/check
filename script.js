// 1. Starfield Animation
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
const starCount = 150;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            velocity: Math.random() * 0.2 + 0.05
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    stars.forEach(star => {
        star.y -= star.velocity;
        if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
        }
        const opacity = 0.3 + Math.random() * 0.7;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// 2. Download Progress Logic
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const statusMessage = document.getElementById('statusMessage');
const content = document.getElementById('content');
const sessionIdEl = document.getElementById('sessionId');

let progress = 0;

function updateProgress() {
    if (progress < 98) {
        progress += Math.random() * 12;
        if (progress > 98) progress = 98;
        
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${Math.floor(progress)}%`;

        if (progress > 40) statusMessage.innerText = "verifying hash...";
        if (progress > 70) statusMessage.innerText = "establishing tunnel...";
    }
}

// Initialize session and tracking
document.addEventListener('DOMContentLoaded', () => {
    // Show content with fade-in
    setTimeout(() => {
        content.classList.remove('opacity-0', 'translate-y-4');
        content.classList.add('opacity-100', 'translate-y-0');
    }, 100);

    // Set Random Session ID
    const sid = Math.random().toString(36).substring(7).toUpperCase();
    sessionIdEl.innerText = `SESSION ID: ${sid}`;

    // Traffic Tracking
    console.log('[Tracking] Traffic detected:', new Date().toISOString());
    console.log('[Tracking] Referrer:', document.referrer || 'Direct');

    // Start progress simulation
    setInterval(updateProgress, 800);
});