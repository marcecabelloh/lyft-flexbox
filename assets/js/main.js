function cambioColor(){
	var distancia= window.pageYOffset || document.documentElement.scrollTop;
	var nuevonav= document.getElementById("navegador");
	var logo = document.getElementById("logo");

	if (distancia>100){
		nuevonav.classList.add("nuevoNav");
		logo.setAttribute("src", "assets/img/logo-pink.png");
	}else{
		nuevonav.classList.remove("nuevoNav");
		logo.setAttribute("src", "assets/img/logo-white.png");
	}
}

window.addEventListener("scroll",cambioColor);