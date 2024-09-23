import {React, useRef,useEffect} from "react";

function LogoContainer({ isMobile }) {
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
    <section className="hidden logo--container col-sm- h-auto w-auto" ref={(el) => (hiddenSectionsRef.current[0] = el)}>
      <div className="logo-background col-sm- w-auto">
        <img
          className="logo"
          src="/images/logo.svg"
          alt="Company Logo"
        />
        <div className="statement-overlay ">
          <p>
          At Keyes & Associates, we understand the importance of keeping your finances in order and minimizing your stress on bookkeeping and accounting matters. We help our clients:
          </p>
          <ul>
            <li>Increase their profits by an average of $7500 per year</li>
            <li>Get back 60 hours of their time, per year, by streamlining their bookkeeping</li>
            <li>Have a peace of mind by mitigating financial risk(s) - accurate financial reporting for acquiring loans and filing taxes</li>
          </ul>
        </div>
      </div>
      <a className="referbtn w-auto" href="https://calendly.com/keyes-associates/bookkeeping-strategy-session">
        Free <br />
        Consultation
        <div className="underLinkBorder w-auto"></div>
      </a>
    </section>
  );
}

export default LogoContainer;
