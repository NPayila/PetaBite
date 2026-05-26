import { useState } from "react"

import "../styles/menu.css"

import FoodCard from "../components/FoodCard"

import foodItems from "../data/foodData"

function Menu({ addToCart }) {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = foodItems.filter((item) => {

  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory

  const matchesSearch =
    item.title
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
            title={item.title}
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