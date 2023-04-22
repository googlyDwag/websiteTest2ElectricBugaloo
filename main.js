var postcardFront = document.getElementById("postcard-front-image");
var postcardBack = document.getElementById("postcard-back-image");
var timelineMain = document.getElementById("timeline-main-image");
var timelineWorksCited = document.getElementById("timeline-works-cited-image");
var playlistCover = document.getElementById("playlist-cover-image");
var playlistMain = document.getElementById("playlist-main-image");
function nextSlide(slide01, slide02) {
	if (slide01.style.display != "none") {
		slide01.style.display = "none";
		slide02.style.display = "initial";
	} else if (slide01.style.display == "none") {
		slide01.style.display = "initial";
		slide02.style.display = "none";
	}
		
}
postcardFront.addEventListener("click", function(){
	nextSlide(postcardFront, postcardBack)
});
postcardBack.addEventListener("click", function(){
	nextSlide(postcardFront, postcardBack)
});
timelineMain.addEventListener("click", function(){
	nextSlide(timelineMain, timelineWorksCited)
});
timelineWorksCited.addEventListener("click", function(){
	nextSlide(timelineMain, timelineWorksCited)
});
playlistCover.addEventListener("click", function(){
	nextSlide(playlistCover, playlistMain)
});
playlistMain.addEventListener("click", function(){
	nextSlide(playlistCover, playlistMain)
});