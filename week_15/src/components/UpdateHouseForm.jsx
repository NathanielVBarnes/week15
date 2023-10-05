import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UpdateHouseForm({ oldName, changeHouseName }) {
  const [name, setName] = useState(oldName);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      changeHouseName(name);
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
            <div className="col-sm mt-1">
              <Button type="submit" className="btn-sm">
                Update
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
