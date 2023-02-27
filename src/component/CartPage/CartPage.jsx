import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Loader } from "@mantine/core";
import { Link } from "react-router-dom";
import "./CartPage.css";
import CartProduct from "./CartProduct";
export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [loading, setLoading] = useState(true);
  //get Product from localStorage

  const cartProductFromLocalStorage = () => {
    let info = localStorage.getItem("cartProducts");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };

  const removeProduct = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          let tempCartProduct = [...cartProducts];

          tempCartProduct.map((product, index) => {
            if (product.id === id) {
              tempCartProduct.splice(index, 1);
              getTotalPrice(tempCartProduct);
              setCartProducts(tempCartProduct);
              localStorage.setItem(
                "cartProducts",
                JSON.stringify(tempCartProduct)
              );
            }
          });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your product deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your product safe :)",
            "error"
          );
        }
      });
  };

  const getTotalPrice = (tempArr) => {
    let sum = 0;

    if (tempArr.length == 0) {
      sum = sum;
    }

    // } else {
    tempArr.map((product) => {
      sum += parseInt(product.price * product.quantity);
    });

    // console.log(sum);

    setTotalPrice(sum);
  };

  const updateLocal = (quantity, id) => {
    let tempCartProduct = [...cartProducts];
    tempCartProduct.map((product) => {
      if (product.id === id) {
        product.quantity = quantity;
        setCartProducts(tempCartProduct);
        localStorage.setItem("cartProducts", JSON.stringify(tempCartProduct));
      }
    });
  };

  useEffect(() => {
    const tempArr = cartProductFromLocalStorage();
    setCartProducts(tempArr);
    getTotalPrice(tempArr);
    if (tempArr) {
      setLoading(false);
    }
  }, []);
  // localStorage.clear()

  return (
    <>
      <div className="cart-page-container">
      {loading ?<div className="loading"><Loader color="cyan" /></div>:<>

        {cartProducts.length > 0 ? (
          <>

            {cartProducts.map((cartProduct) => {
              return (
                <CartProduct
                  name={cartProduct.name}
                  price={cartProduct.price}
                  quantity={cartProduct.quantity}
                  img={cartProduct.img}
                  key={cartProduct.id}
                  id={cartProduct.id}
                  arr={cartProducts}
                  getTotal={getTotalPrice}
                  remove={removeProduct}
                  updateQuantity={updateLocal}
                />
              );
            })}
          </>
        ) : (
          <h3 className="no-product">No Product Available...Add Some!!</h3>
        )}

        <div className="cart-page-footer">
          <h2>Total Price:${totalPrice}</h2>
          <button>
            <Link to="/">continue to shopping</Link>
          </button>
        </div></>}</div>
      
    </>
  );
}
