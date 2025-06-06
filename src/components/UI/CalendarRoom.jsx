import { useParams } from "react-router-dom";

export const CalendarRoom = () => {
  let idRoom = useParams();
  console.info("ID DE SALA:", idRoom);
  return <div>CalendarRoom</div>;
};
