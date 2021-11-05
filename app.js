window.onload = async () => {
  // getProducts((error, data) => {
  //   if (error) {
  //     console.log({ error });
  //   } else {
  //     console.log({ data });
  //   }
  // });
  await getProducts();
};

const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzYxMDc1MzAsImV4cCI6MTYzNzMxNzEzMH0.7hiJNrzQum36Zrgsy0IQ7tpHVseiTF-lGEt1K5pG_vY",
});

// const getProducts = (callback) => {
//   fetch(BASE_URL, { headers })
//     .then((res) => res.json())
//     .then((data) => callback(null, data))
//     .catch((error) => callback(error, null));
// };

const getProducts = async () => {
  try {
    await fetch(BASE_URL, { headers })
      .then((res) => res.json())
      .then((data) => {
        let content = document.getElementById("card-deck");
        content.innerHTML = "";
        console.log(data);
        data.map((product) => {
          console.log(product);
          console.log("hii");
          content.innerHTML += `  <div class="container " id="card-deck">
          <div class="card-deck">
            <div class="card "> 
              <img src="${product.imageUrl}" class="card-img-top image" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${product.brand}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>`;
        });
        content;
      });
  } catch (error) {
    console.log(error);
  }
};
