const tbody =document.querySelector('tbody')
const thead =document.querySelector('thead')
const titleValue =document.getElementById('search-client')
const titlePrice =document.getElementById('search-products')
const titleStock =document.getElementById('search-stock')
const theadTh =document.querySelectorAll('thead th')
const inputs = document.querySelectorAll(".search-box")
const inputsIcon = document.querySelectorAll(".search-icon")
const addPost = document.getElementById('add-product')
inputs.forEach((item, index) => {
    item.addEventListener("focus", () => {
        inputsIcon[index].classList.add("hide")
    })

    item.addEventListener("blur", () => {
        if(!item.value.length) {
            inputsIcon[index].classList.remove("hide")
        }
    })
})
 const fetchData=()=>{
    fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products`)
.then(res=>res.json())
.then(data=>{
    data.products.forEach(product=>{
    let text =`
    <tr>
    <th class="table_th" >${product._id.substring(0,2)}</th>
    <td class="table_th" >${product.title}</td>
    <td class="table_th" >${product.price}</td>
    <td class="table_th" >${product.stock}</td>
    <td class="table_th" ><button onclick='deleteItem("${product._id}")'>delete</button></td>
    
  </tr>
    `
        tbody.innerHTML+=text
    })

})
 }
 fetchData()
function deleteItem (id){
        fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/${id}`, { method: 'DELETE' })
    .then(() => {
        tbody.innerHTML=''
        fetchData() 
    }
    );  
}
debugger;

console.log('e')
addPost.addEventListener('click', postData)
async function postData(url = `https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/`, data = {_id: Math.random(),
title:titleValue.innerText,
price: titlePrice.innerText,
stock:titleStock.innerText
}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(data), 
    });
    fetchData() 
      console.log('asdas')
  }
  
