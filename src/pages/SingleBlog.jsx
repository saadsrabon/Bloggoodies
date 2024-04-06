import axios from "axios"
import { useEffect, useState } from "react"
import comment from "../assets/icons/comment.svg"
import favourite from "../assets/icons/heart.svg"
import like from "../assets/icons/like.svg"
import favourited from '../assets/icons/heart-filled.svg'
import { useAuth } from './../hooks/useAuth';
import { useGetAuthor } from './../hooks/useGetAuthor';
import { useProfile } from "../hooks/useProfileStore"
import Comment from "../components/blog/Comment"
import useAxiosWithAuth from "../hooks/useAxios"


const SingleBlog = () => {
    const url =window.location.pathname.split("/")[2]
    const [refresh,setRefresh]=useState({status:false})
    const axiosApi=useAxiosWithAuth()
const [blog,setBlog]=useState({})
 const {currentUserId}=useAuth()
 const {state,dispatch}=useProfile()
 const {author}=useGetAuthor(currentUserId,state,dispatch)
    useEffect(()=>{
        const fetchSingleBlog =async(id)=>{
               const response =await axios.get(`http://localhost:3000/blogs/${id}`)
               setBlog(response?.data)
        }

        fetchSingleBlog(url)
    },[url])
   console.log(refresh)
   const handleComment=async(e)=>{
       e.preventDefault()
       try{
        const response = await axiosApi.post(`http://localhost:3000/blogs/${blog?.id}/comment`,{content:e.target.comment.value})
        console.log(response.data)
        setRefresh(prevState => ({ ...prevState, status: !prevState.status }));
        e.target.comment.value=''
       }catch{
          err=>console.log(err)
       }
       
    }

    useEffect(()=>{},[refresh])
  return (
    <>
    <main>
    {/* <!-- Begin Blogs --> */}
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
            {blog?.author?.avatar? <img className="rounded-full" src={`http://localhost:3000/uploads/avatar/${blog?.author?.avatar}`} alt="" />:<span className="">{blog?.author?.firstName?blog?.author?.firstName.charAt(0).toUpperCase():''}</span>}
            </div>
            <h5 className="text-slate-500 text-sm">{blog?.author?.firstName} {blog?.author?.lastName}</h5>
          </div>
          <span className="text-sm text-slate-700 dot">{blog?.createdAt}</span>
          <span className="text-sm text-slate-700 dot">Likes {blog?.likes?.length}</span>
        </div>
        <img className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"  src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`} alt="" />

        {/* <!-- Tags --> */}
        <ul className="tags">
          {blog?.tags?.split(',').map((tag,index)=>(
            <li key={index} className="bg-indigo-600 text-white px-4 py-1 rounded-md text-sm">{tag}</li>
          ))}
        </ul>

        {/* <!-- Content --> */}
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {blog?.content}
        </div>
      </div>
    </section>
    {/* <!-- End Blogs --> */}

    {/* <!-- Begin Comments --> */}
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments ({blog?.comments?.length})</h2>
        {currentUserId &&
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
          {author?.avatar? <img className="rounded-full" src={`http://localhost:3000/uploads/avatar/${author?.avatar}`} alt="" />:<span className="">{author?.firstName?author?.firstName.charAt(0).toUpperCase():''}</span>}
          </div>
          <form onSubmit={handleComment} className="w-full">
            <textarea 
             name="comment"
              className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
              placeholder="Write a comment"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Comment
              </button>
            </div>
          </form>
        </div>}

        {/* <!-- Comment One --> */}
        {blog?.comments?.map(item=>(<Comment comment={item} key={item?.id}  />))}
        
      </div>
    </section>
  </main>

  <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={like} alt="like" />
          <span>10</span>
        </li>

        <li>
          {/* <!-- There is heart-filled.svg in the icons folder --> */}
          <img src={favourite} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={comment} alt="Comments" />
            <span>3</span>
          </li>
        </a>
      </ul>
    </div>
  </>
  )
}

export default SingleBlog