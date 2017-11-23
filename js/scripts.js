$(document).ready(function() {

    var $item = $('.item'), //Cache your DOM selector
        visible = 1, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index

    $('#arrowR').click(function(){
        if(index < endIndex ){
            index++;
            $item.animate({'left':'-=700px'});
        }
    });

    $('#arrowL').click(function(){
        if(index > 0){
            index--;
            $item.animate({'left':'+=700px'});
        }
    });

});
