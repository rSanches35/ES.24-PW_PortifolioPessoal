
/* Open Sidebar */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add("overlay");
    document.addEventListener("click", closeNavOnClickOutside);
}

/* Close Sidebar */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("overlay");
    document.removeEventListener("click", closeNavOnClickOutside);
}

function closeNavOnClickOutside(event) {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.querySelector(".openbtn");
    if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
        closeNav();
    }
}

/* Footer Copy Info */
function copyToClipboard(type) {
    let textToCopy = '';
    let message = '';

    if (type === 'whatsapp') {
        textToCopy = '+55 (44) 9926-4101';
    }
    else if (type === 'email') {
        textToCopy = 'rafaelsanches.s35@gmail.com';
    }

    message = 'Copiado!';

    navigator.clipboard.writeText(textToCopy).then(() => {
        document.getElementById('copy-message').innerText = message;
        setTimeout(() => {
            document.getElementById('copy-message').innerText = '';
        }, 3000);
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

/* Change Theme */
function lightDarkTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        document.getElementById("moon").style.display = "revert";
        document.getElementById("sun").style.display = "none";
    }
    else {
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "revert";
    }
 }