
//accordion

$(document).ready(function () {
    $("#accordion").accordion({ 
    animate: 500, 
    heightStyle: "content" , 
    header: ".accordionheader .accordionbuttons"

    });
});








//"loopje" door de video's + buttons play pause rewind

$('video').each(function () {

    var player = videojs(this.id, {});

    $(this).parents(".videoaccordion").find(".rewind").click(function(){

        player.currentTime(player.currentTime() - 10);

    });

    var geklikt = false;

    $(this).parents(".videoaccordion").find(".videocheck").click(function(){ 
        $(this).parents(".accordionheader").find(".checkmodal").css("display", 'block');
            $(".modal").css("display" , 'block');

    });



    $(this).parents(".videoaccordion").find(".playpause").click(function(){ 

        
        if (geklikt) {
            player.pause();
            geklikt = false;
            $(this).parents(".videoaccordion").find('.playpause').css("background-image", "url('../icons/playbutton@2x.png')");
            

        } else {
            player.play();
            geklikt = true;
            $(this).parents(".videoaccordion").find('.playpause').css("background-image", "url('../icons/pausebutton@2x.png')");
        }



});


$('.close-button').click(function () {
    $('.modal').css('display', "none")

});




//switchmode

$('#switch').change(function () {
    if($(this).is(':checked')) {
        $('body').addClass('dark')
        $('#logo').attr('src', 'icons/logowit@2x.svg');
    
        
} else {
    $('body').removeClass('dark')
    $('#logo').attr('src', 'icons/logo@2x.svg');

}

});

});
