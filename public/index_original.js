/* eslint-disable no-undef */
// Tallennetaan tarvittavia muuttujia.

// Kunkin osan alkamiskohta.
var titleStart = $("#title").offset().top;
var historyStart = $("#history").offset().top;
var aboutStart = $("#about").offset().top;
var galleryStart = $("#gallery").offset().top;
var contactStart = $("#contact").offset().top;
var titleEnd = historyStart;
var historyEnd = aboutStart;
var aboutEnd = galleryStart;
var galleryEnd = contactStart;
var contactEnd = $("#contact").offset().top + $("#contact").height();

// Muutaman vaihdettavan muuttujan alustaminen.
var scrollPlace14 = 0;
var scrollPlace34 = 0;
var currentSection = "";
var targetSection = "";
var clicked = false;

if ($(window).width() <= 768) {
  $(".gallery-img").addClass("limit-width");
};

// Asetetaan pikkukuvien korkeus samaksi kuin leveys jos ikkunan kokoa muutetaan.
$(window).resize(function() {
  updateImgHeight();
  if ($(window).width() <= 768) {
    $(".gallery-img").addClass("limit-width");
  }
  if ($(window).width() > 768) {
    $(".limit-height").removeClass("limit-width");
  };

});

// Näytetään tooltip oikein.
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});

// Ladatessa haetaan, missä kohtaa sivua ollaan ja asetetaan oikea navigointipainike aktiiviseksi.
$(document).ready(function() {

  // Astetaan pikkukuvien leveys.
  updateImgHeight();

  // Haetaan sivun sijainti.
  getScroll();

  // Vaihdetaan aktiiviseksi se navigointipainike minkä osan kohdalla ollaan.
  $(".nav-btn").attr("disabled", false);
  $("#btn-" + currentSection).attr("disabled", true);

  // Sivu näkyviin vasta kun se on ladattu.
  // $("body").toggleClass("invisible");

});

// Navigoinnin aktiivisen painikkeen muuttaminen aina skrollatessa tiettyyn osaan.
$(window).scroll(function() {

  // Haetaan sivun sijainti.
  getScroll();

  // Poistetaan muilta painikkeilta disabled-ominaisuus ja lisätään se aktiivisen osan painikkeeseen.
  if (!clicked) {
    $(".nav-btn").attr("disabled", false);
    $("#btn-" + currentSection).attr("disabled", true);
  }

  if (scrollBottom >= historyEnd + $(window).height() / 10) {
    $(".left-diagonal.first").addClass("left-straight");
    $(".right-diagonal.first").addClass("right-straight");
  }

  if (scrollBottom >= aboutEnd + $(window).height() / 10) {
    $(".left-diagonal.second").addClass("left-straight");
    $(".right-diagonal.second").addClass("right-straight");
  }

  if (scrollBottom < historyEnd + $(window).height() / 10) {
    $(".left-diagonal.first").removeClass("left-straight");
    $(".right-diagonal.first").removeClass("right-straight");
  }

  if (scrollBottom < aboutEnd + $(window).height() / 10) {
    $(".left-diagonal.second").removeClass("left-straight");
    $(".right-diagonal.second").removeClass("right-straight");
  }

});

// TESTIT
// $(window).scroll(function() {
//   $(".floater-text1").text(scrollBottom);
//   $(".floater-text2").text(contactEnd);
//   // $(".floater-text3").text($(window).scrollTop());
//   // $(".floater-text4").text(galleryStart);
// });

// Kun klikataan navigoinnin painiketta, skrollataan sivu oikeaan paikkaan. Lisäksi vaihdetaan painikkeelle merkintä aktiivinen.
$(".nav-btn").click(function() {

  // Klikkaus tapahtui. Asetetaan targetiksi se, mitä klikattiin.
  clicked = true;
  targetSection = $(this).attr("id").substring(4);

  // Poistetaan kaikista painikkeista aktiivisuus ja lisätään se tietylle.
  $(".nav-btn").attr("disabled", false);
  $("#btn-" + targetSection).attr("disabled", true);

  // Skrollataan sivu oikeaan kohtaan. Haetaan tieto painikkeen id:stä.
  $("html, body").animate({
    scrollTop: $("#" + $(this).attr("id").substring(4)).offset().top
  }, 1000);

  // Klikattaessa ei anneta muiden navigointipainikkeiden muuttua. Animaatio kestää 1000 ms, jonka ajan klikkaus on voimassa.
  window.setTimeout(function() {
    clicked = false;
  }, 1000);

});

// // Avataan galleria isompana, jos klikataan pikkukuvaa. Estetään sivun skrollaaminen.
// $(".img-clickable").click(function() {
//   $(".item" + $(this).attr("id").substring(3)).addClass("active");
//   // $(this).addClass("moved");
//   // window.setTimeout(function() {
//   $("#gallery-popup").toggleClass("visible");
//   $("#gallery-popup").toggleClass("invisible");
//   $("body").toggleClass("no-scroll");
//   // }, 200);
// });

// Suljetaan galleria. Asetetaan aktiivisuus pois gallerian kuvilta, jotta se voidaan asettaa myöehmmin uudelleen.
$(".close-popup").click(function() {
  $("#gallery-popup").toggleClass("visible");
  $("#gallery-popup").toggleClass("invisible");
  $(".carousel-item").removeClass("active");
  $("body").toggleClass("no-scroll");
})

// Haetaan sivun sijainti.
function getScroll() {

  titleStart = $("#title").offset().top;
  historyStart = $("#history").offset().top;
  aboutStart = $("#about").offset().top;
  galleryStart = $("#gallery").offset().top;
  contactStart = $("#contact").offset().top;
  titleEnd = historyStart;
  historyEnd = aboutStart;
  aboutEnd = galleryStart;
  galleryEnd = contactStart;
  contactEnd = $("#contact").offset().top + $("#contact").height();

  // Haetaan kohta, mihin on skrollattu. Lisätään tähän 1/4 korkeudesta, koska halutaan vaihtaa aktiivista osaa aina, kun se vie vähintään 3/4 ruudusta.
  scrollPlace14 = $(window).scrollTop() + $(window).height() / 4;
  scrollPlace34 = $(window).scrollTop() + 3 * $(window).height() / 4;
  scrollBottom = $(window).scrollTop() + $(window).height();

  // Valitaan aktiiviseksi osaksi se, joka vie 3/4 ruudusta.
  if (scrollPlace14 >= contactStart || scrollBottom >= contactEnd) {
    currentSection = "contact";
  } else if (scrollPlace14 >= galleryStart && scrollPlace34 <= galleryEnd) {
    currentSection = "gallery";
  } else if (scrollPlace14 >= aboutStart && scrollPlace34 <= aboutEnd) {
    currentSection = "about";
  } else if (scrollPlace14 >= historyStart && scrollPlace34 <= historyEnd) {
    currentSection = "history";
  } else if (scrollPlace14 >= titleStart && scrollPlace34 <= titleEnd) {
    currentSection = "title";
  }

}

function updateImgHeight() {
  $(".img-clickable").css({
    "height": $(".img-clickable").width() + "px"
  });
}
