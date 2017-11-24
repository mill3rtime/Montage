


/*paths for replacing status bar images*/
var sb1 = "images/sb/sb1.png";
var sb2 = "images/sb/sb2.png";
var sb3 = "images/sb/sb3.png";
var sb4 = "images/sb/sb4.png";

sbArray =[sb1,sb2,sb3,sb4,]; /* arrawy of status bar images*/
var sbIndex = 0;/* inital position for cycling through status bar array*/


$(document).ready(function() {

    console.log(sbIndex);


    $(".next-card").click(nextCard);
    $(".next-card").click(changeProgress);


});


function nextCard() {

    var $item = $('.item');
    var buttonId = $(this).attr("id");
    

    multi =1;

    var c1 = $("#c1");
         
    var width = c1.outerWidth(true);

    console.log(width);
        
    $item.animate({left:'+='+(width*0.07)},"fast"); 
    $item.animate({left:'-='+(width*1.07)},"slow");
    /*$item.animate({left:'-='+(width)},"slow");*/

    
    
    }

    function changeProgress() {

            sbIndex++;
         if (sbIndex > 0) {
        $("#status-bar-img").attr("src", sbArray[(sbIndex-1)]);

    }

}