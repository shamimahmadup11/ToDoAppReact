
import { Link } from "react-router-dom"
const Blog = () => {
  return (
    <div>
        
 <Link to='/home' className=" flex align-middle justify-center mt-14 ">
            <button className=" bg-slate-700 hover:bg-green-500 h-10 w-24 rounded-lg text-white ">Go to Blog</button>
        </Link>
      
    </div>
  )
}

export default Blog
