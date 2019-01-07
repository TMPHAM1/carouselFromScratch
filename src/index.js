import '../styles.scss'
import captionArray from '../data/captions.js'
import { create } from 'domain';
$(document).ready(InitializeApp)
var currentSlideNumber = 1;
let slider;
let slides ;
let slidesTotal;
let firstSlide;
let lastSlide; 




function InitializeApp() {
    // setInterval(nextSlide, 5000)
    setTitleAndCaption();
    applyClickHandlers();
    slider = $('div.slider');
 slides = slider.find('div');
 slidesTotal = slides.length;
 firstSlide = slides.filter(':first');
 lastSlide = slides.filter(':last');    
    firstSlide.before(lastSlide.clone(true));
    lastSlide.after(firstSlide.clone(true));
}

function setTitleAndCaption(currentSlideNumber=0) {
    console.log("indisde set title and caption", currentSlideNumber);
    $(".title").text(captionArray[currentSlideNumber]["title"]);
    $(".caption").text(captionArray[currentSlideNumber]["caption"]);
}
function applyClickHandlers() {
    $(".next").click(nextSlide);
    $(".previous").click(previousSlide);
    $(".dots").click(currentClick);
    
}
function nextSlide() {
    console.log(slidesTotal);
    $(".dots").removeClass("active");
    if (slidesTotal !== currentSlideNumber)  { // IF the current slide is NOT on the last Slide 
        currentSlideNumber = currentSlideNumber + 1; // Add To the Slide counter 
        $(`[id='${currentSlideNumber}']`).addClass("active");
        $("div.slider").css({"transform": `translateX( ${ -20* currentSlideNumber}%)`,
        "transition": "transform 2s"});
        
        console.log("This slide number", currentSlideNumber);
    }
    else {   
        $("div.slider").css({"transform": `translateX( ${ -20 * (currentSlideNumber + 1)}% )`,
        "transition": "transform 1s"})
        currentSlideNumber = 1;
        $(`[id='${currentSlideNumber}']`).addClass("active");
        setTimeout(function() {
            $("div.slider").css("transition", "")
            $("div.slider").css("transform", `translateX( ${ -20 * currentSlideNumber}% )`)
        }, 900)
        
       
    }
 
    setTitleAndCaption(currentSlideNumber-1);
}

function previousSlide() { 
    console.log(currentSlideNumber);
    $(".dots").removeClass("active");
    if (currentSlideNumber !== 1) {
        // var previousSlide = $("div.slide")[currentSlideNumber-1];
        currentSlideNumber = currentSlideNumber - 1;
        $(`[id='${currentSlideNumber}']`).addClass("active");
        $("div.slider").css({"transform": `translateX( ${ -20 * currentSlideNumber}% )`,
        "transition": "transform 2s"});
    }
    else {
        $(`[id='3']`).addClass("active");
        $("div.slider").css({"transform" : `translateX( 0% )`, "transition": "transform 1s" });
        currentSlideNumber = 3; 
        setTimeout(function() {
            $("div.slider").css("transition", "")
             $("div.slider").css("transform", `translateX( ${-20 *3}% )`);  
        }, 800)
             
    }
    $("div.slide").removeClass("show");
    setTitleAndCaption(currentSlideNumber-1);
}

function currentClick(event) {
 let currentClickSlideNumber = parseInt(event.target.id);
 $(".dots").removeClass("active");
 $(`[id='${currentClickSlideNumber}']`).addClass("active");
 $("div.slider").css("transform", `translateX( ${ -20.75 * currentClickSlideNumber}% )`);
 currentSlideNumber = currentClickSlideNumber;
 console.log(currentClickSlideNumber);
 setTitleAndCaption(currentClickSlideNumber-1);
} 
