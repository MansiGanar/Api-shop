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

  let newinnerHtml = `<div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`;
  showProducts += newinnerHtml;
};
