$(".question").click(function(){

	$(this).next().fadeToggle("fast");
	$(this).children().toggleClass("collapse");
})

// $("#q1").click(function(){

// 	$("#a1").slideToggle("slow");
// 	$("#arrow1-down, #arrow1-up").toggleClass("collapse");

// })

// $("#q2").click(function(){

// 	$("#a2").slideToggle("slow");
// 	$("#arrow2-down, #arrow2-up").toggleClass("collapse");

// })

// $("#q3").click(function(){

// 	$("#a3").slideToggle("slow");
// 	$("#arrow3-down, #arrow3-up").toggleClass("collapse");

// })