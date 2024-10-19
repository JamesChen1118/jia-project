import "./index.css";


const ShoppingCart = () => {
  return (
    <>
      <div class="checkoutLayout">

        <div class="returnCart">
          <a href="/">keep shopping</a>
          <h1>List Product in Cart</h1>
          <div class="list">

            <div class="item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
                <div class="info">
                  <div class="name">PRODUCT 1</div>
                  <div class="price">$22/1 product</div>
                </div>
                <div class="quantity">5</div>
                <div class="returnPrice">$433.3</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
