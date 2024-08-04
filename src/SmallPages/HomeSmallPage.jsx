import HomePageCards from "../cards/HomePageCards";
import HomePageCardsData from "../data/HomePageCardsData";

export default function HomeSmallPage(props) {
  const renderHomePageCards = HomePageCardsData.map((data) => (
    <HomePageCards
      image={data.image}
      title={data.title}
      subTitle={data.subTitle}
      bullet1={data.bullet1}
      bullet2={data.bullet2}
      bullet3={data.bullet3}
      bullet4={data.bullet4}
    />
  ));
  return (
    <>
      <div className="container">
        <div className="openingStatement">
          <h1>Why Choose Keyes & Assocciates</h1>
          <h2>Optimize your time, Expand your business</h2>
          <div className="statementContainer">
            <li>
              <span className="firstStatement">
                <span className="firstLetter">K</span>
                eep the business organized:
              </span>
              We keep financial records up to date and accessible; this will
              save you time and money, and lead to better performance.
            </li>
            <li>
              <span className="firstStatement">
                <span className="firstLetter">E</span>xpand your business:
              </span>{" "}
              We closely monitor expenses and revenue and will create and
              maintain a budget that aligns with your business’s goals and
              objectives.
            </li>
            <li>
              <span className="firstStatement">
                <span className="firstLetter">Y</span>our time is valuable:
              </span>
              Focus on your business while we focus on your financial health by
              identifying areas where cost savings and revenue can be increased.
            </li>
            <li>
              <span className="firstStatement">
                <span className="firstLetter">E</span>xperience is experience:
              </span>
              We eliminate costly mistakes, oversights, and complicated issues
              by taking a methodical approach to ensure accuracy at every step.
            </li>
            <li>
              <span className="firstStatement">
                <span className="firstLetter">S</span>ave on costs:
              </span>{" "}
              By outsourcing your bookkeeping, you save money by not paying
              full- time or part-time employees and only paying for what you
              need – nothing more, nothing less.
            </li>
          </div>
        </div>
        <div className="service--Container">
          <h1>SERVICES</h1>
          <p>
            We give you top-quality bookkeeping services that won&#39;t break
            the bank. You can trust us to handle your books with care and
            attention to detail. We want to help you succeed and build strong,
            long-lasting relationships with all our clients.
          </p>
        </div>
        <div className="homePageCard--Container">{renderHomePageCards}</div>
        {/* <div className="homePage--left">
          <div className="leftInfo--box">
            <h1>AED Navigator</h1>
            <h3>Program Management</h3>
            <p>
              DiPietro & Associates, Inc. is an emergency medical consulting and
              sales firm with 3 decades of experience focused on equipment and
              services surrounding Public Safety Automated External
              Defibrillators, First Aid, and Advanced Bleeding Control. We have
              a simple service philosophy. We listen to your needs, then develop
              customized plans to deliver quality services and equipment in a
              cost-effective manner. Our staff of professional instructors and
              consultants, coupled with our innovative delivery style, results
              in a truly remarkable product. It is our goal to provide the
              finest quality services available anywhere and to exceed your
              expectations every time. DiPietro & Associates, Inc. is an
              authorized CMAS vendor, registered Small Business and Disabled
              Veteran Business Enterprise SB/DVBE.
            </p>
            <button className="button">Learn More</button>
          </div>
          <div className="rightImage--box">
            <img
              className="homePage--image"
              src="https://dipietroassoc.com/wp-content/uploads/2023/05/Z7Yh8d1g-1024x603.jpeg"
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="homePage--right">
          <div className="leftImage--box">
            <img
              className="homePage--image"
              src="https://dipietroassoc.com/wp-content/uploads/2023/05/GOa-EW5g-scaled-1-1024x540.jpeg"
              alt=""
            />
          </div>
          <div className="rightInfo--box">
            <h1>DiPietro & Associates, Inc.</h1>
            <p>
              DiPietro & Associates, Inc. is an emergency medical consulting and
              sales firm with 3 decades of experience focused on equipment and
              services surrounding Public Safety Automated External
              Defibrillators, First Aid, and Advanced Bleeding Control. We have
              a simple service philosophy. We listen to your needs, then develop
              customized plans to deliver quality services and equipment in a
              cost-effective manner. Our staff of professional instructors and
              consultants, coupled with our innovative delivery style, results
              in a truly remarkable product. It is our goal to provide the
              finest quality services available anywhere and to exceed your
              expectations every time. DiPietro & Associates, Inc. is an
              authorized CMAS vendor, registered Small Business and Disabled
              Veteran Business Enterprise SB/DVBE.
            </p>
            <button className="button">Learn More</button>
          </div>
        </div> */}
      </div>
    </>
  );
}
