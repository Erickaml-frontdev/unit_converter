const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let inputValue = ""
let baseStringLength = `0 mètres =  0 pieds |  0 pieds =  0 mètres`
let baseStringVolume = `0 litres =  0 gallons |  0 gallons = 0 litres`
let baseStringMass = `0 kilos = 0 livres | 0 livres = 0 kilos`

lengthText.textContent = baseStringLength
volumeText.textContent = baseStringVolume
massText.textContent = baseStringMass

convertBtn.addEventListener("click", function(){
    inputValue = Number(inputEl.value)
    lengthText.innerHTML = `${inputValue} mètres = ${meterToFeet()} pieds |  ${inputValue} pieds =  ${feetToMeter()} mètres`;
    
    volumeText.textContent = `${inputValue} litres =  ${literToGallon()} gallons |  ${inputValue} gallons = ${gallonToLiter()} litres`;
    
    massText.textContent = `${inputValue} kilos = ${kgToPound()} livres | ${inputValue} livres = ${poundToKg()} kilos`;
})


function meterToFeet(){
    return (inputValue * 3.281).toFixed(3)
}

function feetToMeter(){
    return (inputValue / 3.281).toFixed(3)
}

function literToGallon(){
    return (inputValue * 0.264).toFixed(3)
}

function gallonToLiter(){
    return (inputValue / 0.264).toFixed(3)
}

function kgToPound(){
    return (inputValue * 2.204).toFixed(3)
}

function poundToKg(){
    return (inputValue / 2.204).toFixed(3)
}