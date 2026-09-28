
import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="registration-page">
        <div className="success-box">
          <h1>🎉 Thank You, {name}!</h1>
          <p>You have been registered successfully.</p>
          <p>We look forward to seeing you at TechFest 2026!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="registration-header">
        <h1>Register for TechFest 🚀</h1>
        <p>Join the excitement. Be part of the innovation.</p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Participant Details</h2>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-msg">{errors.email}</p>}

        <label>Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter 10-digit mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error-msg">{errors.phone}</p>}

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default Registration;