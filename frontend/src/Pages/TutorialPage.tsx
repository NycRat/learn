import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTutorialById } from "../Api/TutorialApi";
import { TutorialInfo } from "../Models/Tutorial";
import NotFoundPage from "./NotFoundPage";

const TutorialPage = (props: { id: string | null }) => {
  let { id } = useParams();
  const [tutorial, setTutorial] = useState<TutorialInfo | null>({
    _id: "",
    title: "loading",
    content: "",
    author: "",
    date: new Date(),
  });

  useEffect(() => {
    const fetchTutorial = async () => {
      let validID: string | null = null;
      if (props.id === null) {
        if (id !== undefined) {
          validID = id;
        }
      } else {
        validID = props.id;
      }
      if (validID) {
        setTutorial(await getTutorialById(validID));
      } else {
        setTutorial(null);
      }
    };
    fetchTutorial();
  }, [props.id, id]);

  return tutorial === null ? (
    <NotFoundPage />
  ) : (
    <div className="page">
      {tutorial.title}
      {tutorial.content}
    </div>
  );
};

export default TutorialPage;
