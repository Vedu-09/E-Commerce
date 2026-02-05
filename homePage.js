let products = []
let container = document.getElementById("cnt");
let nav = document.getElementById("nav-container");
let productDetails = "";

let usernameSpan = document.getElementById("username");
let uname = localStorage.getItem("Username");
if (uname) {
    usernameSpan.innerText = uname;
}

function fetchData() {
    window.fetch("https://dummyjson.com/products")
        .then(val => val.json())
        .then(res => {
            products = res.products
            displayData(products)
            localStorage.setItem("products", JSON.stringify(products))
        })
}

function displayData(pro) {
    productDetails = ""
    console.log(pro);
    pro.map(val => {
        console.log(val);
        productDetails += `
            <div class="card">
             <img src="${val.images}" height="140" width="140">
            <h2>${val.title}</h2>
            <p><b>Price:</b> $${val.price}</p>
            <article>
            <main class="rating">
            ${val.rating}
            <i class="fa-solid fa-star"></i>
            </main>
            <button class="viewmore" onclick="viewmore(${val.id})">viewmore</button>
            </article>
            </div>
        `
    })

    container.innerHTML = productDetails
}

function viewmore(id) {
    localStorage.setItem("productId", id)
    window.location.assign("./product.html")
}

function searchProduct(val) {
    let searchTerm = val.target.value.toLowerCase()
    let filteredProducts = products.filter(val =>
        val.title.toLowerCase().includes(searchTerm) ||
        val.category.toLowerCase().includes(searchTerm)
    )
    displayData(filteredProducts)
}

document.getElementById("input").addEventListener("input", searchProduct)

fetchData();