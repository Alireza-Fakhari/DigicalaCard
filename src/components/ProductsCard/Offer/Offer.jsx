import "./Offer.css";

function Offer(props) {
  let { price, offer } = props;
  let pre = Math.round(((price - offer) / price) * 100);
  return (
    <>
      <div className="offer-per">{"٪ " + pre}</div>
      <div className="offer">
        <div className="offer-offer">
          {offer.toLocaleString()}
        </div>
        <img className="toman" src="./img/تومان.svg" alt="" />
      </div>
    </>
  );
}
export default Offer;
