import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCirclePlus,
  faCircleMinus,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState();
  const [cartdata, setCartData] = useState([
    {
      id: 1,
      distributorName: "Distributor Name order - 1",
      mainImage: "https://placehold.co/100x100",
      productName: "Product Name",
      mrp: 3500.0,
      price: 950,
      originalPrice: 2100,
      quantity: 1,
    },
    {
      id: 2,
      distributorName: "Distributor Name order - 2",
      mainImage: "https://placehold.co/100x100",
      productName: "Product Name",
      mrp: 3500.0,
      price: 991.5,
      originalPrice: 2100,
      quantity: 1,
    },
    {
      id: 3,
      distributorName: "Distributor Name order - 3",
      mainImage: "https://placehold.co/100x100",
      productName: "Product Name",
      mrp: 3500.0,
      price: 800,
      originalPrice: 2100,
      quantity: 1,
    },
  ]);
  useEffect(() => {
    handleTotal();
  }, [cartdata]);
  const handleTotal = () => {
    let total = 0;
    for (let i = 0; i < cartdata.length; i++) {
      total += cartdata[i].price * cartdata[i].quantity;
    }
    setTotalAmount(total);
  };
  const QuantityMinus = (id) => {
    let x = cartdata;
    for (let i = 0; i < x.length; i++) {
      if (x[i].id === id) {
        if (Number(x[i].quantity) > 1) {
          x[i].quantity = Number(x[i].quantity) - 1;
        }
      }
    }
    setCartData([...x]);
  };

  const QuantityPlus = (id) => {
    let x = cartdata;
    for (let i = 0; i < x.length; i++) {
      if (x[i].id === id) {
        x[i].quantity = Number(x[i].quantity) + 1;
      }
    }
    setCartData([...x]);
  };

  const RemoveItem = (id) => {
    if (
      window.confirm("Are you sure you want to remove item from cart") == true
    ) {
      let x = cartdata.filter((el) => {
        return el.id != id;
      });
      setCartData([...x]);
    }
  };
  return (
    <div>
      <div style={{ textAlign: "left", width: "45%", margin: "auto" }}>
        <h2>
          <FontAwesomeIcon
            style={{ color: "teal", background: "white" }}
            icon={faCartShopping}
          />
          <sup style={{ background: "white" }}></sup> Cart
        </h2>
        <p style={{ color: "#936bca" }}>{cartdata.length} items</p>
        <FontAwesomeIcon
          style={{ color: "grey", background: "white" }}
          icon={faLocationDot}
        />{" "}
        Deliver to Abz Traders Bengalore, India
      </div>
      <div className="cart">
        <div className={"left"}>
          <div className={"list"}>
            {cartdata.map((el) => {
              return (
                <>
                  <div key={el.id} className={"child"}>
                    <div className={"flx"}>
                      <div className={"name"}>{el.distributorName}</div>
                    </div>

                    <div
                      style={{
                        marginTop: "7px",
                        marginBottom: "20px",
                      }}
                      className={"flx"}
                    >
                      <img src={el.mainImage} alt="" />
                      <div>
                        <h4>{el.productName}</h4>
                        <div className={"mrp"}>
                          <span style={{ textDecoration: "line-through" }} n>
                            {el.originalPrice}
                          </span>{" "}
                          <span
                            style={{
                              color: "black",
                              fontSize: "13px",
                              fontWeight: "bold",
                            }}
                          >
                            ₹ {el.price}
                          </span>
                        </div>
                        <p style={{ color: "grey" }}>MRP - ₹ {el.mrp}</p>
                      </div>
                      <div></div>
                    </div>

                    <div className={"flx"}>
                      <div
                        style={{
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <FontAwesomeIcon
                          className={"circle"}
                          onClick={() => QuantityMinus(el.id)}
                          icon={faCircleMinus}
                        />{" "}
                        {el.quantity}{" "}
                        <FontAwesomeIcon
                          className={"circle"}
                          onClick={() => QuantityPlus(el.id)}
                          icon={faCirclePlus}
                        />
                      </div>
                      <div
                        onClick={() => RemoveItem(el.id)}
                        style={{ background: "white", cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          className={"trash"}
                          icon={faTrashCan}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            background: "white",
                            color: "rgb(151,151,151)",
                          }}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr style={{ border: "1px solid rbg(200,200,200)" }} />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="totalamount">
        Total amount : {totalAmount}
        <Link to="/order">Place Order</Link>
      </div>
    </div>
  );
};

export default Cart;
