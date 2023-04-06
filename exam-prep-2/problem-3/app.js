function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
    //  buttons //
    const addBtn = document.getElementById("add-product");
    const updateBtn = document.getElementById("update-product");
    const loadBtn = document.getElementById("load-product");

    // other Elements //
    const tableBody = document.getElementById("tbody");
    const product = document.getElementById("product");
    const count = document.getElementById("count");
    const price = document.getElementById("price");

    let allProducts = {};
    let currentProductId = null;

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);
    updateBtn.addEventListener("click", mainUpdateHandler)

    function loadHandler(event) {
        if (event) {
            event.preventDefault();
        }
        tableBody.innerHTML = "";
        fetch(BASE_URL)
            .then((loadResult) => loadResult.json())
            .then((loadData) => {
                for (const currentObj of Object.values(loadData)) {
                    const newRow = addElements("tr", tableBody, null, null, currentObj._id);
                    addElements("td", newRow, "name", currentObj.product);
                    addElements("td", newRow, "count-product", currentObj.count);
                    addElements("td", newRow, "product-price", currentObj.price);
                    const btnWrapper = addElements("td", newRow, "btn");
                    const updateBtn = addElements("button", btnWrapper, "update", "Update");
                    const deleteBtn = addElements("button", btnWrapper, "delete", "Delete");

                    allProducts[currentObj._id] = {
                        product: currentObj.product,
                        count: currentObj.count,
                        price: currentObj.price,
                    }
                    deleteBtn.addEventListener("click", deleteHandler)
                    updateBtn.addEventListener("click", updateHandler);
                }
            })
            .catch((error) => console.error(error))
    }

    function deleteHandler() {
        let currentID = this.parentNode.parentNode.id;
        let httpHeaders = {
            method: "DELETE"
        }
        fetch(`${BASE_URL}${currentID}`, httpHeaders)
            .then((delResult) => delResult.json())
            .then((loadHandler()))
            .catch((error) => console.error(error))
    }

    function addHandler(event) {
        event.preventDefault();
        let infoBody = {
            product: product.value,
            count: count.value,
            price: price.value,
        }

        let httpHeaders = {
            method: "POST",
            body: JSON.stringify(infoBody)
        }
        fetch(BASE_URL, httpHeaders)
            .then((postResult) => postResult.json())
            .then((postData) => {
                loadHandler();
                product.value = '';
                count.value = '';
                price.value = '';
            })
            .catch((error) => console.error(error))
    }

    function updateHandler() {
        updateBtn.disabled = false;
        currentProductId = this.parentNode.parentNode.id;
        let currentProducts = allProducts[currentProductId];
        product.value = currentProducts.product;
        count.value = currentProducts.count;
        price.value = currentProducts.price;
    }

    function mainUpdateHandler() {
        let bodyContent = {
            product: product.value,
            count: count.value,
            price: price.value,
        }

        let httpHeaders = {
            method: "PATCH",
            body: JSON.stringify(bodyContent)
        }

        fetch(`${BASE_URL}${currentProductId}`, httpHeaders)
            .then((patchResult) => patchResult.json())
            .then(() => {
                loadHandler();
                updateBtn.disabled = true;
                product.value = "";
                count.value = "";
                price.value = "";
            })
    }



    function addElements(element, parent, classInfo, text, id) {
        let newElement = document.createElement(element);

        if (classInfo) {
            newElement.className = classInfo;
        }

        if (text) {
            newElement.textContent = text;
        }

        if (id) {
            newElement.id = id;
        }

        parent.appendChild(newElement);
        return newElement
    }
}


solve();