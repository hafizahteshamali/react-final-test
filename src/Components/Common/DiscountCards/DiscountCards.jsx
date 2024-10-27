import "./DiscountCards.css";


const DiscountCards = ({data}) => {
    const {heading, subtitle, btnText, img, orange} = data;
  return (
    <div className={orange == true ? "box" : "dark"}>
        <div className="content-box">
        <h1>{heading}</h1>
        <p>{subtitle}</p>
        <a href="#">{btnText}</a>
        </div>
        <div className="image-wrapper">
        <img src={img} alt="" />
        </div>
    </div>
  )
}

export default DiscountCards
