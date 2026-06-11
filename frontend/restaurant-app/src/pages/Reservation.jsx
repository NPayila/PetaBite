import { useState } from "react";
import "../styles/reservation.css";
import tableData from "../data/tableData";
import { createReservation }
from "../services/reservationService";

function Reservation() {
  

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [table, setTable] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const handleReservation = async () => {

  if (
    !selectedDate ||
    !selectedTime ||
    !guests ||
    !table
  ) {

    alert(
      "Please complete all selections."
    );

    return;
  }

  try {

    await createReservation({

      name: "Nexar",

      date: selectedDate,

      time: selectedTime,

      table: table,

      guests: guests
      

    });

    setConfirmed(true);

  }

  catch (error) {

    console.error(error);

    alert(
      "Failed to create reservation."
    );

  }

};

  

  return (
    <div className="reservation-page">

      <div className="reservation-container">

        <h1>Reserve Your Table</h1>

        <p>
          Select your dining experience.
        </p>

        <div className="section">

          <h3>Select Date</h3>

          <div className="options">

            {["10 Jun", "11 Jun", "12 Jun"].map(date => (

              <button
                key={date}
                className={
                  selectedDate === date
                    ? "selected"
                    : ""
                }
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>

            ))}

          </div>

        </div>

        <div className="section">

          <h3>Select Time</h3>

          <div className="options">

            {["6 PM", "7 PM", "8 PM", "9 PM"].map(time => (

              <button
                key={time}
                className={
                  selectedTime === time
                    ? "selected"
                    : ""
                }
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>

            ))}

          </div>

        </div>

        <div className="section">

          <h3>Guests</h3>

          <div className="options">

            {[1,2,3,4,5,6].map(count => (

              <button
                key={count}
                className={
                  guests === count
                    ? "selected"
                    : ""
                }
                onClick={() => setGuests(count)}
              >
                {count}
              </button>

            ))}

          </div>

        </div>

        <div className="section">

          <h3>Select Table</h3>

          <div className="table-grid">

            {tableData.map(tableData => (

              <button
                key={tableData.id}
                disabled={!tableData.available}
                className={
                  table === tableData.id
                    ? "table selected"
                    : "table"
                }
                onClick={() =>
                  setTable(tableData.id)
                }
              >
                {tableData.id}
              </button>

            ))}

          </div>

        </div>

        <div className="summary">

          <h3>Reservation Summary</h3>

          <p>Date: {selectedDate}</p>

          <p>Time: {selectedTime}</p>

          <p>Guests: {guests}</p>

          <p>Table: {table}</p>

        </div>
        <button
        className="confirm-btn"
        onClick={handleReservation}
        >Confirm Reservation</button>


        {
  confirmed && (

    <div className="confirmation-card">

      <h2>
        🎉 Reservation Confirmed
      </h2>

      <p>
        Date: {selectedDate}
      </p>

      <p>
        Time: {selectedTime}
      </p>

      <p>
        Guests: {guests}
      </p>

      <p>
        Table: {table}
      </p>

      <p>
        Thank you for choosing PetaBite.
      </p>

    </div>

  )
}
          
        

      </div>

    </div>
  );
}

export default Reservation;