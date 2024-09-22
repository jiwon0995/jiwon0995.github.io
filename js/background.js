const images = [
    "정한4.gif",
    "정한5.gif",
    "정한6.gif",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;