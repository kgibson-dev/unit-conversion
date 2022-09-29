const conversionValues = {
	feet: 3.281,
	gallon: 0.264,
	pound: 2.204,
}

let metres = 0
let litres = 0
let kilograms = 0
let feet = 0
let gallons = 0
let pounds = 0



// Setup DOM Objects
const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

// Listen for clicks on the Convert Button and perform conversions
convertBtn.addEventListener("click", function() {

    metres = (convertInput.value / conversionValues.feet).toFixed(3)
    feet = (convertInput.value * conversionValues.feet).toFixed(3)
    kilograms = (convertInput.value / conversionValues.pound).toFixed(3)
	pounds = (convertInput.value * conversionValues.pound).toFixed(3)
    litres = (convertInput.value / conversionValues.gallon).toFixed(3)
	gallons = (convertInput.value * conversionValues.gallon).toFixed(3)

    if (convertInput.value == 1) {
        lengthP.innerHTML = `${convertInput.value} meter = ${feet} feet | ${convertInput.value} foot = ${metres} meters`
        massP.innerHTML = `${convertInput.value} kilo = ${pounds} pounds | ${convertInput.value} pound = ${kilograms} kilos`
		volumeP.innerHTML = `${convertInput.value} liter = ${gallons} gallons | ${convertInput.value} gallon = ${litres} liters`
    } else {
        lengthP.innerHTML = `${convertInput.value} meters = ${feet} feet | ${convertInput.value} feet = ${metres} meters`
        massP.innerHTML = `${convertInput.value} kilos = ${pounds} pounds | ${convertInput.value} pounds = ${kilograms} kilos`
        volumeP.innerHTML = `${convertInput.value} liters = ${gallons} gallons | ${convertInput.value} gallons = ${litres} liters`
    }
})



