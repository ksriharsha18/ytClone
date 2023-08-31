import CommentSection from "./CommentSection"

const VideoComments = (props) => {
    const {searchParams,videodet} = props
    const [items] = videodet.items
    return (
        <div className="mt-2">
            <div className="p-2 m-2">
                <h4 className="font-normal text-black">{items.statistics.commentCount} comments</h4>
            </div>
            <CommentSection
                videoId = {searchParams}
            />
        </div>
    )
}

export default VideoComments