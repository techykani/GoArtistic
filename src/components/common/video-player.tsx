import { RefObject } from 'react'

interface VideoPlayerProps {
  vidRef: RefObject<HTMLVideoElement>
  video?: Video
  className: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ vidRef, className, video }) => {
  return (
    <video
      className={className}
      width="100%"
      height="100%"
      controls
      loop
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      ref={vidRef}
    >
      <source src={video?.webm} type="video/webm" />
      <source src={video?.mp4} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  )
}
