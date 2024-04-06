import { useContext } from "react"
import { BlogContext } from "../providers/BlogProvider"

const useBlog = () => {
 return (useContext(BlogContext))   
}
export default useBlog;