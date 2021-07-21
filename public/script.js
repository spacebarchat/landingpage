const header = document.getElementById("scrollc");

function onWindowScroll(event) {
	if (window.pageYOffset < 20) {
		header.classList.remove("scrolled");
	} else {
		header.classList.add("scrolled");
	}
}

window.addEventListener("scroll", onWindowScroll);
