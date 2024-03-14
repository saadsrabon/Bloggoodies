/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const MostPopular = ({popular ,handleSingleBlog}) => {
  return (
    <ul className="space-y-5 my-5">
    {popular.map(item=>( <li  key={item?.id} >
      <h3 onClick={()=>handleSingleBlog(item?.id)} className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
       {item?.title}
      </h3>
      <p className="text-slate-600 text-sm">
        by
        <Link to={`/profile/${item?.author?.id}`}>{item?.author?.firstName} {item?.author?.lastName}</Link>
        <span>· Likes </span> {item?.likes?.length}
      </p>
    </li>))}
   

    
  </ul>
  )
}

export default MostPopular