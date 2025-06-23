import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [role, setRole] = useState("Consumer");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Enter your Mobile Number</h2>
      <p>Contact your administrator for PIN</p>
      <h3>Are you a ?</h3>

      <div className="role-selector">
        <label>
          <input
            type="radio"
            name="role"
            value="Gas Provider"
            checked={role === "Gas Provider"}
            onChange={() => setRole("Gas Provider")}
          />
          Gas Provider
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="Consumer"
            checked={role === "Consumer"}
            onChange={() => setRole("Consumer")}
          />
          Consumer
        </label>
      </div>

      <div className="mobile-input-group">
        <select className="flag-select">
          <option value="+1">🇺🇸</option>
          <option value="+91">🇮🇳</option>
          <option value="+44">🇬🇧</option>
        </select>
        <input
          type="tel"
          placeholder="Mobile Number"
          className="mobile-number"
        />
      </div>

      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <div className="login-btn">
        <button className="primary-btn">Sign In</button>
        <button className="secondary-btn" onClick={() => navigate("/register")}>
          New Registration
        </button>
        {/* PWA Install Button */}
        <button className="install-btn" style={{ display: "none", position: "fixed", bottom: "20px", right: "20px", padding: "12px", background: "#2b7bff", color: "white", border: "none", borderRadius: "6px" }}>
          📱 Install Our App
        </button>

      </div>
    </div>
  );
}
