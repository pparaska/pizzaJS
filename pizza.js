function isEmpty() {
    if ( document.forms['form1']['name'].value === "") {
        alert("empty");
        return false;
    }
    return true;
}

function addRow() {

    var table = document.getElementById("Summary");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "cell 1 text";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = "cell 2 text";


    console.log("table e");


}
function showtable() {

    var delivery = false;
    rate_value = '';
    if (document.getElementById('delivery').checked) {
        delivery = true;
    } else if (document.getElementById('pickup').checked) {
        delivery = false;
    }


    var Toppings =[];

    if (document.getElementById("ExtraCheese").checked) {
        Toppings .push("Extra Cheese");
    }
    
    if (document.getElementById("Pepperoni").checked) {
        Toppings .push("Pepperoni");

    }
    
    if (document.getElementById("Olives").checked) {
        Toppings .push("Olives");

    }
    
    if (document.getElementById("Pepper").checked) {
        Toppings .push("Pepper");

    }
    
    if (document.getElementById("Bacon").checked) {
        Toppings .push("Bacon");

    }
    
    if (document.getElementById("Tomatoes").checked) {
        Toppings .push("Tomatoes");

    }
    
    if (document.getElementById("Mushrooms").checked) {
        Toppings .push("Mushrooms");

    }
    
    console.log(Toppings);

    for(i=0;i<Toppings.length;i++){
        insertRow(i,Toppings[i]);
    }


    document.getElementById("Name").innerHTML = document.getElementById("name").value;
    document.getElementById("Email").innerHTML = document.getElementById("email").value;
    document.getElementById("Address").innerHTML = document.getElementById("AddressText").value;
    document.getElementById("Delivery").innerHTML = delivery;
    document.getElementById("Tip").innerHTML = document.getElementById("tip").value+" %";

    var basePrice=10;
    var deliveryCharge=0;
    if(delivery){
        deliveryCharge=5;
    }
    var tipPercent=document.getElementById("tip").value;
    var total=(basePrice + (1.5*Toppings.length) + deliveryCharge)*(1.0 + tipPercent/100);
    document.getElementById("Total").innerHTML =total;
    
}

function insertRow(i,Toppings){
    var table = document.getElementById("summary_table");
    var nameRow = table.insertRow(i+4);

    var nameCell1 = nameRow.insertCell(0);
    nameCell1.innerHTML = "Toppings "+ ++i;

    var nameCell2 = nameRow.insertCell(1);
    nameCell2.innerHTML = Toppings;

}
