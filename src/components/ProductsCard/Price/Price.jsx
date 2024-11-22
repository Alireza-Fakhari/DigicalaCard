import "./Price.css"
function Price(props) {
    let {price} = props
  return (
    <>
      <div className="offer-price">{price.toLocaleString()}</div>
    </>
  );
}

export default Price;
