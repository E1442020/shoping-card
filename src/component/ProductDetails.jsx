import img1 from "./image/pexels-antoni-shkraba-6187527_11zon.jpg";
import img2 from "./image/pexels-cottonbro-studio-7449894_11zon.jpg";
import img3 from "./image/pexels-ihsan-adityawarman-1445696_11zon.jpg";
import img4 from "./image/pexels-javon-swaby-2783873_11zon.jpg";
import img5 from "./image/pexels-lorena-martínez-2351858.jpg";
import img6 from "./image/pexels-math-90946_11zon.jpg";
import img7 from "./image/pexels-monicore-134064_11zon.jpg";
import img8 from "./image/pexels-pavel-danilyuk-7674568_11zon.jpg";
import img9 from "./image/pexels-ron-lach-10574059_11zon.jpg";
import img10 from "./image/pexels-sarah-chai-7262688_11zon.jpg";
import img11 from "./image/pexels-vlada-karpovich-6634651_11zon.jpg";
import img12 from "./image/pexels-web-donut-19090_11zon.jpg";

export const ProductDetails = [
  { id: 1, quantity: 1, img: img1, name: "Skin Care", price: "100" },
  { id: 2, quantity: 1, img: img2, name: "Skin Care", price: "150" },
  { id: 3, quantity: 1, img: img3, name: "Shoes", price: "188" },
  { id: 4, quantity: 1, img: img4, name: "Watch", price: "75" },
  { id: 5, quantity: 1, img: img5, name: "Shoes", price: "140" },
  { id: 6, quantity: 1, img: img6, name: "Shoes", price: "190" },
  { id: 7, quantity: 1, img: img7, name: "Camera", price: "155" },
  { id: 8, quantity: 1, img: img8, name: "Dish", price: "100" },
  { id: 9, quantity: 1, img: img9, name: "Skin Care", price: "180" },
  { id: 10, quantity: 1, img: img10, name: "Food", price: "70" },
  { id: 11, quantity: 1, img: img11, name: "Skin Care", price: "550" },
  { id: 12, quantity: 1, img: img12, name: "Shoes", price: "50" },
];
localStorage.setItem("products", JSON.stringify(ProductDetails));
