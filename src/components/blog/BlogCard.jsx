/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom'
import dots from '../../assets/icons/3dots.svg'
import edit from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
const BlogCard = ({blog}) => {
    const navigate=useNavigate()
    // Navigate to Single Blog
  const handleSingleBlog=(id)=>{
    navigate(`/blogdetails/${id}`)

  }


  const handleAuthor=(e,id)=>{
           navigate(`/profile/${id}`)
           e.stopPropagation()
  }
  console.log(blog)
  return (
    <div onClick={()=>handleSingleBlog(blog?.id)}  key={blog?.id} className="blog-card">
    <img
      
      className="blog-thumb"
      src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`}
      alt="ff"
    />
    <div className="mt-2 relative">
      <Link to={`/blogdetails/${blog?.id}`}  >
        <h3 className="text-slate-300 text-xl lg:text-2xl">
          <p >{blog?.title}</p>
        </h3>
      </Link>
      <Link  to={`/blogdetails/${blog?.id}`} className="mb-6 text-base text-slate-500 mt-1">
        {blog?.content}
      </Link>

      {/* <!-- Meta Informations --> */}
      <div className="flex justify-between items-center">
        <div className="flex items-center capitalize space-x-2">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">S</span>
          </div>

          <div>
            <h5 className="text-slate-500 text-sm">
              <p onClick={(e)=>handleAuthor(e, blog?.author?.id)}>{blog?.author?.firstName } {blog?.author?.lastName }</p>
            </h5>
            <div className="flex items-center text-xs text-slate-700">
              <span>{blog?.createdAt}</span>
            </div>
          </div>
        </div>

        <div className="text-sm px-2 py-1 text-slate-700">
          <span>{blog?.likes?.length}</span>
        </div>
      </div>

      {/* <!-- action dot --> */}
      <div className="absolute right-0 top-0">
        <button>
          <img
            src={dots}
            alt="3dots of Action"
          />
        </button>

        {/* <!-- Action Menus Popup --> */}
        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={edit}alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={deleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      </div>
      {/* <!-- action dot ends --> */}
    </div>
  </div>
)}

export default BlogCard