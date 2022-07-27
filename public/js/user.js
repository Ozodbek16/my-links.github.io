const link = document.querySelectorAll('.a_links');
const socialName = document.querySelectorAll('.a_links p');
const socialImg = document.querySelectorAll('.a_links img');
for (let i = 0; i < link.length; i++) {
    if (socialName[i].innerHTML == 'Telegram') {
        socialImg[i].src = "/img/telegram.png"
    }
}