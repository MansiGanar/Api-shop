let allData;
window.onload = async () => {
  await fetchData();
};
let allProducts;
const fetchData = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzIzMTU5MDQsImV4cCI6MTYzMzUyNTUwNH0.XEyGL0co4MoD-hfKjeEVQoXEjm_JQ91ygqIVkDcnVv4",
        },
      }
    );
    let products = await response.json();
    allproducts = await products;
    displayAll(allproducts);
  } catch (error) {
    console.log(error);
  }
};

const displayAll = async (products) => {
  let showProducts = document.getElementById("productstoshow");
  showProducts.innerHTML = "";

  console.log(products);

  products.forEach((element) => {
    console.log(element);
    showProducts.innerHTML += `<div class="card m-3 pl-3 " style="width:15rem">
    <img src=${element.imageUrl} class="card-img-top ml-4 pt-3 " style="width:10rem" alt="...">
    <hr>
    <div class="card-body">
    
      <h5 class="card-title">${element.brand}</h5>
      <p class="card-text">${element.description}</p>
      <p class="card-text">${element.price}</p>
      <p class="card-text">${element.name}</p>
      <p class="text-muted">${element._id}</p>
      <button class="deleteButton btn-danger" type="delete">Delete</button>
    </div>
  </div>`;
  });
};
