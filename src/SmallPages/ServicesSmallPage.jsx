import { React, useRef, useEffect } from "react";

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
      <section
        id="services"
        className="servicesSmallPage w-auto col h-auto"
        ref={(el) => (hiddenSectionsRef.current[2] = el)}
      >
        <div>
          <div className="servicesHeader w-auto col">
            <h1>Our Bookkeeping Services</h1>
            <p>
              QuickBooks Online is our accounting platform of choice as it is
              the clear-cut industry leader and is robust enough to handle 100%
              of the accounting needs of virtually all small businesses. It
              allows for integration with a multitude of apps (e.g., time
              tracking, expense reporting, online bill pay, etc.) that provide
              for a more efficient accounting system, which increases accuracy
              and saves a tremendous amount of time and money.
            </p>
          </div>
          <div className="servicesCard--Container col-sm- h-auto w-auto">
            <div className="servicesCards h-auto">
              <div className="servicesCards--Header w-auto">
                <h2>
                  Monthly Bookkeeping <n />
                  (Basic)
                </h2>
              </div>
              <div className="servicesCards--Body w-auto">
                <ul className="dash-list">
                  <li>Clients with gross revenue below $100K</li>
                  <li>Startups & Solopreneurs</li>
                  <li>Services performed QUARTERLY</li>
                  <li>1 entity</li>
                  <li>Up to 2 accounts</li>
                  <li>Up to 150 monthly transactions</li>
                  <ul className="dash-list-middle">
                    <li>Recorded</li>
                    <li>Classified</li>
                    <li>Reconciled</li>
                  </ul>
                  <li>Unlimited email support</li>
                </ul>
              </div>
              <div className="servicesCards--Footer w-auto">
                <h2>
                  As low as <br />
                  $150/month
                </h2>
              </div>
            </div>
            <div className="servicesCards h-auto">
              <div className="servicesCards--Header w-auto">
                <h2>
                  Monthly Bookkeeping <n />
                  (Preferred)
                </h2>
              </div>
              <div className="servicesCards--Body w-auto">
                 <ul className="dash-list">
                  <li>Clients with gross revenue over $100K</li>
                  <li>Services performed MONTHLY</li>
                  <li>1 entity</li>
                  <li>Up to 4 accounts</li>
                  <li>Up to 100 monthly transactions</li>
                  <ul className="dash-list-middle">
                    <li>Recorded</li>
                    <li>Classified</li>
                    <li>Reconciled</li>
                  </ul>
                  <li>Unlimited email support</li>
                  <li>1 consultation session</li>
                  <li>Financial statement preparation</li>
                </ul>
              </div>
              <div className="servicesCards--Footer w-auto">
                <h2>
                  As low as <br />
                  $300/month
                </h2>
              </div>
            </div>
            <div className="servicesCards h-auto">
              <div className="servicesCards--Header w-auto">
                <h2>
                  Monthly Bookkeeping <n />
                  (Premium)
                </h2>
              </div>
              <div className="servicesCards--Body w-auto ">
                 <ul className="dash-list">
                  <li>Clients with gross revenue below $1M</li>
                  
                  <li>Services performed MONTHLY</li>
                  <li>1 entity</li>
                  <li>Up to 8 accounts</li>
                  <li>Up to 150 monthly transactions</li>
                  <li>Up to 1000 monthly transactions</li>
                  <ul className="dash-list-middle">
                    <li>Recorded</li>
                    <li>Classified</li>
                    <li>Reconciled</li>
                  </ul>
                  <li>Unlimited email support</li>
                  <li>2 consultation sessions</li>
                  <li>Financial statement preparation00</li>
                </ul>
              </div>
              <div className="servicesCards--Footer w-auto">
                <h2>
                  As low as <br />
                  $600/month
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServicesSmallPage;
