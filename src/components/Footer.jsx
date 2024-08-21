
function Footer() {
  const currentYear = new Date().getFullYear();

  return( 
  <section className="footer">
    <div className="cert--container">
      <img src="/public/images/Advanced-QB-Online.png" alt="" />
      <img src="/public/images/Gold Tier Badge.png" alt="" />
      <img src="/public/images/QB-Payroll.png" alt="" />
    </div>
    <p>&copy; {currentYear} Keyes and Associates. All rights reserved.</p>
        <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290" target="_blank">Facebook</a>
            <a href="https://www.linkedin.com/in/keyes-and-associates-4b4738322?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7d3B0Oa%2FTdeJhfNdkH2X%2Bw%3D%3D" target="_blank">Linkedin</a>
  </div>
  {/* <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p> */}
  </section>
  )
}
export default Footer;
