
import Heading from './Heading'
import styles from "./product.module.css"
import {MdOutlineHelpCenter} from "react-icons/md"
import AddPor from './AddPor'

const Porsesh = ({data}) => {
  return (
    <div className={styles.tozihat}>
        <Heading 
            title={"پرسش و پاسخ"}
            icon={<MdOutlineHelpCenter />}
            e_name={data.e_name}
        />
        <div className={styles.contPor}>
            

            <AddPor data={data._id} />
        </div>    
    </div>
  )
}

export default Porsesh