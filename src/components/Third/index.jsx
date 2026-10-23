import PropTypes from "prop-types";
import Title from "../Title";

const Third = ({ hobbies, married }) => {
  return (
    <div className="card border-0 shadow-sm mt-3">
      <div className="card-body">
        <Title text="Third Component" />

        <p className="mb-3">
          Status:{" "}
          <span className={`badge ${married ? "bg-success" : "bg-secondary"}`}>
            {married ? "Married" : "Single"}
          </span>
        </p>

        <h6 className="text-muted">Hobbies</h6>
        <ul className="list-group">
          {hobbies.map((hobby, index) => (
            <li key={index} className="list-group-item">
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Third.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  married: PropTypes.bool.isRequired,
};

export default Third;