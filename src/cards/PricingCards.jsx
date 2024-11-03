function PricingCards(props){
    const  {job} = props;
  return(
    <>
      <div className="PricingPageCards">
        <div className="pricingCard--Header">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
        <div className="pricingCardImages--Container">
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
  )  
}
export default PricingCards;