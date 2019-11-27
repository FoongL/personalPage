var wScroll = $(window).scrollTop()
$(window).scroll(function(){
    parallax()
    navFlow()
    surprise()
    animateProjects()
    parallaxSecond()
    parallaxThird()
    parallaxlast()
    animateWelcome()
    parallaxsmall()
});
$('.navbar').hide()
$('.surprise').hide()

function parallax() {    
    var wScroll = $(window).scrollTop()
    $('.parallax--bg').css('background-position','center '+(-wScroll*0.3)+'px')
    // $('.parallax--last').css('background-position','center '+(-wScroll*0.125)+'px')
}

function parallaxSecond() {    
    var wScroll = $(window).scrollTop()
    let poffset = ($('.parallax--second').offset().top)
    $('.parallax--second').css('background-position','center '+((-wScroll+poffset)*0.2)+'px')
}

function parallaxThird() {    
    var wScroll = $(window).scrollTop()
    let poffset = ($('.parallax--third').offset().top)
    $('.parallax--third').css('background-position','center '+((-wScroll+(poffset))*0.2)+'px')
}

function parallaxlast() {    
    var wScroll = $(window).scrollTop()
    let poffset = ($('.parallax--last').offset().top)
    $('.parallax--last').css('background-position','center '+((-wScroll+poffset)*0.3)+'px')
}

function parallaxsmall() {    
    var wScroll = $(window).scrollTop()
    let poffset = ($('.parallax--small').offset().top)
    $('.parallax--small').css('background-position','center '+((-wScroll+poffset)*0.4)+'px')
}
// function parallax() {    
//     var wScroll = $(window).scrollTop()
//     for (let pimg in $('.parallax--bg')){
//         parapic = $('.parallax--bg')[pimg]
//         paraid = '#'+parapic.id
//         if (paraid !== undefined){
//             console.log(paraid)
//         let poffset = ($(paraid).offset().top)
//         if (paraid === '#contactMe'){
//             $('.parallax--bg').css('background-position','center '+((-wScroll+poffset)*0.125)+'px')
//         } else{
//    $('.parallax--bg').css('background-position','center '+((-wScroll)*0.125)+'px')
// }}}}


function navFlow(){
var wScroll = $(window).scrollTop()
        if (wScroll > 300){
            $('.navbar').slideDown()
        } else{
            $('.navbar').slideUp()
        }
        // $('.menu label.menu-toggle').css('height',+(60*(wScroll / 750))+'px')
    
}
function surprise(){
    var wScroll = $(window).scrollTop()
        if (wScroll > 50){
            $('.surprise').fadeIn()
        } else{
            $('.surprise').fadeOut()
        }
        // $('.menu label.menu-toggle').css('height',+(60*(wScroll / 750))+'px')
    
}

function animateProjects(){
    var wScroll = $(window).scrollTop()
    if (wScroll > $('#myWorks').offset().top - ($(window).height() / 1.2)){
        $('#myWorks .projects').each(function(i){
            // $('#myWorks .projects').removeClass('not-showing');
           setTimeout(function(){ $('#myWorks .projects').eq(i).addClass('is-showing');
           }, (700 * (Math.exp(i*0.14)))-700);
        })
    }
}
function animateWelcome(){
    var wScroll = $(window).scrollTop()
    if (wScroll > $('#welcome').offset().top - ($(window).height() / 1.35)){
        $('#welcome .stuff').each(function(i){
           setTimeout(function(){ $('#welcome .stuff').eq(i).addClass('now-showing');
           }, (700 * (Math.exp(i*0.14)))-700);
        })
    }
}
