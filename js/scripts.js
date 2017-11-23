$(document).ready(function() {

    var $item = $('.item'), //Cache your DOM selector
        visible = 1, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index
        multi =.86
        
    $('#arrowR').click(function(){

    var width = jQuery(window).width();
        
    $item.animate({left:'-='+(width*multi)});
    multi = multi * 1.08
    
    });

    $('#arrowL').click(function(){
    var width = jQuery(window).width();

        $item.animate({left:'+='+(width*multi)});
    multi = multi * 1.08

    });

});
