import "./OrderPlaced.css";
export const OrderPlaced = () => {
  return (
    <div className="order">
      <div style={{ width: "6%", height: "6%", margin: "auto" }}>
        <img
          width={"100%"}
          height={"100%"}
          src="https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484__340.png"
          alt=""
        />
      </div>
      <div class="dummy-positioning d-flex">
        <div class="success-icon">
          <div class="success-icon__tip"></div>
          <div class="success-icon__long"></div>
        </div>
      </div>
      <h1>Order Placed</h1>
      <p>Order Number : {Math.floor(Math.random() * 1000000000)}</p>
    </div>
  );
};
