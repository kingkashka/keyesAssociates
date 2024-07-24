function HomePageCards(props){
    const {title, subTitle, description, learnMore } = props;
    return(
        <div className="HomePageCards">
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p>{description}</p>
            <button>{learnMore}</button>
        </div>
    )
}
export default HomePageCards;