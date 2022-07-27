document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123) {
        e.preventDefault()
    }
})

document.querySelector('body').addEventListener('contextmenu', (e) => {
    e.preventDefault()
})