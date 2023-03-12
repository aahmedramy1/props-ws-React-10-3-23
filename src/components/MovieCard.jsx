import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie: { title, description } }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}...</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
