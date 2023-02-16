import "./cardList.style.css";
import Card from "../card/Card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsters={monster} />;
    })}
  </div>
);

export default CardList;
