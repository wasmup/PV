let powerConsumption = document.getElementById("powerConsumption");
let averageCurrent = document.getElementById("averageCurrent");
let voltage = document.getElementById("voltage");
let noChargeHours = document.getElementById("noChargeHours");
let minimumCapacity = document.getElementById("minimumCapacity");
let batteryEfficiency = document.getElementById("batteryEfficiency");
let batteryCapacity = document.getElementById("batteryCapacity");
let activeHours = document.getElementById("activeHours");
let solarPerformance = document.getElementById("solarPerformance");
let chargeTime = document.getElementById("chargeTime");
let chargeCurrent = document.getElementById("chargeCurrent");
let panelCurrent = document.getElementById("panelCurrent");
let panelPower = document.getElementById("panelPower");

function calc() {
    let amp = Number(powerConsumption.value) / Number(voltage.value);
    averageCurrent.innerText = amp.toFixed(2);
    let h = Number(noChargeHours.value);
    let ah = amp * h;
    minimumCapacity.innerText = ah.toFixed(2);
    ah *= Number(batteryEfficiency.value);
    batteryCapacity.innerText = ah.toFixed(2);
    let charge = Number(activeHours.value) * Number(solarPerformance.value) / 100;
    chargeTime.innerText = charge.toFixed(2);
    let a = ah / charge;
    chargeCurrent.innerText = a.toFixed(2);
    a += amp;
    panelCurrent.innerText = a.toFixed(2);
    let p = a * 12;
    panelPower.innerText = p.toFixed(2);
}

document.getElementById("calculate").addEventListener("click", calc);
powerConsumption.addEventListener("change", calc);
voltage.addEventListener("change", calc);
noChargeHours.addEventListener("change", calc);
activeHours.addEventListener("change", calc);
activeHours.addEventListener("change", calc);
solarPerformance.addEventListener("change", calc);

calc();