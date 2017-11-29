
/*local storage user info*/
var IntroItem = null;
var nameInput = "TBD";
var dateInput = "TBD";
var placeInput = "TBD";


/*paths for replacing status bar images*/
var sb1 = "images/sb/sb1.png";
var sb2 = "images/sb/sb2.png";
var sb3 = "images/sb/sb3.png";
var sb4 = "images/sb/sb4.png";

sbArray =[sb1,sb2,sb3,sb4,]; /* array of status bar images*/
var sbIndex = 0;/* inital position for cycling through status bar array*/


$(document).ready(function() {
    $(".next-card").click(nextCard); /*slides cards to left during onboarding*/
    $(".next-card").click(changeProgress);/*shows next status bar images as user progresses through onboarding cards*/
    $(".add-now").click(introDone);  //adds input info (from onboarding) to global variables which are late put in local storage
    $("#nav-span").click(function (){ //overrides default styling for collapseable bootstrap menu to match intneded designs
        changeMenu();
    });




$(".get-onboarding").click(function(){ // when user clickcs next button in onboarding, map input to global vars above
if (($(this).attr('id') == "name-1") || ($(this).attr('id') == "name-2")) {
nameInput = $("#name-v").val();
}
if (($(this).attr('id') == "date-1") || ($(this).attr('id') == "date-2")) {
dateInput = $("#date-v").val();
}

if (($(this).attr('id') == "place-1") || ($(this).attr('id') == "place-2")) {
placeInput = $("#place-v").val();
}
});
});

function nextCard(){  //moves cards when user clicks next. 
    //this looks simple but I can't tell you hard challeneging it was to do this while keeping the view constrained to a single card!
    var $item = $('.item');
    var buttonId = $(this).attr("id");

    var c1 = $("#c1");
    var width = c1.outerWidth(true);        
    $item.animate({left:'+='+(width*0.07)},"fast"); 
    $item.animate({left:'-='+(width*1.07)},"slow");
    }

    function changeProgress(){ //change status bar in onboarding
            sbIndex++;
         if (sbIndex > 0) {
        $("#status-bar-img").attr("src", sbArray[(sbIndex-1)]);
        $("#status-bar-img-2").attr("src", sbArray[(sbIndex-1)]);
        $("#hide-status").css("display","-webkit-box");
    }
}

function introDone() { //user inputs in global variables put into an array introArray
var introArray = {
name: nameInput,
date: dateInput,
place: placeInput
};
localStorage.setItem("personInfo", JSON.stringify(introArray)); //put array into local storage
}


function createResult() { //take arrat from local storage and update html on story.html
 var infoFromStorage = JSON.parse(localStorage.getItem("personInfo"));
$(".result-name").empty();
$(".result-name").append(infoFromStorage.name);
$(".result-date").empty();
$(".result-date").append(infoFromStorage.date);
$(".result-place").empty();
$(".result-place").append('born' + infoFromStorage.place);
}


function changeMenu(){ //style mobile dropdownmenu. override bootstrap defaults.
var size = "120%";
$("#m1").css({ 'color': '#7ED321', 'font-size': size}); // m1 et are spans in the mobile drop down menu
$("#m2").css({ 'color': '#7ED321', 'font-size': size});
$("#m3").text('Login');
$("#m3").css({ 'color': '#7ED321', 'font-size': size, 'background':'none'});
$("#m4").text('Contact Us');
$("#m4").css({ 'color': '#7ED321', 'font-size': size, 'background':'none'});
}

















