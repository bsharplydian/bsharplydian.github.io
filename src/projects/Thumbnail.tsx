interface Props {
  onClick: () => void;
  imagePath: string;
  title: string;
  engine: string;
  date: string;
}
const Thumbnail = (props: Props) => {
  return (
    <div className="thumbnail" onClick={() => props.onClick()}>
      {/* <img className="thumbnail-image" src={props.imagePath}></img> */}
      <div className="thumbnail-details">
        <div className="thumbnail-title">{props.title}</div>
        <div className="thumbnail-detail">{props.engine}</div>
        <div className="thumbnail-detail">{props.date}</div>
      </div>
    </div>
  );
};
export default Thumbnail;
