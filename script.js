function calculateZakat(type) {
    let amount, zakatRate, zakat;

    switch (type) {
        case 'business':
            amount = document.getElementById('business-income').value;
            zakatRate = 0.025;
            break;
        case 'gold':
            amount = document.getElementById('gold-weight').value;
            zakatRate = 0.025;
            break;
        case 'savings':
            amount = document.getElementById('savings-amount').value;
            zakatRate = 0.025;
            break;
        case 'income':
            amount = document.getElementById('income-amount').value;
            zakatRate = 0.025;
            break;
        default:
            document.getElementById(`${type}-result`).innerHTML = "Invalid Zakat Type!";

            return;
    }

    zakat = amount * zakatRate;
    document.getElementById(`${type}-result`).innerHTML = `Your Zakat: RM${zakat.toFixed(2)}`;

}

function showCalculator() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
}


//COUNTDOWN 

function startCountdown() {
    const ramadanDate = new Date("March 2, 2025 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = ramadanDate - now;

        if (timeLeft >= 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        } else {
            document.getElementById("countdown-timer").textContent = "Ramadan has started!";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);

//change mode 

function changeMode() {
    const mode = document.getElementById("colorblind").value;
    const body = document.getElementById("page-body");

    if (mode === "deuteranopia") {
        body.classList.add("deuteranopia");
        body.style.filter = "url(#deuteranopia-filter)";
    } else {
        body.classList.remove("deuteranopia");
        body.style.filter = "none";
    }
}

 

   if (mode === "deuteranopia") {
        body.classList.add("deuteranopia");
        body.style.filter = "url(#deuteranopia-filter)";
    } else {
        body.classList.remove("deuteranopia");
        body.style.filter = "none";
    }

    
