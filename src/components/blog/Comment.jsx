/* eslint-disable react/prop-types */


const Comment = ({comment}) => {
  return (
    <div className="flex items-start space-x-4 my-8">
          <div className="avater-img bg-orange-600 text-white">
          {comment?.author?.avatar? <img className="rounded-full" src={`http://localhost:3000/uploads/avatar/${comment?.author?.avatar}`} alt="" />:<span className="">{comment?.author?.firstName?comment?.author?.firstName.charAt(0).toUpperCase():''}</span>}
          </div>
          <div className="w-full">
            <h5 className="text-slate -500 font-bold">{comment?.author?.firstName} {comment?.author?.lastName} </h5>
            <p className="text-slate-300">
              {comment?.content}
            </p>
          </div>
        </div>
  )
}

export default Comment