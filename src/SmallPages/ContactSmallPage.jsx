import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactSmallPage() {
  const hiddenSectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenSectionsRef.current.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenSectionsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const [state, handleSubmit] = useForm("mqazjzop");
  if (state.succeeded) {
    return <p>Thank you for your submission <br /> We will be in contact shortly</p>;
  }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <section id="contact" className="contactPage col-sm- h-auto w-auto" ref={(el) => (hiddenSectionsRef.current[5] = el)}>
      <div className="contactBox h-auto w-auto">
        <div className="contactPage--header w-auto">
          <h1>Connect With Us</h1>
          <p>
            We would love to respond to your queries and help you succeed. <br /> Feel
            free to get in touch with us.
          </p>
          <a className="referbtn2 w-auto" href="https://calendly.com/keyes-associates/bookkeeping-strategy-session">
        Free <br />
        Consultation
        <div className="underLinkBorder w-auto"></div>
      </a>
        </div>
        <div className="contactContent w-auto h-auto justify-content-center">
  <form onSubmit={handleSubmit} className="contact">
    <div className="topBox w-auto h-auto">
      <div className="leftColumn w-auto h-auto">
        <label className="label" htmlFor="fullName">Full Name</label>
        <input
          className="w-100"
          type="text"
          name="fullName"
          // value={formData.fullName}
          // onChange={handleChange}
        />
        <ValidationError
          prefix="fullName"
          field="fullName"
          errors={state.errors}
        />
        <label className="label" htmlFor="companyName">Company Name</label>
        <input
          className="w-100"
          type="text"
          name="companyName"
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
        <label className="label" htmlFor="phoneNumber">Phone Number</label>
        <input
          className="w-100"
          type="number"
          name="phoneNumber"
          
        />
        <ValidationError
          prefix="phoneNumber"
          field="phoneNumber"
          errors={state.errors}
        />
        <label className="label" htmlFor="businessType">Type of Business</label>
        <input
          className="w-100"
          type="text"
          name="businessType"
        
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
        <label className="label" htmlFor="email">Email</label>
        <br />
        <input
          className="w-100"
          id="email"
          type="email"
          name="email"
          
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <br />
        <label className="label" htmlFor="message">Message</label>
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
