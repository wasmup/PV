let powerConsumption = document.getElementById("powerConsumption");
let averageCurrent = document.getElementById("averageCurrent");
let voltage = document.getElementById("voltage");
let noChargeHours = document.getElementById("noChargeHours");
let minimumCapacity = document.getElementById("minimumCapacity");
let batteryEfficiency = document.getElementById("batteryEfficiency");
let batteryCapacity = document.getElementById("batteryCapacity");
let batteryCapacity2 = document.getElementById("batteryCapacity2");
let activeHours = document.getElementById("activeHours");
let solarPerformance = document.getElementById("solarPerformance");
let chargeTime = document.getElementById("chargeTime");
let chargeCurrent = document.getElementById("chargeCurrent");
let chargerCurrent = document.getElementById("chargerCurrent");
let panelPower = document.getElementById("panelPower");
let chargerPerformance = document.getElementById("chargerPerformance");

function calc() {
    let v = Number(voltage.value);
    let amp = Number(powerConsumption.value) / v;
    averageCurrent.innerText = amp.toFixed(2);

    let h = Number(noChargeHours.value);
    let ah = amp * h;
    minimumCapacity.innerText = ah.toFixed(2);

    ah *= Number(batteryEfficiency.value);
    batteryCapacity.innerText = ah.toFixed(2);

    let chargingHours = Number(activeHours.value) * Number(solarPerformance.value) / 100;
    chargeTime.innerText = chargingHours.toFixed(2);

    let chargingCurrent = ah / chargingHours;
    chargeCurrent.innerText = chargingCurrent.toFixed(2);

    let powerSuppluOutputCurrent = chargingCurrent + amp;
    chargerCurrent.innerText = powerSuppluOutputCurrent.toFixed(2);

    batteryCapacity2.innerText = Math.max(5 * chargingCurrent, 20 * amp, ah).toFixed(2);

    let p = powerSuppluOutputCurrent * v / Number(chargerPerformance.value) * 100;
    panelPower.innerText = p.toFixed(2);
}

document.getElementById("calculate").addEventListener("click", calc);

powerConsumption.addEventListener("change", calc);

voltage.addEventListener("change", calc);

noChargeHours.addEventListener("change", calc);

batteryEfficiency.addEventListener("change", calc);

activeHours.addEventListener("change", calc);

batteryCapacity2.addEventListener("change", calc);

solarPerformance.addEventListener("change", calc);

chargerPerformance.addEventListener("change", calc);

calc();
