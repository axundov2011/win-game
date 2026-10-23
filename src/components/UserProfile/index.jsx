import PropTypes from "prop-types";

const UserProfile = ({ name, age, location }) => {
  return (
    <div className="card shadow-sm" style={{ maxWidth: "320px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="text-muted">Age:</span> <strong>{age}</strong>
          </li>
          <li className="list-group-item">
            <span className="text-muted">Location:</span>{" "}
            <strong>{location}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserProfile;