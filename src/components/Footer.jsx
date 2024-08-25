function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer w-auto h-auto">
      <div className="cert--container w-auto h-auto">
        <img src="/images/Advanced-QB-Online.png" alt="Advanced QB Online" />
        <img src="/images/Gold-Tier-Badge.png" alt="Gold Tier Badge" />
        <img src="/images/QB-Payroll.png" alt="QB Payroll" />
      </div>
      <p>&copy; {currentYear} Keyes and Associates. All rights reserved.</p>
      {/* <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p> */}
    </section>
  );
}
export default Footer;
