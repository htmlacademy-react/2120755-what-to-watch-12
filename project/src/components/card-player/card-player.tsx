import { useEffect, useRef} from 'react';

type CardPlayerProps = {
  preview: string;
  trailer: string;
  play: boolean;
};

function CardPlayer({ preview, trailer, play }: CardPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (play && videoElement) {
      const timeout = setTimeout(() => {
        videoElement.play();
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
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
