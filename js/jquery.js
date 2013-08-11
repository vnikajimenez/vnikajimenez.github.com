$("#hover1").hover(changeImage, revertImage);

function changeImage() {
	$(".front1").slideUp();
}

function revertImage() {
 	$(".front1").slideDown();
 }