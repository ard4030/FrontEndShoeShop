import styles from "./product.module.css"

const Cat = () => {
  return (
    <div className={styles.cating}>
        <div>
            <span>دسته</span>
            <span>:</span>
            <span>موبایل</span>
        </div>

        <div>
            <span>برچسب ها</span>
            <span>:</span>
            <span> کریستیانو ,</span>
            <span> مسی</span>

        </div>
    </div>
  )
}

export default Cat