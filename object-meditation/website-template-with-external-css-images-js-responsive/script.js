$(document).ready(function() {


 // BOXES CHANGE COLOR WHEN MOCHI IS CLICKED
$("#mochiimg").click(function(){
    $(".arya-pink-box").toggleClass("arya-blue-box");
  });

$("#mochiimg").click(function(){
    $(".nicole-blue-box").toggleClass("nicole-yellow-box");
  });

$("#mochiimg").click(function(){
    $(".caroline-yellow-box").toggleClass("caroline-pink-box");
  });


// BOX SHADOW ADDED TO HOME IMAGE BACKGROUND
$("#backgroundButton").click(function(){
    $(".homeimg").toggleClass("homeimg2");
  });

//CHRISTMAS STYLE WHEN CHRISTMAS IMAGES ARE CLICKED
  $("#xmas").click(function() {
    $("body").toggleClass("hide");
  });

  $("#xmas2").click(function() {
    $("body").toggleClass("hide2");
  });

  $("#xmas3").click(function() {
    $("body").toggleClass("hide3");
  });

//toggle for ipad screen, how we met button to show text
$(".buttonToggle").click(function() {
    $("#story").toggle("display");
  });


     });
