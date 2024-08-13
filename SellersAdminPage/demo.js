

const crudAPIkey = 'https://crudcrud.com/api/40dc0e912ac3472f95ec57e81590f0fe/itemData';

// Change of events when takes input
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('#msg');
const itemPrice = document.querySelector('#price');
const itemName = document.querySelector('#name');
const btn = document.querySelector('#btn');
const itemList = document.querySelector('#items');
const totalPriceDisplay = document.querySelector('#total-price');

let totalPrice = 0;

function addItemList(itemDataList) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.appendChild(document.createTextNode(`${itemDataList.price} - ${itemDataList.name}`));

    // Adding delete button on list
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-sm btn-danger mx-1";
    deleteBtn.appendChild(document.createTextNode('Delete Order'));
    li.appendChild(deleteBtn);

    // Append list item to item list
    itemList.appendChild(li);

    // Delete item when clicked
    deleteBtn.addEventListener('click', (e) => {
        var itemCrudAPI = `${crudAPIkey}/${itemDataList._id}`;

        // Delete item
        axios
            .delete(itemCrudAPI)
            .then(() => {
                // Update total price after successful deletion
                totalPrice -= parseFloat(itemDataList.price);
                totalPriceDisplay.textContent = totalPrice.toFixed(2);
            })
            .catch((error) => {
                console.log(error);
            });

        li.remove();
    });
}

// Rendering listItems stored in crud server
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get(crudAPIkey)
        .then((response) => {
            response.data.forEach(item => {
                addItemList(item);
                totalPrice += parseFloat(item.price);
            });
            totalPriceDisplay.textContent = totalPrice.toFixed(2);
        })
        .catch((error) => {
            console.log(error);
        });
});

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (itemPrice.value === '' || itemName.value === '') {
        msg.innerHTML = '*Please enter all fields';
    } else {
        // Storing items as an object on crud-crud using axios
        let allItems = {
            price: itemPrice.value,
            name: itemName.value,
        };

        axios
            .post(crudAPIkey, allItems)
            .then((response) => {
                // Calling addItemList function
                addItemList(response.data);

                // Update total price after successful addition
                totalPrice += parseFloat(response.data.price);
                totalPriceDisplay.textContent = totalPrice.toFixed(2);

                // Clear fields
                itemPrice.value = '';
                itemName.value = '';
                msg.innerHTML = "";
            })
            .catch((err) => {
                msg.innerHTML = "*Something wrong with the API server";
            });
    }
});
