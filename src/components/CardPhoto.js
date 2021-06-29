import { useContext } from "react";
import { Button, Card, Figure } from "react-bootstrap";
import GlobalStateContext from "../global/GlobalStateContext";
import stitch from "../assets/img/stitch.png";

const CardPhoto = () => {
  const { states, requests } = useContext(GlobalStateContext);

  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Img variant="top" src={states.avatar} />
      <Card.Body>
        <Card.Title>{states.name}</Card.Title>
        <Card.Text>{states.bio}</Card.Text>
        {states.isUser ? (
          <div className="d-flex justify-content-around">
            <Button onClick={requests.getRepos} variant="primary">
              Repos
            </Button>
            <Button onClick={requests.getStarred} variant="primary">
              Starred
            </Button>
          </div>
        ) : (
          <Figure>
            <Figure.Image
              width={200}
              height={180}
              alt="image of stitch"
              src={stitch}
            />
            <Figure.Caption style={{ fontSize: "25px", marginTop: "20px" }}>
              I need my tea 🍵
            </Figure.Caption>
          </Figure>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardPhoto;
