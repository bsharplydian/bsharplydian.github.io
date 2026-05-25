interface Props {
  thumbnail: string;
  title: string;
  content: any;
}
const Project = (props: Props) => {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      {/* <img src={thumbnail} width="500px"></img> */}
      {props.content}
    </div>
  );
};

export default Project;
