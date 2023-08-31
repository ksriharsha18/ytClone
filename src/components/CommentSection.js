import { YOUR_API_KEY, YOUTUBE_COMMENT_THREAD } from "../utils/constants"
import { useEffect,useState } from "react"
import Comments from "./Comments"

const CommentSection = (props) => {
    const {videoId} = props
    const [comments,setComments]  = useState([]);
    useEffect(() => {
        CommentSection()
    },[]);
    async function CommentSection() {
        const data = await fetch(YOUTUBE_COMMENT_THREAD + videoId + '&key=' + YOUR_API_KEY);
        const json = await data.json()
        setComments(json)
    }


    return (comments !== undefined && comments.length !== 0) && (
        comments.items.map((comment) => {
            return(
                <div className="m-2"
                key = {comment.id}
                >
                    <Comments
                        comment = {comment}
                    />
                </div>
            )
        })
    )
}

export default CommentSection