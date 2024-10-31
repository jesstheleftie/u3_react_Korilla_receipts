import "./receipts.css";

const Receipts = (props) => {
  const { eachReceipt } = props;

  return (
    <div className="receipt">
      <h2>{eachReceipt.person}</h2>
      {/* <img src={eachWeatherForecast.img} alt={eachWeatherForecast.imgAlt} /> */}
      <p>
        <span className="orderTitle">Order: </span>
      </p>
      <p>
        <span>Main: {eachReceipt.order.main} </span>
      </p>
      <p>
        <span>Protein: {eachReceipt.order.protien} </span>
      </p>
      <p>
        <span>Rice: {eachReceipt.order.rice} </span>
      </p>
      <p>
        <span>Sauce: {eachReceipt.order.sauce} </span>
      </p>
      <p>
        <span>Drink: {eachReceipt.order.drink} </span>
      </p>
      <p>
        <span>Toppings: {eachReceipt.order.toppings} </span>
      </p>
      <p>
        <span>
          Vegetarian: {(eachReceipt.order.isVegetarian = true ? "Yes!" : "No!")}
        </span>
      </p>
      <p>
        <span className="total">Cost: {`$${eachReceipt.order.cost}`} </span>
      </p>
    </div>
  );
};

export default Receipts;
