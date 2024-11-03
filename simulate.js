const Average_Panel_Wattage = 310;
let Number_panels=0;
let Daily_Req=0;
let monthlySavings = 0;
let co2=0;
const co2_rate=0.8;
const avg_cost_= 6;



function Calculate(){
    let Units=parseInt(document.getElementById('units').value);
    let Hours=parseInt(document.getElementById('hours').value);
    let Output=document.getElementById('output');

    Daily_Req= (Units*1000)/30;

    Number_panels = (Daily_Req/(Average_Panel_Wattage*Hours));
    monthlySavings=Units* avg_cost_;
    co2= Math.round(Units*co2_rate);
    trees=Math.round(co2/30);


    Output.innerHTML= "You will need "+Math.ceil(Number_panels)+" solar panels |"+
    " you will save "+monthlySavings+"₹ per month |" + co2 + "Kg of Carbon Dioxide will be reduced per Month |"+" It is equivalent to planting "+ trees + "Trees"
    ;


    console.log(Number_panels);
}

