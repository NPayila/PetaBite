import "../styles/reservation.css";

function Reservation() {

  return (

    <div className="reservation-page">

      <div className="reservation-box">

        <h1>Book Your Table</h1>

        <p>
          Reserve your luxury dining experience.
        </p>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="date"
        />

        <input
          type="time"
        />

        <input
          type="number"
          placeholder="Number Of Guests"
        />

        <textarea
          placeholder="Special Requests"
        ></textarea>

        <button>
          Reserve Now
        </button>

      </div>

    </div>

  )
}

export default Reservation