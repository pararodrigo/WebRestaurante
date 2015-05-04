/**
 * Created by Rodrigo on 2/5/15.
 */
$(document).ready(function() {

   // location.reload();

    $(".jMyCarousel").jMyCarousel({ // Script de los Thumbnails
        visible: '100%',
        eltByElt: true
    });
    $(".jMyCarousel img").fadeTo(100, 0.6);
    $(".jMyCarousel a img").hover(
        function(){ //mouse over
            $(this).fadeTo(400, 1);
        },
        function(){ //mouse out
            $(this).fadeTo(400, 0.6);
        });

    $('#contenido_galeria div').css('position', 'absolute').not(':first').hide();
    $('#contenido_galeria div:first').addClass('aqui');
    $('.jMyCarousel a').click(function(){
        $('#contenido_galeria div.aqui').fadeOut(400);
        $('#contenido_galeria div').removeClass('aqui').filter(this.hash).fadeIn(400).addClass('aqui');
        return false;
    });
});