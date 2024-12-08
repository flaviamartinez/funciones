function pintar(etiqueta, color="green"){
	etiqueta.style.backgroundColor = color
	}

const ele = document.getElementById("ele1")

pintar(ele)
ele.addEventListener("click", () => pintar(ele, "yellow"));