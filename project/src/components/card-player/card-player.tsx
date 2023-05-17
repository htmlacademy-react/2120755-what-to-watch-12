import { useEffect, useRef, useState } from 'react';

type CardPlayerProps = {
  preview: string;
  trailer: string | undefined;
  play: boolean;
};

function CardPlayer({ preview, trailer, play }: CardPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (play && videoElement) {
      const timeout = setTimeout(() => {
        setShouldPlayVideo(true);
        videoElement.play();
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setShouldPlayVideo(false);
      if (videoElement) {
        videoElement.load();
      }
    }
  }, [play]);

  return (
    <video ref={videoRef} className="small-film-card__image" muted loop poster={preview}>
      <source src={trailer} />
    </video>
  );
}

export default CardPlayer;
