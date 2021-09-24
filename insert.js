const BASE_URL = "https://striveschool-api.herokuapp.com/api/product";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization:
    "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzIzMTU5MDQsImV4cCI6MTYzMzUyNTUwNH0.XEyGL0co4MoD-hfKjeEVQoXEjm_JQ91ygqIVkDcnVv4",
});

const putdata = async (event) => {
  event.preventDefault();
  const fname = document.querySelector("input[name=fname]");
  const description = document.querySelector("input[name=description]");
  const brand = document.querySelector("input[name=brand]");
  const imageUrl = document.querySelector("input[name=imageUrl]");
  const price = document.querySelector("input[name=price]");
  const submitbody = JSON.stringify({
    name: fname.value,
    description: description.value,
    brand: brand.value,
    imageUrl: imageUrl.value,
    price: price.value,
  });
  console.log(submitbody);
  await fetch(BASE_URL, {
    headers,
    method: "POST",
    body: submitbody,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  event.target.reset();
  window.location.replace("/");
};

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = putdata;
};
