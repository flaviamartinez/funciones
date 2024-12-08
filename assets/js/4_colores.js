// 4 Colores
const changeColor = (etiqueta, color) =>{
	etiqueta.style.background = color
}

const azul = document.getElementById("azul")
const rojo = document.getElementById("rojo")
const verde = document.getElementById("verde")
const amarillo = document.getElementById("amarillo")

azul.addEventListener("click", () => changeColor(azul, "black"))
rojo.addEventListener("click", () => changeColor(rojo, "black"))
verde.addEventListener("click", () => changeColor(verde, "black"))
amarillo.addEventListener("click", () => changeColor(amarillo, "black"))

// Keys
const keyBox = document.getElementById("key")
let backgroundColor


const createDiv = (color) => {
	const newDiv = document.createElement('div')
	newDiv.style.width = '200px'
	newDiv.style.height = '200px'
	newDiv.style.backgroundColor = color
	document.body.appendChild(newDiv)
}

document.addEventListener('keydown', function (event) {
	if (event.key === 'a') {
		backgroundColor = 'pink'
	} else if (event.key === 's') {
		backgroundColor = 'orange'
	} else if (event.key === 'd') {
		backgroundColor = 'lightblue'
	} else if (event.key === 'q') {
		backgroundColor = 'purple'
	} else if (event.key === 'w') {
		backgroundColor = 'grey'
	} else if (event.key === 'e') {
		backgroundColor = 'brown'
	}

	if (['a', 's', 'd'].includes(event.key)) {
		changeColor(keyBox, backgroundColor);
	} else if (['q', 'w', 'e'].includes(event.key)) {
		createDiv(backgroundColor);
	}
})