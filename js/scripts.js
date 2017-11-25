


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

sbArray =[sb1,sb2,sb3,sb4,]; /* arrawy of status bar images*/
var sbIndex = 0;/* inital position for cycling through status bar array*/


$(document).ready(function() {



    $(".next-card").click(nextCard);
    $(".next-card").click(changeProgress);
    $(".add-now").click(introDone);  //adds input info to global variables


$(".get-onboarding").click(function(){
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

function nextCard(){
    var $item = $('.item');
    var buttonId = $(this).attr("id");

    multi =1;
    var c1 = $("#c1");
    var width = c1.outerWidth(true);        
    $item.animate({left:'+='+(width*0.07)},"fast"); 
    $item.animate({left:'-='+(width*1.07)},"slow");
    }

    function changeProgress(){
            sbIndex++;
         if (sbIndex > 0) {
        $("#status-bar-img").attr("src", sbArray[(sbIndex-1)]);
        $("#status-bar-img-2").attr("src", sbArray[(sbIndex-1)]);
        $("#hide-status").css("display","-webkit-box");

    }
}




function introDone() {

    alert('fire');

var introArray = {
name: nameInput,
date: dateInput,
place: placeInput
};

localStorage.setItem("personInfo", JSON.stringify(introArray));

// var cartInStorage = JSON.parse(localStorage.getItem("storageCart"));

alert(localStorage.personInfo);

}






















