import Send from "./freeSend/freeSend";
import Offer from "./Offer/Offer";
import Tomorrow from "./Tomorrow/Tomorrow";
import "./ProductsCard.css";
import Price from "./Price/Price";

function Card(props) {
  const data = props.data;
  let { img, name, price, offer, send, star } = data;

  return (
    <>
      <div className="product">
        <img src={img} />
        <div className="send-p">
          {price >= 1000000 || offer >= 1000000 ? (
            <Send />
          ) : (
            <div className="send-hieght"></div>
          )}
        </div>
        <div className="product-info">
          <h4 className="product-title">{name}</h4>
          <div className="tomorrow-hieght">
            {send ? (
              <Tomorrow star={star} />
            ) : (
              <div className="free-star">
                <div className="star"></div>
                <span>{star}</span>
              </div>
            )}
          </div>
          <p
            className={`product-price ${
              offer == 0 ? "justify-end" : "justify-space"
            }`}
          >
            {offer != 0 ? (
              <Offer offer={offer} price={price} />
            ) : price == 0 ? (
              <div className="not-valid">ناموجود</div>
            ) : (
              <>
                {price.toLocaleString()}
                <img className="toman" src="./img/تومان.svg" alt="" />
              </>
            )}
          </p>
          {offer != 0 ? (
            <Price price={price} />
          ) : (
            <div className="price-hieght"></div>
          )}

          {/* <a className="product-btn" href="#">
            افزودن به سبد خرید
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Card;
