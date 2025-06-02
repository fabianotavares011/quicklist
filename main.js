const items = []

function addItem(){ 
    const itemName = document.querySelector("#item").value

    const intem = {
        name : itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""
}