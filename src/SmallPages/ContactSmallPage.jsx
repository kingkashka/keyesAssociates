function ContactSmallPage(){
    const form = document.getElementById("form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
    })
    // const clientsInfo = {
    //     fullName: "",
    //     phoneNumber: "",
    //     email: "",
    //     subject: ""
    // }
    return(
        
        <div className="contactPage">  
            <div>
            <h1>Connect With Us</h1>
            <p>We would love to respond to your queries and help you succeed. Feel free to get in touch with us.</p>    
            </div> 
            <div className="contactBox">
                <div className="contactBox--Left">
                    <h3>Send your requesy</h3>
                    <form action="submit">
                        <input type="text" placeholder="Full Name" value={fullName}/>
                        <input type="number"  placeholder="Number" value={phoneNumber}/>
                        <input type="email" placeholder="Email" value={email}/>
                        <input type="text" placeholder="Subject" value={subject}/>
                        <textarea name="message" id=""></textarea>
                    </form>

                </div>
                <div className="contactBox--Right">
                    <h3>Reach Us</h3>

                </div>

            </div>
        </div>
        
    )
}
export default ContactSmallPage;