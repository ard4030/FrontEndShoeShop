"use client"
import style from "./listitems.module.css";

const ColorCom = ({colors}) => {

  return (
    <div className={style.colorpath}>
      <div className={style.colTit}>رنگ ها</div>
      <div className="flex-left ">
        {colors && colors.map((item, index) => (
          <span
            key={index}
            className={style.itemcol}
            style={{ background: item }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorCom;
