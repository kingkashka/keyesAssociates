import { React, useRef, useEffect } from "react";
import { MdAttachMoney } from "react-icons/md";
import PricingCards from "../cards/PricingCards";

function PricingSmallPage() {
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
    <section
      id="pricing"
      className="pricingSmallPage col-sm- h-auto w-auto"
      ref={(el) => (hiddenSectionsRef.current[3] = el)}
    >
      <div className="pricingHeader w-auto">
        <span>
          <MdAttachMoney className="moneySign" />{" "}
        </span>
        <span>
          <h1>Pricing</h1>
        </span>
        <span>
          <MdAttachMoney className="moneySign" />
        </span>
      </div>

      <div className="pricing--Container h-auto w-auto">
      <div className="PricingPageCards">
        <div className="pricingCard--Header">
          <h2></h2>
          <h3></h3>
        </div>
        <div className="pricingCardImages--Container">
          <img src="" alt="" className="cardImages" />
        </div>
      </div>
      </div>
    </section>
  );
}
export default PricingSmallPage;
