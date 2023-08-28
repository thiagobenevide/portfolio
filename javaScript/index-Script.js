//Menu

var show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show
})



/*Code Debaunce*/ 

const debounce = function(func, wait, immediate){
    let timeout
    return function(...args){
        const context = this
        const later = function(){
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

//Transition Projects

const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4)
    target.forEach(function(element){

        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

/*Otimizations*/

if(target.length){
    window.addEventListener("scroll", debounce(function(){
        animeScroll()
        console.log("asdasd")
    }, 100))
}


let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')

button1.addEventListener('click', ()=>{
    window.location.href = 'https://www.youtube.com/watch?v=i2M9CR9-53g&t=165s'
})


button2.addEventListener('click', ()=>{
    window.location.href = 'https://www.youtube.com/watch?v=JQPVAdLKqK8'
})


button3.addEventListener('click', ()=>{
    window.location.href = 'https://www.youtube.com/watch?v=gg40QwIlhlM'
})
