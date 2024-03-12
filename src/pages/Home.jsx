import { useEffect, useRef, useState } from "react";
import axios from "axios";
import dots from '../assets/icons/3dots.svg'
import edit from '../assets/icons/edit.svg'
import deleteIcon from '../assets/icons/delete.svg'
import { Link, useNavigate } from "react-router-dom";
const Home = () => {

  const [hasMore ,setHasMore]=useState(true)
  const [page,setPage]=useState(1)
  const [blogs,setBlogs]=useState([])
  const [popular,setPopular]=useState([]);

  const loaderRef= useRef()
const navigate=useNavigate()
  // ekta intersection observer nibo
console.log(popular)
  useEffect(()=>{
    
    const fetchData =async()=>{
      const response= await axios.get(`http://localhost:3000/blogs?page=${page}&limit=1`)
     console.log(response)
     if(response?.data?.blogs.length===0){
      setHasMore(false)

     }else{
      setBlogs(prevBlogs=>[
        ...prevBlogs,
        ...response.data.blogs,
      ])
      setPage(prev=>prev+1)
     }
    }
      
    const onIntersection =(items)=>{
       const loaderItem =items[0]
       if(loaderItem.isIntersecting && hasMore){
         fetchData()
       }
    }
    const observer = new IntersectionObserver(onIntersection)

    if(observer && loaderRef.current){
      observer.observe(loaderRef.current)
    }

    // cleanup

    return ()=>{
      if(observer) observer.disconnect()
    }
  },[hasMore, page])
   

  const handleSingleBlog=(id)=>{
    navigate(`/blogdetails/${id}`)
  }

  useEffect(()=>{
    const fetchPopularItem =async()=>{
      try{
      const response =await axios.get('http://localhost:3000/blogs/popular?limit=4')
      if(response){
        setPopular(response.data?.blogs)
      }
    }
    catch{
      err=>console.log(err)
    }

     
    }
    fetchPopularItem()
  },[])
  return (
    <main>
      {/* <!-- Begin Blogs --> */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {/* <!-- Blog Contents --> */}
            <div className="space-y-3 md:col-span-5">
              {/* <!-- Blog Card Start --> */}
              {blogs?.map(blog=>(
                <div onClick={()=>handleSingleBlog(blog?.id)} key={blog?.id} className="blog-card">
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
                          <a href="./profile.html">{blog?.author?.firstName } {blog?.author?.lastName }</a>
                        </h5>
                        <div className="flex items-center text-xs text-slate-700">
                          <span>{blog?.createdAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm px-2 py-1 text-slate-700">
                      <span>100 Likes</span>
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
              ))}
              

             {hasMore&& <div ref={loaderRef}>Loading..</div>}
             {!hasMore&& <p>You have scrolled at the bottom</p>}
              {/* <!-- Blog Card End --> */}
            </div>

            {/* <!-- Sidebar --> */}
            <div className="md:col-span-2 h-full w-full space-y-5">
              <div className="sidebar-card">
                <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                  Most Popular 👍️
                </h3>

                <ul className="space-y-5 my-5">
                  {popular.map(item=>( <li onClick={()=>handleSingleBlog(item?.id)} key={item?.id} >
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                     {item?.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      by
                      <Link to="">{item?.author?.firstName} {item?.author?.lastName}</Link>
                      <span>·  </span> {item?.likes?.length}
                    </p>
                  </li>))}
                 

                  
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                  Your Favourites ❤️
                </h3>

                <ul className="space-y-5 my-5">
                  <li>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm">
                      #tailwindcss, #server, #ubuntu
                    </p>
                  </li>

                  <li>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm">
                      #tailwindcss, #server, #ubuntu
                    </p>
                  </li>

                  <li>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm">
                      #tailwindcss, #server, #ubuntu
                    </p>
                  </li>

                  <li>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm">
                      #tailwindcss, #server, #ubuntu
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blogs --> */}
    </main>
  );
};

export default Home;
