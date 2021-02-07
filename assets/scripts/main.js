var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");

document.addEventListener("input", updateSlider);
document.addEventListener("volume-slider", updateVolumeValue);

function updateSlider () {
    volumeNumber.value = volumeSlider.value;
}


function updateVolumeValue(vol){
    document.getElementById("volume-number").value;
}

var volumeImage = document.getElementById("volume-image");

function updateSlider () {
    volumeNumber.value = volumeSlider.value;
}

function setVolume(){
    if (67 <= volumeNumber && volumeNumber <= 100) {
        volumeImage.src = "volume-level-3.svg";
    } else if (34 <= volumeNumber && volumeNumber <= 66) {
        volumeImage.src = "volume-level-2.svg";
    } else if (1 <= volumeNumber && volumeNumber <= 33) {
        volumeImage.src = "volume-level-1.svg";
    } else {
        volumeImage.src = "volume-level-0.svg";
    }
}
  



var soundImage = document.getElementById("sound-image");

document.addEventListener("submit", playSound());

var air_horn_selector = document.addEventListener("radio-air-horn", playSound);
var car_horn_selector = document.addEventListener("radio-car-horn", playSound);
var party_horn_selector = document.addEventListener("radio-party-horn", playSound);

if (air_horn_selector.checked) {
    soundImage.src = "air-horn.svg";
} else if (car_horn_selector.checked) {
    soundImage.src = "car.svg";
} else {
    soundImage.src = "party-horn.svg";
}

var sound = document.getElementById("horn-sound");

document.getElementById("honk-btn").addEventListener("click", playSound);

function playSound() {

    if (air_horn_selector.checked) {
        sound.src = "air-horn.mp3";
    } else if (car_horn_selector.checked) {
        soundImage.src = "car-horn.mp3";
    } else {
        soundImage.src = "party-horn.mp3";
    }  
    sound.play();
}

