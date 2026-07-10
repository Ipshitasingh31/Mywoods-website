import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/cms");
    } catch (err) {
  console.log("ERROR:", err);
  console.log("STATUS:", err.response?.status);
  console.log("DATA:", err.response?.data);

  alert("Login Failed");
}
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: 350,
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,.2)",
          background: "#fff",
        }}
      >
        <h2>CMS Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: 10 }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: 10 }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
          }}
        >
          Login
        </button>
       <p style={{ textAlign: "center", marginTop: "20px" }}>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{
      color: "blue",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Register
  </span>
</p> 
      </form>
    </div>
  );
}

export default Login;