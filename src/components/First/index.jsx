import React from 'react'
import Second from '../Second'
import Title from '../Title';

const personInfo = {
  fullName: "John Doe",
  age: 30,
  email: "john@gmail.com",
  phoneNumber: "+994553505050",
  married: false,
  hobbies: ["Reading", "Gaming", "Traveling"],
};

const First = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <Title text="First Component" />
          <div className="row mb-3">
            <div className="col-sm-6">
              <span className="text-muted">Full Name:</span>{" "}
              <strong>{personInfo.fullName}</strong>
            </div>
            <div className="col-sm-6">
              <span className="text-muted">Age:</span>{" "}
              <strong>{personInfo.age}</strong>
            </div>
          </div>

          <Second personInfo={personInfo} />
        </div>
      </div>
    </div>
  );
};

export default First;

