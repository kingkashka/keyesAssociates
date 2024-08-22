
function Footer() {
  const currentYear = new Date().getFullYear();

  return( 
  <section className="footer">
    <div className="cert--container">
      <img src="/public/images/Advanced-QB-Online.png" alt="Certified Advanced QuickBooks" />
      <img src="/public/images/Gold Tier Badge.png" alt="ProAdvisor Gold" />
      <img src="/public/images/QB-Payroll.png" alt="Certified QuickBooks Payroll" />
    </div>
    <p>&copy; {currentYear} Keyes and Associates. All rights reserved.</p>
  {/* <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p> */}
  </section>
  )
}
export default Footer;
