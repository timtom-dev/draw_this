var sounds = [
    new Audio('sounds/1.wav'),
    new Audio('sounds/2.wav'),
    new Audio('sounds/3.wav'),
    new Audio('sounds/4.wav'),
    new Audio('sounds/5.wav'),
];

var last = 0;
var rand = 0;

document.getElementById("btn").addEventListener("click", function() {
    while (rand == last) {
        rand = Math.floor(Math.random() * sounds.length);
    }
    last = rand;
    sounds[rand].play();
});
