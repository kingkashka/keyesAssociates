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
          <h2>Basic</h2>
        </div>
        <div className="pricingCardImages--Container">
          <h3>Categorize your transactions for youe P&L and Schedule C</h3>
          <h3>Pricing starts at <n />$300/month</h3>
        </div>
      </div>

      <div className="PricingPageCards">
        <div className="pricingCard--Header">
          <h2>Preferred</h2>
        </div>
        <div className="pricingCardImages--Container">
        <h3></h3>
        </div>
      </div>

      <div className="PricingPageCards">
        <div className="pricingCard--Header">
          <h2>Premium</h2>
          <p>Categorize your transactions for youe P&L and Schedule C</p>
          <p>Reconcile your accounts</p>
          <p>Manage your Financial Statements: Profit & Loss, Balance Sheet, Accounts Payable</p>
          <h3>$600/month</h3>
        </div>
        <div className="pricingCardImages--Container">
        <h3></h3>
        </div>
      </div>
      </div>
    </section>
  );
}
export default PricingSmallPage;
