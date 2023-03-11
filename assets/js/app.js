const tbody =document.querySelector('tbody')
const thead =document.querySelector('thead')
const titleValue =document.querySelector('search-client')
const titleProduct =document.querySelector('search-product')
const titleStock =document.querySelector('search-stock')
const theadTh =document.querySelectorAll('thead th')
 const fetchData=()=>{
    fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products`)
.then(res=>res.json())
.then(data=>{
    data.products.forEach(product=>{
    let text =`
    <tr>
    <th>${product._id.substring(0,2)}</th>
    <td>${product.title}</td>
    <td>${product.price}</td>
    <td>${product.stock}</td>
    <td><button onclick='deleteItem("${product._id}")'>delete</button></td>
    
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


async function postData(url = `https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/`, data = {_id: Math.random(),
title:search,
price: 345,
stock:15
}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  

  