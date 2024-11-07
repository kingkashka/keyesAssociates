import {React, useRef, useEffect} from "react";

function ServicesSmallPage() {
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
      <section id="services" className="servicesSmallPage w-auto col h-auto" ref={(el) => (hiddenSectionsRef.current[2] = el)}>
        <div>
        <div className="servicesHeader w-auto col">
        <h1>Our Bookkeeping Services</h1>
        <p>
          QuickBooks Online is our accounting platform of choice as it is the
          clear-cut industry leader and is robust enough to handle 100% of the
          accounting needs of virtually all small businesses. It allows for
          integration with a multitude of apps (e.g., time tracking, expense
          reporting, online bill pay, etc.) that provide for a more efficient
          accounting system, which increases accuracy and saves a tremendous
          amount of time and money.
        </p>
        </div>
        <div className="servicesCard--Container col-sm- h-auto w-auto">
            <div className="servicesCards h-auto">
                <div className="servicesCards--Header w-auto">
                <h2>
                Basic  
                </h2>
                </div>
                <div className="servicesCards--Body w-auto">
                <h4>Categorize your transactions for your P&L and Schedule C</h4>
                <p>Reconcile your accounts</p>
                <h4></h4>     
                </div>
                <div className="servicesCards--Footer w-auto">
                <h2>$300/month</h2>
                </div>
            </div>
            <div className="servicesCards h-auto">
            <div className="servicesCards--Header w-auto">
                <h2>
                Preferred 
                </h2> 
                </div>
                <div className="servicesCards--Body w-auto">
                  <h4>Categorize your transactions for your P&L and Schedule C</h4>
                  <p>Reconcile your accounts</p> 
                  <h4>Manage your financial Statements:</h4>
                  <p>Profit & Loss, Balance Sheet, Accounts Payable, Accounts Recievable</p>
                  <h4>Monthly business consultation based on your business needs to enable growth and optimazation.</h4>
                </div>
                <div className="servicesCards--Footer w-auto">
                <h2>$600/month</h2>
                </div>
            </div>
            <div className="servicesCards h-auto">
            <div className="servicesCards--Header w-auto">
                <h2>
                Premium 
                </h2>
                </div>
                <div className="servicesCards--Body w-auto ">
                <h4>Categorize your transactions for your P&L and Schedule C</h4>
                  <p>Reconcile your accounts</p> 
                  <h4>Manage your financial Statements:</h4>
                  <p>Profit & Loss, Balance Sheet, Accounts Payable, Accounts Recievable</p>
                  <h4>Monthly business consultation based on your business needs to enable growth and optimazation.</h4>
                  <p>Full-service A/P & A/R management, We will create your bills & invoices and track payments.</p>
                </div>
                <div className="servicesCards--Footer w-auto">
                <h2>$1200/month</h2>
                </div>
            </div>


        </div>

        </div>
      </section>
    </>
  );
}
export default ServicesSmallPage;
