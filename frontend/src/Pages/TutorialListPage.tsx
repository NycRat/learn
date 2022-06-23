import { useNavigate } from "react-router-dom";
import { TutorialInfo } from "../Models/Tutorial";

const TutorialListPage = (props: { tutorials: TutorialInfo[] }) => {
  const navigate = useNavigate();

  console.log(props.tutorials);

  return (
    <div className="page">
      <h1 className="page-title">Tutorials</h1>
      <div className="tutorial-list">
        {props.tutorials.map((tutorial, i) => (
          <div
            className="tutorial-preview"
            key={i}
            onClick={() => {
              navigate(`/tutorials/${tutorial._id}`);
            }}
          >
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialListPage;
