"use client"
import style from "./listitems.module.css";

const PriceCom = ({price,discount}) => {
  return (
    <div className={style.price}>
      <span className={style.discount}>{discount && discount.toLocaleString()}</span>
      <span
        style={discount && discount > 0 && { textDecoration: "line-through" }}
        className={style.priceAsl}
      >
        {price.toLocaleString()}
      </span>
      &nbsp; تومان
    </div>
  );
};

export default PriceCom;
