// Objeto Propiedades Slide
	let p = {
		paginacion: document.querySelectorAll("#paginacion li"),
		item: 0,
		cajaSlide: document.querySelector("#slide ul"),
		animacionSlide: "slide",
		avanzar: document.querySelector("#slide #avanzar"),
		retroceder: document.querySelector("#slide #retroceder"),
		imgSlide: document.querySelectorAll("#slide ul li"),
		velocidadSlide: 3000,
		loop: false
	}

// Objeto Método Slide
	let m = {
		inicioSlide: function () {
			for (let i = 0; i<p.paginacion.length; i++) {
				p.paginacion[i].addEventListener('click', m.paginacionSlide)
				p.imgSlide[i].style.width = (100/p.paginacion.length)+"%";
			}
			p.avanzar.addEventListener("click", m.avanzar);
			p.retroceder.addEventListener("click", m.retroceder);
			m.intervalo();
			// Paginación dinámica
			p.cajaSlide.style.width = (p.paginacion.length*100)+"%";
		},

		paginacionSlide: function(item){
			p.item = item.target.parentNode.getAttribute("item")-1;
			m.movimientoSlide(p.item);
		},

		avanzar: function(){
			if (p.item == p.imgSlide.length-1) {
				p.item = 0;
			} else {
				p.item++;
			}
			m.movimientoSlide(p.item);
		},

		retroceder: function(){
			if (p.item == 0) {
				p.item = p.imgSlide.length-1;
			} else {
				p.item--;
			}
			m.movimientoSlide(p.item);
		},
		// Movimiento del Slide - Paginación
		movimientoSlide: function(item){
			p.loop = true;
		p.cajaSlide.style.left = item * -100+"%";
		// console.log(item * -100+"%");

		// Animación del Slide
		for (let i = 0; i<p.paginacion.length; i++) {
			p.paginacion[i].style.opacity = .5;
		}
			p.paginacion[item].style.opacity = 1;

		if (p.animacionSlide == "slide") {
			p.cajaSlide.style.transition = ".7s left ease";
		}

		// 	if (p.animacionSlide == "fade") {
		// 		p.imgSlide[item].style.opacity = 0;
		// 		p.imgSlide[item].style.transition = ".7s opacity ease-in-out";

		// 		setTimeout(function(){
		// 		p.imgSlide[item].style.opacity = 1;
		// 	},1000)
		// }
	},
	intervalo: function(){
		setInterval(function(){
			if (p.loop) {
				p.loop = false;
			} else {
				m.avanzar();
			}
		},p.velocidadSlide)
	}
}

m.inicioSlide();