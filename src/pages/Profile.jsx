import { useGetAuthor } from "../hooks/useGetAuthor"
import edit from '../assets/icons/edit.svg'
import { useAuth } from "../hooks/useAuth"
import BlogCard from "../components/blog/BlogCard"

const Profile = () => {
    // const {author}=useGetAuthor()
    const id =window.location.pathname.split('/')[2]
   
     const author=useGetAuthor(id)
     const {currentUserId}=useAuth()
     console.log(author)

   
  return (
    <main className="mx-auto max-w-[1020px] py-8">
    <div className="container">
      {/* <!-- profile info --> */}
      <div className="flex flex-col items-center py-8 text-center">
        {/* <!-- profile image --> */}
        <div
          className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
          <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
            {/* <!-- User's first name initial --> */}
            <span className="">{author?.firstName?author?.firstName.charAt(0).toUpperCase():''}</span>
          </div>

          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          >
            <img src={edit} alt="Edit" />
          </button>
        </div>
        {/* <!-- name , email --> */}
        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px] capitalize">{author?.firstName} {author?.lastName}</h3>
          <p className="leading-[231%] lg:text-lg">{author?.email}</p>
        </div>

        {/* <!-- bio --> */}
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
          <div className="flex-1">
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {author?.bio}
            </p>
          </div>
          {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
          <button className="flex-center h-7 w-7 rounded-full">
            <img src={edit} alt="Edit" />
          </button>
        </div>
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
      {/* <!-- end profile info --> */}

      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl capitalize">{author?.id==currentUserId?"Your Blogs":`${author?.firstName}'s Blogs `}</h4>
      <div className="my-6 space-y-4">
        {author?.blogs?.map(blog=>  ( <BlogCard key={blog?.id} blog={blog}/>))}
     
      </div>
    </div>
  </main>
  )
}

export default Profile