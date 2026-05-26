import "../styles/auth.css"


function Register() {
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Account</h1>

        <p>Join the future of luxury dining.</p>

        <input type="text" placeholder="Enter Username" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>
          Register
        </button>

      </div>

    </div>
  )
}

export default Register