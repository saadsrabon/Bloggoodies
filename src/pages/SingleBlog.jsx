import axios from "axios"
import { useEffect, useState } from "react"


const SingleBlog = ({}) => {
    const url =window.location.pathname.split("/")[2]
    console.log(url)
const [blog,setBlog]=useState({})
console.log(blog)
    useEffect(()=>{
        const fetchSingleBlog =async(id)=>{
               const response =await axios.get(`http://localhost:3000/blogs/${id}`)
               setBlog(response?.data)
        }

        fetchSingleBlog(url)
    },[url])
  return (
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
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>Next</li>
        </ul>

        {/* <!-- Content --> */}
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          Today I was mob programming with Square's Mobile & Performance Reliability team and we toyed with an
          interesting idea. Our codebase has classNamees that represent screens a user can navigate to. These classNamees are
          defined in modules, and these modules have an owner team defined. When navigating to a screen, we wanted to
          have the owner team information available, at runtime. We created a build tool that looks at about 1000
          Screen classNamees, determines the owner team, and generates a className to do the lookup at runtime. The generated
          code looked like this:

          <br />

          mapOf(vararg pairs: Pair) is a nice utility to create a map (more specifically, a LinkedHashMap) but using
          that syntax leads to the creation of a temporary vararg array of size 1000, as well as 1000 temporary Pair
          instances. Memory hoarding Let's look at the retained size of the map we just created: ~30 characters per
          className name * 2 bytes per character = 60 bytes per entry Each entry is stored as a LinkedHashMapEntry which
          adds 2 references to HashMap.Node which itself holds 3 references and 1 int. On a 64bit VM that's 5
          references * 8 bytes, plus 4 bytes for the int: 44 bytes per entry. So for the entries alone we're at (60 +
          44) * 1000 = 104 KB. The default load factor is 75%, which means the size of the array backing the hashmap
          must always be at least 25% greater than the number of entries. And the array size has to be a factor of 2.
          So, for 1000 entries, that's an object array of size 2048: 2048 * 8 = 16,314 bytes. The total retained size
          of the map is ~120 KB. Can we do better? Could we make it... 0?
          <h2 className="font-bold text-3xl mt-4">100% code-based map</h2>
          What if we generate code that returns the right team for a given screen, instead of creating a map? Since we
          know the full list of screen classNamees, we can check ahead of time whether there's any hashcode conflict, and
          if not, we can generate code that directly
        </div>
      </div>
    </section>
    {/* <!-- End Blogs --> */}

    {/* <!-- Begin Comments --> */}
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments (3)</h2>
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
        </div>

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
  )
}

export default SingleBlog