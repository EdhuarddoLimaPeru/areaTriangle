// event

// let suceso = document.getElementById('demo')
// let  evento = document.querySelector('button')
//      evento.addEventListener('click',night)
// function night(){
//     suceso.innerHTML = 'make history'
//   }


// let input  = document.getElementById('input')
// let output = document.getElementById('output')
// let button = document.getElementById('button')
// let storageClient = 0
// button.addEventListener('click',process)

// function process(){
//     let storageClient = parseInt(input.value)
//     if(storageClient){
//         output.innerHTML = 'The number is ' + storageClient
//     }else if(!storageClient){
//         output.innerHTML='Do not put a word o letter !!'
//     }
    
//     console.log(storageClient)
// }

let inputBase = document.getElementById('inputBase')
let inputHeight = document.getElementById('inputHeight')
let button = document.getElementById('button')
let output = document.getElementById('output')
let storageBase = 0
let storageHeight = 0
let area = 0
button.style.cursor = 'pointer'
button.addEventListener('click',calculus)

function calculus(){
        storageBase = parseInt(inputBase.value) 
        storageHeight = parseInt(inputHeight.value) 
        area = (storageBase*storageHeight)/2
        if(area){
            output.innerHTML = 'The triangle area is : ' + area
        }else if(!area){
            output.innerHTML = 'You must put a number'
        }
        
    }





//``        console.log()