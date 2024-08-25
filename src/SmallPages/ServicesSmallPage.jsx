function ServicesSmallPage() {
  return (
    <>
      <section id="services" className="servicesSmallPage w-auto col h-auto">
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
            <div className="servicesCards">
                <div className="servicesCards--Header">
                <h2>
                One-time Services  
                </h2>
                </div>
                <div className="servicesCards--Body">
                <li>Clean up financial records</li>
                <li>Reconstruct books</li>
                <li>Catch-up Work</li>
                <li>Rescue Work</li>
                <li>Additional Bank, Credit Card or Loan accounts</li>
                <li>Additional Transactions</li>
                <li>Manual Data Entry</li>
                <li>Straightforward flat fee</li>
                </div>
            </div>
            <div className="servicesCards">
            <div className="servicesCards--Header">
                <h2>
                Monthly Services  
                </h2>
                </div>
                <div className="servicesCards--Body">
                <li>Capturing and properly coding all bank and credit card transactions</li>
                <li>Bank and credit card reconciliation</li>
                <h3>Accounts Receivable</h3>
                <li>Ensure you get paid</li>
                <li>Track and report outstanding balances</li>
                <li>Send reminder emails</li>
                <h3>Accounts Payable</h3>
                <li>Ensure all your business bills are paid on time</li>
                <li>Sales tax accounting and filing</li>
                <li>Financial Analysis and Reporting</li>
                <li>Management Reporting</li>
                <li>1099 filings</li>
                </div>
            </div>

        </div>

        </div>
      </section>
    </>
  );
}
export default ServicesSmallPage;
