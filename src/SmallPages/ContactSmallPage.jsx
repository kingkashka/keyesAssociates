import React, { useState } from 'react';

function ContactSmallPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="contactPage">  
            <div>
                <h1>Connect With Us</h1>
                <p>We would love to respond to your queries and help you succeed. Feel free to get in touch with us.</p>    
            </div> 
            <div className="contactBox">
                <div className="contactBox--Left">
                    <h3>Send your request</h3>
                    <form onSubmit={handleSubmit}>
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
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contactBox--Right">
                    <h3>Reach Us</h3>
                    {/* Add contact information or links here */}
                </div>
            </div>
        </div>
    );
}

export default ContactSmallPage;
