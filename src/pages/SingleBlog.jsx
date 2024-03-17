import axios from "axios"
import { useEffect, useState } from "react"
import comment from "../assets/icons/comment.svg"
import favourite from "../assets/icons/heart.svg"
import like from "../assets/icons/like.svg"
import favourited from '../assets/icons/heart-filled.svg'
import { useAuth } from './../hooks/useAuth';

const SingleBlog = () => {
    const url =window.location.pathname.split("/")[2]
 
const [blog,setBlog]=useState({})
 const {currentUserId}=useAuth()
 console.log(currentUserId)
    useEffect(()=>{
        const fetchSingleBlog =async(id)=>{
               const response =await axios.get(`http://localhost:3000/blogs/${id}`)
               setBlog(response?.data)
        }

        fetchSingleBlog(url)
    },[url])
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
              <span className="">S</span>
            </div>
            <h5 className="text-slate-500 text-sm">{blog?.author?.firstName} {blog?.author?.lastName}</h5>
          </div>
          <span className="text-sm text-slate-700 dot">{blog?.createdAt}</span>
          <span className="text-sm text-slate-700 dot">{blog?.likes?.length}</span>
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
        <h2 className="text-3xl font-bold my-8">Comments (3)</h2>
        {currentUserId &&
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">S</span>
          </div>
          <div className="w-full">
            <textarea
              className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
              placeholder="Write a comment"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Comment
              </button>
            </div>
          </div>
        </div>}

        {/* <!-- Comment One --> */}
        <div className="flex items-start space-x-4 my-8">
          <div className="avater-img bg-orange-600 text-white">
            <span className="">S</span>
          </div>
          <div className="w-full">
            <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
            <p className="text-slate-300">
              Today I was mob programming with Square's Mobile & Performance Reliability team and we toyed with an
              interesting idea. Our codebase has classNamees that represent screens a user can navigate to. These classNamees
              are defined in modules, and these modules have an owner team defined. When navigating to a screen, we
              wanted to have the owner team information available, at runtime. We created a build tool that looks at
              about 1000 Screen classNamees, determines the owner team, and generates a className to do the lookup at runtime.
              The generated code looked like this:
            </p>
          </div>
        </div>

        {/* <!-- Comment Two --> */}
        <div className="flex items-start space-x-4 my-8">
          <div className="avater-img bg-green-600 text-white">
            <span className="">S</span>
          </div>
          <div className="w-full">
            <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
            <p className="text-slate-300">
              Today I was mob programming with Square's Mobile & Performance Reliability team and we toyed with an
              interesting idea. Our codebase has classNamees that represent screens a user can navigate to. These classNamees
              are defined in modules, and these modules have an owner team defined. When navigating to a screen, we
              wanted to have the owner team information available, at runtime. We created a build tool that looks at
              about 1000 Screen classNamees, determines the owner team, and generates a className to do the lookup at runtime.
              The generated code looked like this:
            </p>
          </div>
        </div>

        {/* <!-- Comment Three --> */}
        <div className="flex items-start space-x-4 my-8">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">S</span>
          </div>
          <div className="w-full">
            <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
            <p className="text-slate-300">
              Today I was mob programming with Square's Mobile & Performance Reliability team and we toyed with an
              interesting idea. Our codebase has classNamees that represent screens a user can navigate to. These classNamees
              are defined in modules, and these modules have an owner team defined. When navigating to a screen, we
              wanted to have the owner team information available, at runtime. We created a build tool that looks at
              about 1000 Screen classNamees, determines the owner team, and generates a className to do the lookup at runtime.
              The generated code looked like this:
            </p>
          </div>
        </div>
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