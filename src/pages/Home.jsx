import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
const Home = () => {

  const [hasMore ,setHasMore]=useState(true)
  const [page,setPage]=useState(1)
  const [blogs,setBlogs]=useState([])
  const [popular,setPopular]=useState([]);

  const loaderRef= useRef()

  // ekta intersection observer nibo
console.log(popular)

// Implemented infinity Scroll
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
   


  // Fetching Popular Items
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
              <BlogCard blog={blog} key={blog?.id}/>
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
                  {popular.map(item=>( <li  key={item?.id} >
                    <h3 onClick={()=>handleSingleBlog(item?.id)} className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                     {item?.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      by
                      <Link to={`/profile/${item?.author?.id}`}>{item?.author?.firstName} {item?.author?.lastName}</Link>
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
