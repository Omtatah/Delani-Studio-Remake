$(document).ready(function () {
    $('#hide1').click(function () {
        $('#show1').show();
        $('#hide1').hide();
    });
    $('#show1').click(function () {
        $('#hide1').show();
        $('#show1').hide();
    });
    $('#hide2').click(function () {
        $('#show2').show();
        $('#hide2').hide();
    });
    $('#show2').click(function () {
        $('#hide2').show();
        $('#show2').hide();
    });
    $('#hide3').click(function () {
        $('#show3').show();
        $('#hide3').hide();
    });
    $('#show3').click(function () {
        $('#hide3').show();
        $('#show3').hide();
    });
    $('#imge1').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text1').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text1').fadeOut();
    }, function(){
        $('#text1').show();
    })
    $('#imge2').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text2').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text2').fadeOut();
    }, function(){
        $('#text2').show();
    })
    $('#imge3').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text3').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text3').fadeOut();
    }, function(){
        $('#text3').show();
    })
    $('#imge4').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text4').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text4').fadeOut();
    }, function (){
        $('#text4').show();
    })
    $('#imge5').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text5').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text5').fadeOut();
    }, function () {
        $('#text5').show();
    })
    $('#imge6').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text6').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text6').fadeOut();
    }, function(){
        $('#text6').show();
    })
    $('#imge7').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text7').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text7').fadeOut();
    }, function(){
        $('#text7').show();
    })
    $('#imge8').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('#text8').fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $('#text8').fadeOut();
    }, function(){
        $('#text8').show();
    });
});