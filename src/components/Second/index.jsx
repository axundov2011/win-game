import PropTypes from "prop-types";
import Title from "../Title";
import Third from "../Third";

const Second = ({ personInfo }) => {
  const { email, phoneNumber, hobbies, married } = personInfo;

  return (
    <div className="card bg-light border-0 mt-3">
      <div className="card-body">
        <Title text="Second Component" />
        <div className="row mb-3">
          <div className="col-sm-6">
            <span className="text-muted">Email:</span> <strong>{email}</strong>
          </div>
          <div className="col-sm-6">
            <span className="text-muted">Phone:</span>{" "}
            <strong>{phoneNumber}</strong>
          </div>
        </div>

        <Third hobbies={hobbies} married={married} />
      </div>
    </div>
  );
};

Second.propTypes = {
  personInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    married: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Second;