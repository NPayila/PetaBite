import "../styles/auth.css"

function Login() {
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Welcome Back</h1>

        <p>Login to continue your experience.</p>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>
          Login
        </button>

      </div>

    </div>
  )
}

export default Login