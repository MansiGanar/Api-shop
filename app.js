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
        // content.innerHTML = "";
        console.log(data);
        data.map((product) => {
          console.log(product);
          console.log("hii");
          const newInnerHtml = `  <div class="container " id="card-deck">
          <div class="card-deck p-3">
            <div class="card p-5">
              <img src="${product.imageUrl}" class="card-img-top image" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Brand: ${product.brand}</h5>
                <h5 class="card-title">Name: ${product.name}</h5>
                <p class="card-text">Description:
                ${product.description}
                </p>
                
              </div>
              <a class="btn btn-success w-25" href="back.html?id=${product._id}"> Edit </a>
              <a class="btn btn-info w-25" href="detail.html?id=${product._id}"> See details </a>
            </div>
            
          </div>
        </div>`;
          content.innerHTML += newInnerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};
