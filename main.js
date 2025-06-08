const items = []

function addItem(){ 
    const itemName = document.querySelector("#item").value 

    if (itemName === ""){
        alert ("Não e posivel adicionar um item vazio")
        return
    }

    const intem = {
        name : itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showitemslist{}
}

    functionshowItemslist(){
        const sectionList = document.querySelector(".list")
        sectionList.textContent = ""

            items.map((item, index) => {
                sectionList.innerHTML = ` <div class="item">
                <div>
                <input type="checkbox" name="list" id="item-${index}" $(item.checked ? 'checked" : '') > 
                <div class="custom-checkbox" onclick="checkItem('$(item.name')>
                    <img src="assents/checked.svg" alt="checked">
                </div>
                <label for="item-${index}" onclick="checkItem('$(item.name')>${item.name}</label>
                </div>

                <button onclick="removeItem('${item.name}')">
                    <img src="assents/trash-icon.svg" alt="">
                </button>

            </div>`
        })
    }

    function removeItem(itemName) {
        const itemIndex = items.findIndex((item) => item.name === itemName)
        const divWarning = document.querySelector(".warning")

        divWarning.classList.remove("hide-warning")

    setTimeout (() => {
            divWarning.classList.add("hide-warning")
        },4000)

        if (itemIndex !== -1) {
            items.splice(itemIndex, 1)
        }

        showitemslist()
}

function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
     item.checked = !item.checked
     showitemslist()
}