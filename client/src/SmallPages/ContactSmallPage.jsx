import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
// import { SMTPClient } from "smtp-client";

function ContactSmallPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

    function submitEmail(){
        Email.send({
            Host : "smtp.keyesandassoc@outlook.com",
            Username : "bubbzthegreat@gmail.com",
            Password : "cumulus6392",
            To : 'keyesandassoc@outlook.com',
            From : "you@isp.com",
            Subject : "Demo of smptjs",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="contactPage">
      <div className="contactBox">
      <div className="contactPage--header">
        <h1>Connect With Us</h1>
        <p>
          We would love to respond to your queries and help you succeed. Feel
          free to get in touch with us.
        </p>
        <h3>Reach Out To Us</h3>
        <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290"><FaSquareFacebook /></a>
        <a className="email" href="">keyesandassoc@outlook.com</a>
        <h3>Send your request</h3>
      </div>
        <div className="contactContent">
        <form className="contactForm" >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Number"
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <button type="submit" onClick={submitEmail}>Send</button>
        </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSmallPage;
