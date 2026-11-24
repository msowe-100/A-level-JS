
const promptSync = require("prompt-sync");
const prompt = promptSync();

let allowedDigits=("1234567890")
let allowedCharacters= ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_+")
let allowedSymbols=("!$%^&*()-_+")
let upperCaseletters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
let lowerCaseletters = "abcdefghijklmnopqrstuvwxyz"
let topRow = "qwertyuiop"
let middleRow = "asdfghjkl"
let bottomRow = "zxcvbnm"

console.log("=====Mo's Password Checker=====")
console.log("Check(1)")
console.log("Generate(2)")
console.log("Quit(3)")

let optionSelection = prompt("Please select one of the 3 options")

if(optionSelection==="1"){
    console.log("You have selected the Check(1) option")
    let passwordScore = 0
    let passwordcheck=prompt("Please enter a Password( 8-24 characters ) ")
    console.log(passwordcheck)

    if(passwordcheck.length>24){
        console.log("INVALID! Your password is above 24 character")
    }
    else if(passwordcheck.length<8){
        console.log("INVALID! Your password is below 8 characters")
    }
    else {
    let isValid = true

    for(let i=0;i<passwordcheck.length;i++){
        let currentCharacter = passwordcheck[i]
        if(!allowedCharacters.includes(currentCharacter)){
            isValid = false 
        }
    }

    if(isValid === true){
        console.log("Your password has valid characters")

        let capitalScore = false
        passwordScore = passwordcheck.length

        for(let i=0;i<passwordcheck.length;i++){
            let charactercount = passwordcheck[i]
            if(upperCaseletters.includes(charactercount)){capitalScore = true
        }
    }

    if (capitalScore === true){
        passwordScore +=5
    }

    let lowerCaseScore = false

    for(let i = 0;i< passwordcheck.length;i++){
        let characterLowerCount = passwordcheck[i]
        if (lowerCaseletters.includes(characterLowerCount)){
        lowerCaseScore = true
        }
    }

    if(lowerCaseScore === true){
        (passwordScore +=5)
    }

    let digitScore = false

    for(let i=0;i<passwordcheck.length;i++){
        let digitCount = passwordcheck[i]
        if(allowedDigits.includes(digitCount)){
        digitScore = true
        }
    }

    if(digitScore===true){
        passwordScore += 5
    }

    let symbolScore = false

    for(let i = 0;i < passwordcheck.length;i++){
        let symbolCheck=passwordcheck[i]
        if(allowedSymbols.includes(symbolCheck)){
            symbolScore = true
        }
    }

    if (symbolScore === true){
        passwordScore += 5
    }

    if(capitalScore === true &
    lowerCaseScore === true &
    digitScore === true &
    symbolScore === true)
    {
        passwordScore += 10
    }

    if(
    lowerCaseScore === true &
    digitScore === false &
    symbolScore === false)
    {passwordScore -= 5}

    if(capitalScore === false &
    lowerCaseScore === false &
    digitScore === true &
    symbolScore === false){
        passwordScore -= 5
    }

    if(capitalScore === false &
    lowerCaseScore === false &
    digitScore === false &
    symbolScore === true){
        passwordScore -= 5
    }

    for(let i=0; i+2<passwordcheck.length; i++){

        let sequence = passwordcheck[i] + passwordcheck[i+1] + passwordcheck[i+2]

        sequence = sequence.toLowerCase()

        if(topRow.includes(sequence)||
        middleRow.includes(sequence)||
        bottomRow.includes(sequence)){
            passwordScore -= 5
        }
    }

    console.log(`Your password's score is ${passwordScore}`)

    if (passwordScore>20){
        console.log("Password Strength = Strong")
    }
    else if(passwordScore>0){
        console.log("Password Strength = Medium")
    }
    else{
        console.log("Password Strength = Weak")
    }
    }
    else{
        console.log("Error! Your passowrd has INVALID characters")
    }
    }
}

else if(optionSelection==="2"){
    console.log("You have selected the Generate(2) option")
     function passwordGeneration(){

    function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let passwordLength = getRndInteger(8, 12)
let generatedPassword =""
let generatedPasswordScore = 0
for(let i = 0 ;i<passwordLength;i++){
    let randomIndex = Math.floor(Math.random() * allowedCharacters.length)
let randomCharacter = allowedCharacters[randomIndex]
generatedPassword += randomCharacter
}
       let generatedCapitalScore = false
        generatedPasswordScore = generatedPassword.length

        for(let i=0;i<generatedPassword.length;i++){
            let generatedCharacterCount = generatedPassword[i]
            if(upperCaseletters.includes(generatedCharacterCount)){generatedCapitalScore = true
        }
    }

    if (generatedCapitalScore === true){
        generatedPasswordScore +=5
    }

    let generatedLowerCaseScore = false

    for(let i = 0;i< generatedPassword.length;i++){
        let generatedCharacterLowerCount = generatedPassword[i]
        if (lowerCaseletters.includes(generatedCharacterLowerCount)){
        generatedLowerCaseScore = true
        }
    }

    if(generatedLowerCaseScore === true){
        ( generatedPasswordScore +=5)
    }

    let generatedDigitScore = false

    for(let i=0;i<generatedPassword.length;i++){
        let generatedDigitCount = generatedPassword[i]
        if(allowedDigits.includes(generatedDigitCount)){
        generatedDigitScore = true
        }
    }

    if(generatedDigitScore===true){
        generatedPasswordScore += 5
    }

    let generatedSymbolScore = false

    for(let i = 0;i <generatedPassword.length;i++){
        let generatedSymbolCheck=generatedPassword[i]
        if(allowedSymbols.includes(generatedSymbolCheck)){
            generatedSymbolScore = true
        }
    }

    if (generatedSymbolScore === true){
        generatedPasswordScore += 5
    }

    if(generatedCapitalScore === true &
    generatedLowerCaseScore === true &
    generatedDigitScore === true &
    generatedSymbolScore === true)
    {
        generatedPasswordScore += 10
    }

    if(generatedCapitalScore === true &
    generatedLowerCaseScore === true &
    generatedDigitScore === false &
    generatedSymbolScore === false)
    {generatedPasswordScore -= 5}

    if(generatedCapitalScore === false &
    generatedLowerCaseScore === false &
    generatedDigitScore === true &
    generatedSymbolScore === false){
        generatedPasswordScore -= 5
    }

    if(generatedCapitalScore === false &
    generatedLowerCaseScore === false &
    generatedDigitScore === false &
    generatedSymbolScore === true){
        generatedPasswordScore -= 5
    }
    if(
    generatedLowerCaseScore === true &
    generatedDigitScore === false&
    generatedSymbolScore === false){
        generatedPasswordScore -= 5
    }

    for(let i=0; i+2<generatedPassword.length; i++){

        let generatedSequence = generatedPassword[i] + generatedPassword[i+1] + generatedPassword[i+2]

   generatedSequence = generatedSequence.toLowerCase()

        if(topRow.includes(generatedSequence)||
        middleRow.includes(generatedSequence)||
        bottomRow.includes(generatedSequence)){
            generatedPasswordScore -= 5
        }}
    


    console.log(`Your password's score is ${generatedPasswordScore}`)

    if ( generatedPasswordScore>20){
        console.log("Password Strength = Strong")
          console.log(`Generated Password:${generatedPassword}`)
    }
    else{
        passwordGeneration()
    }
     }

    passwordGeneration()
}

else if(optionSelection==="3"){
    console.log("You have succesfully quit this application")
}

else{
    console.log("Invalid selection. Please choose 1, 2 or 3.")
}


