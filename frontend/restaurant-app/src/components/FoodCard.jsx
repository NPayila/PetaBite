import "../styles/foodcard.css"

function FoodCard({
  id,
  title,
  price,
  type,
  addToCart
}) {

  return (

    <div className={`food-card ${type}`}>

      <div className="food-image"></div>

      {
        type === "mostSold" && (
          <span className="badge cyan-badge">
            MOST SOLD
          </span>
        )
      }

      {
        type === "chefSpecial" && (
          <span className="badge gold-badge">
            CHEF SPECIAL
          </span>
        )
      }

      <h2>{title}</h2>

      <p>₹{price}</p>

      <button
        onClick={() =>
          addToCart({
            id,
            title,
            price
          })
        }
      >
        Add To Cart
      </button>

    </div>

  )
}

export default FoodCard