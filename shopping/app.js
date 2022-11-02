const products = [
  {
    id: 1,
    title: "ibrahim",
    age: 3,
    skills: "Talk",
    legs: 1.5,
    price: 250,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ7g4PkwKioHHKQpnDD-ZW-jjlRgBrezNViocLmD6mg&s",
  },
  {
    id: 2,
    title: "yakoub",
    age: 6,
    skills: "Cries",
    legs: 8,
    price: 7.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hwqEckIJXicSZCnotzUP5jkJwIV7sSSaX3h_2ptJDw&s",
  },
  {
    id: 3,
    title: "loubna",
    age: 1,
    skills: "bland",
    legs: 2,
    price: 500,
    img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/kid-bedtime-pajamas-bed-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    id: 4,
    title: "masouda",
    age: 10,
    skills: "kol 3am yzid 3endha sbe3",
    legs: 8,
    price: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7n-Z7kopSdrXadkBfeUWVduI1DkquqTsqM9dOzgKsA&s",
  },
  {
    id: 5,
    title: "khardle",
    age: 0,
    skills: "walo",
    legs: 3,
    price: 120000000,
    img: "https://images.squarespace-cdn.com/content/v1/5dd409b4699a1b3c39b79e9d/1594587737493-O02S51PMMPJ092XGYYXK/Infants_3.jpg?format=2500w",
  },
  {
    id: 6,
    title: "chafik",
    age: 40,
    skills: "pre-workout",
    legs: 7,
    price: 0,
    img: "data:image/jpeg;base64,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",
  },
];

const container = document.querySelector(".container");
const shop = document.querySelector(".shop");
const counter = document.querySelector(".count");
const kid = document.querySelector(".kid");

let newProducts = [];

products.map((product) => {
  container.innerHTML += `
          <div class="card">
          <img src="${product.img}"/>
          <h1> title: ${product.title}</h1>
          <p>skills: ${product.skills}</p>
          <p>age: ${product.age}</p>
          <p>legs: ${product.legs}</p>
          <p>price: ${product.price}</p>
          <button class="btn" onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
      `;
});

function addToCart(id) {
  products.map((product) => {
    if (product.id === id) {
      newProducts.push({
        id: product.id,
        title: product.title,
        skills: product.skills,
        legs: product.legs,
        age: product.age,
        price: product.price,
        img: product.img,
      });
    }
  });
  addedToCart();
  counter.textContent = newProducts.length;
  console.log(newProducts);
}

function addedToCart() {
  shop.innerHTML = "";
  newProducts.map((product) => {
    shop.innerHTML += `
          <div class="card-item">
          <img src="${product.img}"/>
          <h1> title: ${product.title}</h1>
          <p>skills: ${product.skills}</p>
          <p>age: ${product.age}</p>
          <p>legs: ${product.legs}</p>
          <p>price: ${product.price}</p>
          <button class="btn" onclick="DeleteFromCart(${product.id})">Delete</button>
      </div>
          `;
  });
}

function DeleteFromCart(id) {
  const find = newProducts.find((product) => product.id === id);
  const index = newProducts.indexOf(find);
  newProducts.splice(index, 1);
  addedToCart();
  counter.textContent = newProducts.length;
  console.log(index);
}

kid.addEventListener("click", () => {
  shop.classList.toggle("active");
});
