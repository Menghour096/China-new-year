// Set Chinese New Year date (example: Feb 17, 2026)
const newYearDate = new Date("Feb 17, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    if (distance < 0) {
        timer.innerHTML = "🎉 Happy Chinese New Year! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
