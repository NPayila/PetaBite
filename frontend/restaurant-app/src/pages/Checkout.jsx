import "../styles/checkout.css";

function Checkout() {

  return (

    <div className="checkout-page">

      <div className="checkout-container">

        <h1>Checkout</h1>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <select>

          <option>
            Dine In
          </option>

          <option>
            Takeaway
          </option>

        </select>

        <button>
          Place Order
        </button>

      </div>

    </div>

  );

}

export default Checkout;