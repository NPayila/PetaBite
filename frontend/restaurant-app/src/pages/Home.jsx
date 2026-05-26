import "../styles/home.css"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Experience The Future Of Dining
        </h1>

        <p>
          Luxury flavors blended with futuristic aesthetics.
        </p>

        <div className="hero-buttons">

          <button
  className="primary-btn"
  onClick={() => navigate("/menu")}
>
  Explore Menu
</button>
        

          <button className="secondary-btn"
          onClick={() => navigate("/reservation")}>
            
            Book A Table
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="food-circle">

        </div>

      </div>

    </section>
  )
}

export default Home