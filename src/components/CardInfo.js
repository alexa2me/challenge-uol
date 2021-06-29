import { Card } from "react-bootstrap";

const CardInfo = ({ title, data, text }) => {
  return (
    <Card
      style={{
        width: "100vw",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "25px", marginTop: "25px" }}>
          {title}
        </Card.Title>
        <Card.Text>
          {data.length ? (
            data.map((item) => {
              return (
                <p key={item.name}>
                  <a href={item.html_url}>{item.name}</a>
                </p>
              );
            })
          ) : (
            <p style={{ fontSize: "20px", marginTop: "2em" }}>{text}</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardInfo;
