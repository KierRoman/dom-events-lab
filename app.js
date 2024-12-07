/*-------------------------------- Constants --------------------------------*/
// const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')
const AC = document.querySelector('C')


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


calculator.addEventListener('click', (event) => {  
    let val = (event.target.innerText)
    
    
 if (event.target.classList.contains('number')) { 
    display.innerText += (val)
} if (event.target.classList.contains('operator') && event.target.innerText !== 'C'){
    display.innerText += (val) 
} if (val === '=' && display.value !== ''){
    display.innerText = eval(display.innerText)

} if (event.target.innerText === 'C'){
    display.innerText = '';
}
    

})

/*-------------------------------- Functions --------------------------------*/


