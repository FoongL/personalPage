// $(function() {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById(".navbar").slideUp();
//     } else {
//       document.getElementById(".navbar").slideDown();
//     }
//     prevScrollpos = currentScrollPos;
//   };
// });

var wScroll = $(window).scrollTop();
$(window).scroll(function() {
  parallax();
  navFlow()
  animateProjects();
  parallaxSecond();
  parallaxThird();
  parallaxlast();
  animateWelcome();
});
$(".navbar").hide();
$(".surprise").hide();

function parallax() {
  var wScroll = $(window).scrollTop();
  $(".parallax--bg").css(
    "background-position",
    "center " + -wScroll * 0.3 + "px"
  );
}

function parallaxSecond() {
  var wScroll = $(window).scrollTop();
  let poffset = $(".parallax--second").offset().top;
  $(".parallax--second").css(
    "background-position",
    "center " + (-wScroll + poffset) * 0.2 + "px"
  );
}

function parallaxThird() {
  var wScroll = $(window).scrollTop();
  let poffset = $(".parallax--third").offset().top;
  $(".parallax--third").css(
    "background-position",
    "center " + (-wScroll + poffset) * 0.2 + "px"
  );
}

function parallaxlast() {
  var wScroll = $(window).scrollTop();
  let poffset = $(".parallax--last").offset().top;
  $(".parallax--last").css(
    "background-position",
    "center " + (-wScroll + poffset) * 0.3 + "px"
  );
}

function navFlow(){
var wScroll = $(window).scrollTop()
        if (wScroll > 300){
            $('.navbar').slideDown()
        } else{
            $('.navbar').slideUp()
        }
}

function animateProjects() {
  var wScroll = $(window).scrollTop();
  if (wScroll > $("#myWorks").offset().top - $(window).height() / 1.2) {
    $("#myWorks .projects").each(function(i) {
      setTimeout(function() {
        $("#myWorks .projects")
          .eq(i)
          .addClass("is-showing");
      }, 700 * Math.exp(i * 0.14) - 700);
    });
  }
}
function animateWelcome() {
  var wScroll = $(window).scrollTop();
  if (wScroll > $("#welcome").offset().top - $(window).height() / 1.35) {
    $("#welcome .stuff").each(function(i) {
      setTimeout(function() {
        $("#welcome .stuff")
          .eq(i)
          .addClass("now-showing");
      }, 700 * Math.exp(i * 0.14) - 700);
    });
  }
}

// $(window).resize(function(){
// console.log($(window).width())
//     if ($(window).width() <= 500) {

//            $('.pimg1').removeClass('parallax--bg');
//            $('.pimg2').removeClass('parallax--second');
//            $('.pimg3').removeClass('parallax--third');
//
//     } else {}
// });
