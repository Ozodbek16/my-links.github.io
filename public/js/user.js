const link = document.querySelectorAll('.a_links');
const socialName = document.querySelectorAll('.a_links p');
const socialImg = document.querySelectorAll('.a_links img');
for (let i = 0; i < link.length; i++) {
    if (socialName[i].innerHTML == 'Telegram') {
        socialImg[i].src = "/img/telegram.png"
    } else if (socialName[i].innerHTML == 'Facebook') {
        socialImg[i].src = "/img/facebook.png"
    } else if (socialName[i].innerHTML == 'Instagram') {
        socialImg[i].src = "/img/instagram.png"
    } else if (socialName[i].innerHTML == 'Linkedin') {
        socialImg[i].src = "/img/linkedin.png"
    } else if (socialName[i].innerHTML == 'Twitter') {
        socialImg[i].src = "/img/twitter.png"
    } else if (socialName[i].innerHTML == 'Steam') {
        socialImg[i].src = "/img/steam.png"
    } else if (socialName[i].innerHTML == 'Spotify') {
        socialImg[i].src = "/img/spotify.png"
    } else if (socialName[i].innerHTML == 'DropBox') {
        socialImg[i].src = "/img/dropbox.png"
    } else if (socialName[i].innerHTML == 'Snapchat') {
        socialImg[i].src = "/img/snapchat.png"
    } else if (socialName[i].innerHTML == 'Twitch') {
        socialImg[i].src = "/img/twitch.png"
    } else if (socialName[i].innerHTML == 'Github') {
        socialImg[i].src = "/img/github.png"
    }
}