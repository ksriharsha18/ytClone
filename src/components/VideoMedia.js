const VideoMedia = (props) => {
    const {searchParams} = props
    return (
        <div className="h-[70vh] max-h-[660px] min-h-[500px] mb-4">
            <div className="w-auto h-[100%]">
                <div className="w-auto h-[100%]">
                    <iframe
                        title={searchParams}
                        width={'100%'}
                        height={'100%'}
                        src={"https://www.youtube.com/embed/" + searchParams + "?rel=0&amp;autoplay=1&mute=1"}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoMedia
