let sno = 1
function addbill(){
    item_name = document.querySelector("#item-name")
    item_price = document.querySelector("#item-price")
     item_qty= document.querySelector("#item-quit")
    item_total = document.querySelector("#item-total")
    if( item_name.value != null && item_price.value  &&  item_qty.value != null){

        let tr = document.createElement("tr")
        let td_sno = document.createElement("td")
        td_sno.innerText = sno
        sno++
        let td_name =document.createElement("td")
        td_name.innerText=item_name.value
        let  td_price=document.createElement("td")
        td_price.innerText= item_price.value
        let  td_qty=document.createElement("td")
        td_qty.innerText= item_qty.value
        let  td_total=document.createElement("td")
        td_total.innerText=(Number(item_price.value) * Number( item_qty.value))


        tr.append(td_sno)
        tr.append(td_name)
        tr.append(td_price)
        tr.append(td_qty)
        tr.append(td_total)


        let tbody = document.querySelector("#tbody")
        tbody.append(tr)

        item_name.value="";
        item_price.value="";
        item_qty.value="";
        item_total.value="";



    }
    else{
        alert("type to all field")
    }
}

function puttotal(){
    item_price = document.querySelector("#item-price")
    item_qty = document.querySelector("#item-quit")
    item_total = document.querySelector("#item-total")
    let total= (Number(item_price.value) * Number(item_qty.value))
    item_total.value = total


}