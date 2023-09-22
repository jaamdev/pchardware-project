const cerrarAd = document.getElementById('close_ad')
	.addEventListener('click', () => {
		const ad = document.getElementsByClassName('div_ctn_discount')
		ad[0].style.display = 'none'
	})

const nav = document.getElementById('a_menu')
	.addEventListener('click', (e) => {
		e.preventDefault()
		alert(
			'No tengo pensado realizar esta parte 😄'
		)
	})

const question = document.getElementById('question')

question.addEventListener('click', () => {
    alert('Hola 😉')
})

window.addEventListener('scroll', function(){

    let scroll = document.documentElement.scrollTop

    let arrowUp = document.getElementById('arrowup')

    if (scroll > 200){
        question.style.transform = 'scale(1)'
        arrowUp.style.transform = 'scale(1)'
    }else if (scroll < 200){
        question.style.transform = 'scale(0)'
        arrowUp.style.transform = 'scale(0)'
    }
})

document.getElementById('arrowup').addEventListener("click", scrollUp)

function scrollUp(){
    let scroll = document.documentElement.scrollTop || document.body.scrollTop
    if(scroll > 0){
        window.requestAnimationFrame(scrollUp)
        window.scrollTo (0, scroll - (scroll / 10))
    }
}