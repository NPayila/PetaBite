import "../styles/cart.css"

function Cart({
  cartItems,
  addToCart,
  decreaseQuantity
}) {

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + (item.price * item.quantity),

    0

  )

  const totalItems = cartItems.reduce(

    (total, item) =>

      total + item.quantity,

    0

  )

  return (

    <div className="cart-page">

      <h1>Your Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {
            cartItems.length === 0 ? (

              <p>Your cart is empty.</p>

            ) : (

              cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="item-info">

                    <h2>{item.title}</h2>

                    <p>
                      ₹{item.price}
                    </p>

                  </div>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              ))

            )
          }

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <p>Total Items: {totalItems}</p>

          <p>Total Price: ₹{totalPrice}</p>

          <button>
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>

  )
}

export default Cart