import HomePageCards from "../cards/HomePageCards";
import HomePageCardsData from "../data/HomePageCardsData";

export default function HomeSmallPage(props) {
  // const renderHomePageCards = HomePageCardsData.map((data) => (
  //   <HomePageCards
  //     image={data.image}
  //     title={data.title}
  //     subTitle={data.subTitle}
  //     bullet1={data.bullet1}
  //     bullet2={data.bullet2}
  //     bullet3={data.bullet3}
  //     bullet4={data.bullet4}
  //   />
  // ));
  return (
    <>
        {/* HOMEPAGE CONTAINER START  */}

        <section id="home" className="homePageContainer">          
            <div className="openingStatement">
              <h1>Why Choose Keyes & Associates</h1>
              <div className="statementContainer">
                <li>
                  <span className="firstStatement">
                    <span className="firstLetter">K</span>
                    eep the business organized: </span>
                  We keep financial records up to date and accessible; this will
                  save you time and money, and lead to better performance.
                  
                </li>
                <li>
                  <span className="firstStatement">
                    <span className="firstLetter">E</span>xpand your business: </span>
                  We closely monitor expenses and revenue and will create and
                  maintain a budget that aligns with your business’s goals and
                  objectives.
                  
                </li>
                <li>
                  <span className="firstStatement">
                    <span className="firstLetter">Y</span>our time is valuable: </span>
                  Focus on your business while we focus on your financial health
                  by identifying areas where cost savings and revenue can be
                  increased.
                  
                </li>
                <li>
                  <span className="firstStatement">
                    <span className="firstLetter">E</span>xperience is
                    experience: </span> We eliminate costly mistakes, oversights, and complicated
                  issues by taking a methodical approach to ensure accuracy at
                  every step.            
                </li>
                <li>
                  <span className="firstStatement">
                    <span className="firstLetter">S</span>ave on costs: </span>
                  By outsourcing your bookkeeping, you save money by not paying
                  full- time or part-time employees and only paying for what you
                  need – nothing more, nothing less.
                  
                </li>
              </div>
              <h1>Optimize your time, Expand your business</h1>
            </div>
          <div className="homePageCard--Container">
          <div className="HomePageCards">
        <div className="card--Header">
          <h2>BOOKKEEPING</h2>
          <h3>Want to clean up your books and establish a sound accounting system?</h3>
        </div>
        <div className="cardImages--Container">
          <img src="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cardImages" />
        </div>
        <div className="bullet--Container">
          <li>Bank transaction recording</li>
          <li>Bank reconciliations</li>
          <li>Invoices and payments</li>
          <li>Transaction reports – sales, accounts receivables, account payables</li>
        </div>
      </div>
      <div className="HomePageCards">
        <div className="card--Header">
          <h2>ACCOUNT RECEIVABLE</h2>
          <h3>Prompt and accurate invoicing</h3>
        </div>
        <div className="cardImages--Container">
          <img src="https://www.invoicetracker.com/wp-content/uploads/2018/07/AccountsReceivable.jpeg" alt="" className="cardImages" />
        </div>
        <div className="bullet--Container">
          <li>Late, partial, or no payment tracking</li>
          <li>Bank deposits</li>
        </div>
      </div>
      <div className="HomePageCards">
        <div className="card--Header">
          <h2>ACCOUNT PAYABLE</h2>
          <h3>Automate solution</h3>
        </div>
        <div className="cardImages--Container">
          <img src="https://www.accountsjunction.com/image/accounts-payable-management-procedures.jpg" alt="" className="cardImages" />
        </div>
        <div className="bullet--Container">
          <li>Organize and prioritize invoices</li>
          <li>Safeguard for duplicate payments</li>
        </div>
      </div>
          </div>
        </section>

        {/* HOMEPAGE CONTAINER END */}
    </>
  );
}