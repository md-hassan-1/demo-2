let sno = 1;

function additem() {
    let itemName = document.querySelector("#item-name");
    let itemPrice = document.querySelector("#item-price");
    let itemQty = document.querySelector("#item-qty");
    let itemTotal = document.querySelector("#item-total");

    if (itemName.value != "" && itemPrice.value != "" && itemQty.value != "") {
        let tr = document.createElement("tr");
        let td_sno = document.createElement("td");
        td_sno.innerText = sno;
        sno++;

        let td_name = document.createElement("td");
        td_name.innerText = itemName.value;
        let td_prce = document.createElement("td");
        td_prce.innerText = itemPrice.value;
        let td_qty = document.createElement("td");
        td_qty.innerText = itemQty.value;
        let td_total = document.createElement("td");
        td_total.innerText = Number(itemPrice.value) * Number(itemQty.value);

        tr.append(td_sno);
        tr.append(td_name);
        tr.append(td_prce);
        tr.append(td_qty);
        tr.append(td_total);

        let tbody = document.querySelector("#tbody");
        tbody.append(tr);

        itemName.value = "";
        itemPrice.value = "";
        itemQty.value = "";
        itemTotal.value = "";
    } else {
        alert("Please enter every field");
    }
}

function dototal(){
    let itemPrice = document.querySelector("#item-price");
    let itemQty = document.querySelector("#item-qty");
    let itemTotal = document.querySelector("#item-total");
    let total = Number(itemPrice.value) * Number(itemQty.value);
    itemTotal.value = total;
}