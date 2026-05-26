import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import Reservation from "./pages/Reservation"

function App() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.id === item.id
      )

      if (existingItem) {

        return prevItems.map((cartItem) =>

          cartItem.id === item.id

            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
              }

            : cartItem

        )

      }

      return [
        ...prevItems,
        {
          ...item,
          quantity: 1
        }
      ]

    })

  }

  const decreaseQuantity = (id) => {

    setCartItems((prevItems) =>

      prevItems
        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1
              }

            : item

        )

        .filter((item) => item.quantity > 0)

    )

  }

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/reservation"
          element={<Reservation />}
        />

        <Route
          path="/menu"
          element={
            <Menu addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App