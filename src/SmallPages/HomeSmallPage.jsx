import HomePageCards from "../cards/HomePageCards";
export default function HomeSmallPage(props) {
  // const renderHomePageCards = HomePageCardsData.map(data => <HomePageCards title={data.title} subtitle={data.subtitle} description = {data.description}/>)
  return (
    <>
      <div className="homePageContainer">
        <div className="openingStatement">
          <h1>DiPietro & Associates, Inc.</h1>
          <p>
            Welcome to [Your Business Name], your trusted partner in medical
            logistics. At [Your Business Name], we understand the critical
            importance of timely and secure delivery of medical supplies,
            specimens, and pharmaceuticals. Our mission is to provide healthcare
            providers and patients with reliable, efficient, and compassionate
            courier services, ensuring that every delivery is handled with the
            utmost care and professionalism. Whether it's transporting
            life-saving medications, delicate lab samples, or essential medical
            equipment, we are committed to maintaining the highest standards of
            safety, confidentiality, and punctuality. Trust us to be your
            dependable link in the healthcare chain, delivering quality and
            peace of mind with every mile.
          </p>
        </div>
        <div className="homePage--left">
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
        </div>
        <div className="homePage--right">
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
        </div>
      </div>
    </>
  );
}
