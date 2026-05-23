const Project = ({ thumbnail, title, content }) => {
  return (
    <div className="project">
      <h1>{title}</h1>
      {/* <img src={thumbnail} width="500px"></img> */}
      {content}
    </div>
  );
};

export default Project;
