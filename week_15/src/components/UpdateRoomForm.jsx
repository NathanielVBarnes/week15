import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UpdateRoomForm({ oldName, oldArea, changeRoom }) {
  const [name, setName] = useState(oldName);
  const [area, setArea] = useState(oldArea);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAreaChange = (e) => {
    const intValue = parseInt(e.target.value, 10);
    setArea(isNaN(intValue) ? "" : intValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && area !== "") {
      changeRoom(name, area);
      setName("");
      setArea("");
    } else {
      alert("Invalid room data.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="roomName">Room Name:</label>
              <Form.Control
                type="text"
                id="roomName"
                placeholder="Room Name"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className="col-sm-2">
              <label htmlFor="roomArea">Sq. Ft.:</label>
              <Form.Control
                type="text"
                id="roomArea"
                placeholder="Sq. Ft."
                onChange={handleAreaChange}
                value={area}
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
