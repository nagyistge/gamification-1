// ADDING INITIAL ANIMATION

$(function() {
	$(".truck").addClass("truck-init");
});

$("#ring-donut").queue(function() {
	$(".ring-right").addClass("ring-right-init"),
	$(".ring-left").addClass("ring-left-init");
});

$("#angel-donut").queue(function() {
	$(".halo").addClass("halo-init"),
	$(".angel-head").addClass("angel-head-init"),
	$(".angel-body").addClass("angel-body-init"),
	$(".angel-wing-right").addClass("angel-wing-right-init"),
	$(".angel-wing-left").addClass("angel-wing-left-init");
});

$("#review-donut").queue(function() {
	$(".speech-bubble").addClass("speech-bubble-init"),
	$(".star-1").addClass("star-1-init"),
	$(".star-2").addClass("star-2-init"),
	$(".star-3").addClass("star-3-init"),
	$(".star-4").addClass("star-4-init"),
	$(".star-5").addClass("star-5-init");
});


// TRUCK HOVER ANIMATION

$("#truck-donut").mouseenter(function(){
	if($(".truck").hasClass("truck-init")) {
		return;
	}
	else{
    $(".truck").addClass("truck-hover")
	}
});

$(".truck").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
        $(this).removeClass("truck-hover truck-init");
});



// RING HOVER ANIMATION

$("#ring-donut").mouseenter(function(){
	if($(".ring-right").hasClass("ring-right-init")) {
		return;
	}
	else{
    $(".ring-sparkle").addClass("ring-sparkle-hover")
    }
});

$(".ring-sparkle").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
        $(this).removeClass("ring-sparkle-hover");
});

$(".ring-right").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
        $(this).removeClass("ring-right-init"),
        $(this).addClass("ring-right-translate");
});


// ANGEL HOVER ANIMATION

$("#angel-donut").mouseenter(function(){
	if($(".halo").hasClass("halo-init")) {
		return;
	}
	else{
    $(".halo").addClass("halo-hover"),
    $(".angel-wing-right").addClass("angel-wing-right-hover"),
    $(".angel-wing-left").addClass("angel-wing-left-hover");
    console.log($('.halo').hasClass('halo-init'));
    }
});

$(".halo").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
    $(".halo").removeClass("halo-hover halo-init");
 });

$(".angel-wing-right").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
    $(".angel-wing-right").removeClass("angel-wing-right-hover angel-wing-right-init");
 });

$(".angel-wing-left").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
    $(".angel-wing-left").removeClass("angel-wing-left-hover angel-wing-left-init");
});


// REVIEW HOVER ANIMATION

$("#review-donut").mouseenter(function(){
	if($(".star-4").hasClass("star-4-init")) {
		return;
	}
	else{
    $(".star-4").addClass("star-4-hover")
	}
});

$(".star-4").on(
    "animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
    function() {
    	$(".star-4").addClass("star-4-scale")
        $(this).removeClass("star-4-hover star-4-init");
});