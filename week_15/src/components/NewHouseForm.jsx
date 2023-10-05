import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewHouseForm({ addHouse }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      addHouse({ name });
      setName("");
    } else {
      alert("Invalid house name.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm text-end mt-2">
              <h6>New House:</h6>
            </div>
            <div className="col-sm">
              <label htmlFor="houseName">House Name:</label>
              <Form.Control
                type="text"
                id="houseName"
                placeholder="House Name"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className="col-sm mt-1 me-2">
              <Button type="submit" className="btn-sm" title="Add new house.">
                Add
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
