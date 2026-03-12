const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let inputValue = ""
let baseStringLength = `0 meters =  0 feet |  0 feet =  0 meters`
let baseStringVolume = `0 liters =  0 gallons |  0 gallons = 0 liters`
let baseStringMass = `0 kilos = 0 pounds | 0 pounds = 0 kilos`

lengthText.textContent = baseStringLength
volumeText.textContent = baseStringVolume
massText.textContent = baseStringMass

convertBtn.addEventListener("click", function(){
    inputValue = Number(inputEl.value)
    lengthText.innerHTML = `${inputValue} meters = ${meterToFeet()} feet |  ${inputValue} feet =  ${feetToMeter()} meters`;
    
    volumeText.textContent = `${inputValue} liters =  ${literToGallon()} gallons |  ${inputValue} gallons = ${gallonToLiter()} liters`;
    
    massText.textContent = `${inputValue} kilos = ${kgToPound()} pounds | ${inputValue} pounds = ${poundToKg()} kilos`;
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