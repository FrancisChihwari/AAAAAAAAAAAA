const text = "You Are My Forever ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = typeWriter;

function showLove() {
    alert("I knew it 😘 Francis loves you more!");
}

function scrollToLetter() {
    document.getElementById("letter").scrollIntoView({behavior: "smooth"});
}

function measureLove() {
    document.getElementById("bar").style.width = "100%";
    document.getElementById("loveMessage").innerText =
        "Error: Love exceeds measurable limits ❤️";
}

function surprise() {
    document.getElementById("proposal").classList.remove("hidden");
}

function moveNo() {
    const btn = document.querySelector(".no");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
}
