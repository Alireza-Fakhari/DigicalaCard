import "./Tomorrow.css";

function Tomorrow(props) {
  let star = props.star;
  return (
    <div className="flex justify-space">
      <div className="tomorrow">
        <div className="tomorrow-flex">
          <img className="tomorrow-img" src="./img/ارسال فردا.png" />
        </div>
        <p className="tomorrow-txt">ارسال فردا</p>
      </div>
      <div className="tomorrow-star">
        <div className="star"></div>
        <span>{star}</span>
      </div>
    </div>
  );
};

export default Tomorrow;
