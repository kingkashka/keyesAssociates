function HomePageCards(props) {
  const {
    image,
    title,
    subTitle,
    bullet1,
    bullet2,
    bullet3,
    bullet4,
    learnMore,
  } = props;
  return (
    <>
      <div className="HomePageCards">
        <div className="card--Header">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
        <div className="cardImages--Container">
          <img src={image} alt="" className="cardImages" />
        </div>
        <div className="bullet--Container">
          <li>{bullet1}</li>
          <li>{bullet2}</li>
          <li>{bullet3}</li>
          <li>{bullet4}</li>
        </div>
      </div>
    </>
  );
}
export default HomePageCards;
