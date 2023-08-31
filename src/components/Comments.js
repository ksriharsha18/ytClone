import { BiDislike, BiLike } from "react-icons/bi"
import { useEffect,useState } from "react"

const Comments = ({comment}) => {
    return (
        <div className="m-2 flex items-start">
            <figure className="w-10 h-10 mr-3">
                <img className="w-full h-full rounded-full" alt={comment.id} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
            </figure>
            <div>
                <div className="ml-3">
                    <h5>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h5>
                </div>
                <div className="ml-3">{comment.snippet.topLevelComment.snippet.textOriginal}</div>
                <div className="flex items-center">
                    <button className="m-3 flex items-start"><BiLike size={20} /> <span>{(comment.snippet.topLevelComment.snippet.likeCount !==0) && comment.snippet.topLevelComment.snippet.likeCount}</span></button>
                    <button className="m-3"><BiDislike size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default Comments
