let cont=document.getElementById("container");
let selectedId=localStorage.getItem("productId");
let products=JSON.parse(localStorage.getItem("products"));
if(selectedId && products){
    let product=products.find(val=>selectedId==val.id)
    console.log(product);
    cont.innerHTML=`
    <div class="top">
        <img src="${product.images}" height="250" width="200"/>
        <main>
            <h1>${product.title}</h1>
            <p><b>Category: </b>${product.category}</p>
            <p><b>Price: </b>$${product.price}</p>
            <p><b>Description: </b>${product.description}</p>
            <button class="add" id="cart" onclick="fun()">Add to cart</button>
            <a href="./homePage.html"><button class="back">Back To Home</button></a>
        </main>
    </div>
    <div>
        <h1>Customer reviews</h1>
        ${product.reviews.map(val =>
            `
            <article>
                <p>${'❤️'.repeat(val.rating)}${'🖤'.repeat(5-val.rating)}</p>
                <p>${val.comment}</p>
                <p>By ${val.reviewerName} on ${new Date(val.date).toLocaleDateString()} 
            </article>`
        ).join("")}
    </div>`

    document.getElementById("cart").addEventListener("click",()=>{
        addToCart(product)
    })
}
function fun(){
    alert("Added to Cart ✅");
}
function addToCart(prod){
    let arr=JSON.parse(localStorage.getItem("cart")) || [];
    arr.push(prod);
    localStorage.setItem("cart",JSON.stringify(arr));
}