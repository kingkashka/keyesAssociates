import React, { useState } from "react";

function ContactSmallPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessType: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="contactPage w-auto col">
      <div className="contactBox h-auto h-width">
        <div className="contactPage--header w-auto">
          <h1>Connect With Us</h1>
          <p>
            We would love to respond to your queries and help you succeed. Feel
            free to get in touch with us.
          </p>
          <h3>Reach Out To Us</h3>
        </div>
        <div className="contactContent w-auto h-auto">
          {/* Added Netlify tag for form submission */}
          <form className="contact" netlify>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="businessType"
              placeholder="Type of Business"
              value={formData.businessType}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Briefly describe how we can help you. "
              value={formData.message}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSmallPage;
