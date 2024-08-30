function LogoContainer({ isMobile }) {
  // if (isMobile) {
  //   return (
  //     <section className="logo--container col-sm- h-auto w-auto">
  //       <img
  //         className="logo w-auto"
  //         src="/images/logo.svg"
  //         alt="Company Logo"
  //       />
  //       <p>
  //         At Keyes &amp; Associates, we understand the importance of keeping
  //         your finances in order and minimizing your stress on bookkeeping and
  //         accounting matters. That&#39;s why we&#39;re committed to providing
  //         top-tier bookkeeping services that cater to our clients&#39;
  //         individual needs. As a small business owner in the Charlotte NC area,
  //         we know how much time and effort goes into running a business.
  //         That&#39;s why we&#39;re here to offer you a better solution. By
  //         outsourcing your bookkeeping needs to us, you&#39;ll have more time to
  //         focus on growing your business and increasing your bottom line.
  //       </p>
  //       <a className="referbtn w-auto h-auto" href="#contact">
  //         Free consultation
  //       </a>
  //     </section>
  //   );
  // }
  return (
    <section className="logo--container col-sm- h-auto w-auto">
      <div className="logo-background col-sm-">
        <img
          className="logo"
          src="/images/logo.svg"
          alt="Company Logo"
        />
        <div className="statement-overlay ">
          <p>
            At Keyes &amp; Associates, we understand the importance of keeping
            your finances in order and minimizing your stress on bookkeeping and
            accounting matters. That&#39;s why we&#39;re committed to providing
            top-tier bookkeeping services that cater to our clients&#39;
            individual needs. As a small business owner in the Charlotte NC
            area, we know how much time and effort goes into running a business.
            That&#39;s why we&#39;re here to offer you a better solution. By
            outsourcing your bookkeeping needs to us, you&#39;ll have more time
            to focus on growing your business and increasing your bottom line.
          </p>
        </div>
      </div>
      <a className="referbtn w-auto" href="#contact">
        Free <br />
        consultation
        <div className="underLinkBorder w-auto"></div>
      </a>
    </section>
  );
}

export default LogoContainer;
