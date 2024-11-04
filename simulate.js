const Average_Panel_Wattage = 310;
let Number_panels = 0;
let Daily_Req = 0;
let monthlySavings = 0;
let co2 = 0;
const co2_rate = 0.8;
const avg_cost_ = 6;

let Panel_Output = document.getElementById("p_req");
let Carbon_Output = document.getElementById("co2");
let Savings_Output = document.getElementById("savings");
let Trees_Output = document.getElementById("tree");

function Calculate() {
    let Units = parseInt(document.getElementById('units').value);
    let Hours = parseInt(document.getElementById('hours').value);
    
    Daily_Req = (Units * 1000) / 30;

    Number_panels = (Daily_Req / (Average_Panel_Wattage * Hours));
    monthlySavings = Units * avg_cost_;
    co2 = Math.round(Units * co2_rate);
    trees = Math.round(co2 / 30);

    Panel_Output.innerText = "Solar Panels required: " + Math.ceil(Number_panels);
    Carbon_Output.innerText = co2 + "Kg of CO2 will be reduced";
    Savings_Output.innerText = "Save ₹" + monthlySavings + " per month";
    Trees_Output.innerText = "It is equivalent to planting " + trees + " trees";

    document.querySelectorAll(".display").forEach((element) => {
        element.classList.add("show");
    });
    
    // Ensure info icons are still visible
    document.querySelectorAll(".info-icon").forEach((icon) => {
        icon.classList.remove("hidden"); // Assuming you have a class to hide them
    });

    console.log(Number_panels);
}

function showPopup(infoId) {
    const popup = document.getElementById("popup");
    const content = document.getElementById("popup-content");

    // Set different text based on the info ID
    const infoText = {
        info1: "This shows the estimated number of solar panels required based on your monthly energy usage and available sunlight hours.",
        info2: "This shows the potential savings over time from switching to solar energy, reducing monthly electricity costs.",
        info3: "This shows the reduction in CO2 emissions due to solar energy, helping to reduce your carbon footprint.",
        info4: "This estimate is equivalent to the number of trees that would be needed to absorb the CO2 offset by switching to solar."
    };

    // Set the popup text based on which info icon was clicked
    content.innerText = infoText[infoId];

    // Show popup
    popup.classList.add("show");
}

// Function to close popup
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}
