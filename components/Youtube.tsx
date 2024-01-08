//#region imports
//#endregion

export interface YoutubeProps {
  id: string;
}

export interface State {}

export default function Youtube({ id }: YoutubeProps) {
  return (
    <div className="flex justify-center p-4">
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
