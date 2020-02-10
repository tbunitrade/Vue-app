$(document).ready(function () {
    console.log('init');

    $('.domainUl li a').click(function (evt) {
        evt.preventDefault();

        if ( $(this).hasClass('selected') == true ) {
            console.log('click 1 ');
            $(this).removeClass('selected');
        }

        else { 
            console.log('click 2 ');
            $(this).addClass('selected');
        }
        
    });

    $('.ulContainer .answer a').click(function (evt) {
        evt.preventDefault();

        if ($(this).hasClass('selected') == true) {
            console.log('click 1 ');
            $(this).removeClass('selected');
        }

        else {
            console.log('click 2 ');
            $(this).addClass('selected');
        }

    });

    
});