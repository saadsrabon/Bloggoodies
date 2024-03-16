import { useGetAuthor } from "../hooks/useGetAuthor"
import edit from '../assets/icons/edit.svg'
import { useAuth } from "../hooks/useAuth"
import BlogCard from "../components/blog/BlogCard"
import { useEffect, useRef, useState } from "react"
import useAxiosWithAuth from "../hooks/useAxios"
import { useProfile } from "../hooks/useProfileStore"



const Profile = () => {
    // const {author}=useGetAuthor()
    const [id,setId]=useState(window.location.pathname.split('/')[2])
    console.log(id)
    const {state,dispatch}=useProfile()
    const {author}=useGetAuthor(id,state,dispatch)
    console.log(state)
 
    const [profileImg,setProfileImg]=useState(author?.avatar)
    // console.log(profileImg)
   const axiosApi=useAxiosWithAuth()
    const {currentUserId}=useAuth()

    console.log(author)


    // Create a ref to connect input element
    const inputRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const updateImageDisplay = async () => {
    const formData = new FormData();
    for (const file of inputRef.current.files) {
      formData.append('avatar', file);
    }

    try {
      dispatch({type:'ProfileIsFetching'})
      const response = await axiosApi.post(
        `http://localhost:3000/profile/avatar`,
        formData,
      ).then(
        res=>{console.log(res)
          dispatch({type:'ProfilePicture',payload:res?.data?.user?.avatar})
        setProfileImg(res?.data?.user?.avatar)
       
     
      }
        

      ).catch(
        err=>console.log(err)
      )

      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
   
useEffect(()=>{
  setId(window.location.pathname.split('/')[2])
},[])
  console.log(author ,'from profile')
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
            {profileImg||author?.avatar? <img className="rounded-full" src={`http://localhost:3000/uploads/avatar/${profileImg?profileImg:author?.avatar}`} alt="" />:<span className="">{author?.firstName?author?.firstName.charAt(0).toUpperCase():''}</span>}
           
            
          </div>

          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          >
            <img onClick={handleImageUpload} src={edit} alt="Edit" />
            <input onChange={updateImageDisplay} className="hidden" ref={inputRef} type="file" />
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