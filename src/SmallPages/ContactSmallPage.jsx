import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactSmallPage() {
  const [state, handleSubmit] = useForm("mwpeynjd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   companyName: "",
  //   businessType: "",
  //   phoneNumber: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <section id="contact" className="contactPage col-sm- h-auto w-auto">
      <div className="contactBox h-auto w-auto">
        <div className="contactPage--header w-auto">
          <h1>Connect With Us</h1>
          <p>
            We would love to respond to your queries and help you succeed. Feel
            free to get in touch with us.
          </p>
        </div>
        <div className="contactContent w-auto h-auto justify-content-center">
  <form onSubmit={handleSubmit} className="contact">
    <div className="topBox w-auto h-auto">
      <div className="leftColumn w-auto h-auto">
        <label htmlFor="fullName">Full Name</label>
        <input
          className="w-100"
          type="text"
          name="fullName"
          placeholder="Full Name"
          // value={formData.fullName}
          // onChange={handleChange}
        />
        <ValidationError
          prefix="fullName"
          field="fullName"
          errors={state.errors}
        />
        <label htmlFor="companyName">Company Name</label>
        <input
          className="w-100"
          type="text"
          name="companyName"
          placeholder="Company Name"
          // value={formData.companyName}
          // onChange={handleChange}
        />
        <ValidationError
          prefix="companyName"
          field="companyName"
          errors={state.errors}
        />
      </div>

      <div className="rightColumn w-auto col-sm-">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          className="w-100"
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <ValidationError
          prefix="phoneNumber"
          field="phoneNumber"
          errors={state.errors}
        />
        <label htmlFor="businessType">Type of Business</label>
        <input
          className="w-100"
          type="text"
          name="businessType"
          placeholder="Type of Business"
          // value={formData.businessType}
          // onChange={handleChange}
        />
        <ValidationError
          prefix="businessType"
          field="businessType"
          errors={state.errors}
        />
      </div>
    </div>

    <div className="bottomColumn">
      <div className="col-sm-">
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="w-100"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          className="w-100"
          id="message"
          name="message"
          placeholder="Briefly describe how we can help you."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </div>
    </div>
  </form>
</div>

      </div>
    </section>
  );
}

export default ContactSmallPage;
