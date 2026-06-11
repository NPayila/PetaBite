import { useState } from "react";
import "../styles/checkout.css";
import { createOrder }
from "../services/orderService";

function Checkout() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [orderType, setOrderType] =
    useState("Dine In");

  const [orderPlaced, setOrderPlaced] =
    useState(false);

 const handleOrder = async () => {

    if (
        !name.trim() ||
        !phone.trim() ||
        !email.trim()
    ) {

        alert(
            "Please fill all details."
        );

        return;
    }

    try {

        await createOrder({

            customerName: name,
            phone: phone,
            email: email,
            orderType: orderType

        });

        setOrderPlaced(true);

    } catch (error) {

        alert(
            "Failed to place order."
        );

        console.error(error);

    }

};

  return (

    <div className="checkout-page">

      <div className="checkout-container">

        {
          !orderPlaced ? (

            <>

              <h1>
                Checkout
              </h1>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <select
                value={orderType}
                onChange={(e) =>
                  setOrderType(
                    e.target.value
                  )
                }
              >

                <option>
                  Dine In
                </option>

                <option>
                  Takeaway
                </option>

              </select>

              <button
                onClick={handleOrder}
              >
                Place Order
              </button>

            </>

          ) : (

            <div className="confirmation-box">

              <h1>
                🎉 Order Confirmed
              </h1>

              <p>
                Thank you for
                choosing PetaBite.
              </p>

              <p>
                Customer:
                {name}
              </p>

              <p>
                Order Type:
                {orderType}
              </p>

              <p>
                Estimated
                Preparation Time:
                20 Minutes
              </p>

            </div>

          )
        }

      </div>

    </div>

  );

}

export default Checkout;