import { useState, useEffect } from "react"

import "../styles/menu.css"

import FoodCard from "../components/FoodCard"

import { getMenu }
from "../services/menuService"

function Menu({ addToCart }) {
  const [foodItems, setFoodItems] =
  useState([])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {

  const fetchMenu =
    async () => {

      try {

        const data =
          await getMenu()

        setFoodItems(data)

      }

      catch(error) {

        console.error(
          "Error loading menu:",
          error
        )

      }

    }

  fetchMenu()

}, [])

  const filteredItems = foodItems.filter((item) => {

  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory

  const matchesSearch =
    item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  return matchesCategory && matchesSearch

})

  return (

    <>

      <div className="filter-buttons">

        <button
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Burger")}
        >
          Burger
        </button>

        <button
          onClick={() => setSelectedCategory("Ramen")}
        >
          Ramen
        </button>

        <button
          onClick={() => setSelectedCategory("Steak")}
        >
          Steak
        </button>

        <button
          onClick={() => setSelectedCategory("Pizza")}
        >
          Pizza
        </button>

      </div>
      <div className="search-box">

  <input
    type="text"
    placeholder="Search delicious food..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
  />

</div>

      <div className="menu-page">

        {
          filteredItems.map((item) => (

            <FoodCard
            key={item.id}
            id={item.id}
            title={item.name}
           price={item.price}
            type={item.type}
            addToCart={addToCart}
          />

          ))
        }

      </div>

    </>

  )
}

export default Menu