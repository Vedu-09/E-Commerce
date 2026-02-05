let con = document.getElementById("con")
let totalPrice = document.getElementById("totalPrice")
let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart);

function display() {
    let total = 0
    if (cart.length == 0) {
        con.innerHTML = `Cart is empty`
        totalPrice.innerHTML = ``
    }

    cart.map((val, index) => {
        console.log(val);
        console.log(index);

        total += val.price
        con.innerHTML += `
        <div>
            <article>
                <img src= "${val.images}" height="100" width="100"/>
                <h3>${val.title}</h3>
                <p><b>Brand : </b> ${val.brand}</p>
                <p><b>Category : </b> ${val.category}</p>
                <p><b>shippingInformation : </b> ${val.shippingInformation}</p>
                <p><b>WarrantyInformation  : </b> ${val.warrantyInformation}</p>
                <p><b>availabilityStatus: </b> ${val.availabilityStatus}</p>
                <p><b>Stock: </b> ${val.stock}</p>
                <p><b>price: </b> $${val.price}</p>
            </article>
            <button onclick="removeItem(${index})">remove</button>
        </div>
    `

        totalPrice.innerText = `TotalPrice : $${total}`
    })
}
display()
function removeItem(ind) {
    let arr = JSON.parse(localStorage.getItem("cart"))
    arr.splice(ind, 1)
    localStorage.setItem("cart", JSON.stringify(arr))
    console.log(arr);
    display()
    location.reload()
}