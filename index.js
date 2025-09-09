const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.querySelector("#pass1")
let pass2El = document.querySelector("#pass2")

function generatePassword(len){
    let randomPass = ""
    for(let i=0 ; i< len ; i++){
        let num = Math.floor(Math.random() * characters.length)
        randomPass += characters[num]
    }
    return randomPass
}

function renderPasswords(){
    let inputValue = document.querySelector("#pass-len").value
    document.querySelector("#pass1").style.display = 'inline'
    document.querySelector("#pass2").style.display = 'inline'
    pass1El.textContent = generatePassword(inputValue)
    pass2El.textContent = generatePassword(inputValue)
}

console.log(generatePassword(15))


