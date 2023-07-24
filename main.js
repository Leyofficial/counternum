
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus')
let counter = document.querySelector('.counter');
let result = Number(counter.textContent)

function errorMessage(text){
    const block = document.querySelector('.block')
    const el = document.createElement('div');
    el.innerHTML = text
    el.classList.toggle('erorM')
    document.body.before(el)
    plus.disabled = true
    setTimeout(() => {
        el.remove()
        plus.disabled = false
    }, 3000);
}

plus.addEventListener('click' , () => {
    if (result === 20){
        errorMessage('Извините у нас не достаточно товаров!')
        
        return;
    }
    counter.innerHTML = result+=1
})
minus.addEventListener('click' , () => {
    if (result < 1){
        return;
    }
    counter.innerHTML = result-=1
})

const btnOpen = document.querySelector('.buttonOpen');
const results = document.querySelector('.result');
const span = document.querySelector('.span');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay')

function hidden(){
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}
btnOpen.addEventListener('click' , (e) => {
    span.innerHTML = result
    hidden()
})
btnClose.addEventListener('click' , () => {
    hidden()
})
overlay.addEventListener('click' , (event) => {
    if (event.target.closest('.overlay')){
        hidden()
    }
})