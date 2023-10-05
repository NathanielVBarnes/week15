import Card from "react-bootstrap/Card";
import Room from "./Room";
import "./House.css";

export default function RoomList({ house, updateHouse }) {
  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((room) => room._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  const handleUpdateRoom = (updatedRoom) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.map((room) =>
        room._id !== updatedRoom._id ? room : updatedRoom
      ),
    };
    updateHouse(updatedHouse);
  };

  return (
    <Card.Body>
      <h6>Rooms:</h6>
      {house.rooms.map((room) => (
        <Room
          key={room._id}
          room={room}
          updateRoom={handleUpdateRoom}
          deleteRoom={deleteRoom}
        />
      ))}
    </Card.Body>
  );
}
