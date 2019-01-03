$(document).ready(InitializeApp)
var currentSlideNumber = 0;

function InitializeApp() {
    applyClickHandlers() // This applies click handlers to the next and prev buttons
    setInterval(nextSlide, 5000)
    createDots();
}

function applyClickHandlers() {
    $(".next").click(nextSlide);
    $(".previous").click(previousSlide);
    
}
function createDots() {
    var slidesTotal = $("div.slide").length;
    console.log(slidesTotal)
    var imagesDot = $("<div>").addClass("dots-container")
    for (var index = 0; index < slidesTotal; index++) {
        var dot = $("<i>").addClass("fa fa-circle dots").attr('key',`${index}`);
        if (index === 0) {
            dot.addClass("active")
        }
        $(imagesDot).append(dot);
    }
    $(".image-dots").append(imagesDot);
}
function nextSlide() {
    var slidesTotal = $("div.slide").length
    $(".dots").removeClass("active");
    if (slidesTotal - 1 !== currentSlideNumber) { // IF the current slide is NOT on the last Slide 
        var nextSlide = $("div.slide")[currentSlideNumber + 1]; // Set the Next Slide in the order to be shown
        currentSlideNumber = currentSlideNumber + 1; // Add To the Slide counter 
        $(`[key='${currentSlideNumber}']`).addClass("active");
    } 
    else { // IF the current slide is the last slide
        currentSlideNumber = 0; //Set Current Slide to Beginning
        var nextSlide = $("div.slide")[currentSlideNumber]; // Set the Beginning Slide as the next slide to be shown
        $(`[key='${currentSlideNumber}']`).addClass("active");
    }
    $("div.slide").removeClass("show");
    $(nextSlide).addClass("show");
}

function previousSlide() { 
    var slidesTotal = $("div.slide").length;
    $(".dots").removeClass("active");
    if (currentSlideNumber !== 0) {
        var previousSlide = $("div.slide")[currentSlideNumber-1];
        currentSlideNumber = currentSlideNumber - 1;
        $(`[key='${currentSlideNumber}']`).addClass("active");
    }
    else {
        currentSlideNumber = slidesTotal - 1
        var previousSlide = $("div.slide")[currentSlideNumber];
        $(`[key='${currentSlideNumber}']`).addClass("active");
    }
    $("div.slide").removeClass("show");
    $(previousSlide).addClass("show");
}