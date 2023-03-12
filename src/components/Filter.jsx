import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { } from '../../'

function Filter({ handleFilter }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    handleFilter(searchText);
  };

  return (
    <>
      <InputGroup className="mb-3" style={{ maxWidth: "50%" }}>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default Filter;
