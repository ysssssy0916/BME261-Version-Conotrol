function updateCountdown() {
    const now = new Date();
    const end = new Date(2025, 7, 12, 11, 30, 0); // August 12, 2025 11:30 AM
    const diff = end - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "The term has ended!";
        return;
    }

    const seconds = Math.floor(diff / 1000);
    document.getElementById("countdown").innerText = `${seconds.toLocaleString()} seconds remaining until end of term.`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
