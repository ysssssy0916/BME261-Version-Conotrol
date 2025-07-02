function updateCountdown() {
    const now = new Date();
    const end = new Date("2025-08-12T11:30:00-04:00");
    const diff = end - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "The term has ended!";
        return;
    }

    const seconds = Math.floor(diff / 1000);
    document.getElementById("countdown").innerText = \`\${seconds.toLocaleString()} seconds remaining until end of term.\`;
}

setInterval(updateCountdown, 1000);
updateCountdown();