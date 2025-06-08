const items = []

function addItem(){ 
    const itemName = document.querySelector("#item").value

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
                <input type="checkbox" name="list" id="item-${index}" > 
                <div class="custom-checkbox">
                    <img src="assents/checked.svg" alt="checked">
                </div>
                <label for="item-${index}">${item.name}</label>
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