import { PiEyesFill } from "react-icons/pi";
import { GiBullseye } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import {React, useRef, useEffect} from "react";
function AboutUsSmallPage() {
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
  return (
    <>
    
    <section id="aboutUs" className="aboutUsSmallPage col-sm- h-auto w-auto" ref={(el) => (hiddenSectionsRef.current[3] = el)}>
      <div className="aboutUs--Header w-auto h-auto col-sm-">
        <h1>About Us</h1>
        <p>
          We strive to be the go-to partner for small business owners and
          entrepreneurs, taking the burden of financial tasks off their
          shoulders and helping them focus on growing their business. Our goal
          is to build long-term relationships with our clients by listening to
          their needs, understanding their goals, and delivering personalized
          solutions that exceed their expectations. We are committed to staying
          ahead of the curve in technology and innovation, leveraging
          cutting-edge tools to streamline our processes and deliver exceptional
          value to our clients.
        </p>
      </div>
      <div className="aboutUsCards--Container w-auto h-auto col-sm-">
        <div className="aboutUsCards w-auto h-auto col-sm-">
          <div className="aboutUsCards--Header col-sm-">
            <h2>Our Vision</h2>
            <PiEyesFill className="aboutIcons" />
          </div>
          <div className="aboutUsCard--Body col-sm-">
            <p>
              Our vision is to empower businesses of all sizes to succeed
              financially by providing expert bookkeeping services that are
              accurate, timely, and cost-effective. Ultimately, our vision is to
              make bookkeeping services more accessible, approachable, and
              beneficial to businesses everywhere, driving growth, and
              prosperity for all.
            </p>
          </div>
        </div>
        <div className="aboutUsCards w-auto h-auto col-sm-">
          <div className="aboutUsCards--Header col-sm-">
            <h2>Our Purpose</h2>
            <GiBullseye className="aboutIcons" />
            <div className="aboutUsCard--Body col-sm-">
              <p>
                Our purpose is to accurately maintain financial data and provide
                organized reports for business owners, ensuring compliance with
                legal requirements and aiding in informed decision-making.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutUsCards w-auto h-auto col-sm-">
          <div className="aboutUsCards--Header col-sm-">
            <h2>Our Mission</h2>
            <FaHandshake className="aboutIcons" />
          </div>
          <div className="aboutUsCard--Body col-sm-">
            <p>
              Our mission is to provide accurate and timely financial reports to
              help our clients make informed business decisions. We strive to
              deliver personalized service and clear communication to build
              lasting relationships with our clients. Our goal is to alleviate
              the stress of bookkeeping and keep our clients financial records
              organized, enabling them to focus on growing their businesses and
              achieving their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default AboutUsSmallPage;
