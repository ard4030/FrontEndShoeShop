
import Heading from './Heading'
import styles from "./product.module.css"
import{BiMessageSquareDetail} from "react-icons/bi"
import AddCom from './AddCom'
import Comments from './Comments'
import ViewPoints from './ViewPoints'


const CommentUsers = ({data}) => {

  return (
    <div className={styles.tozihat}>
    <Heading 
        title={"نظرات کاربران"}
        icon={<BiMessageSquareDetail />}
        e_name={data.e_name}
    />
    <div className={styles.contCom}>
        <ViewPoints data={data} />
        <AddCom data={data} />
        <Comments data={data.comments} />
    </div>    
  </div>
  )
}

export default CommentUsers