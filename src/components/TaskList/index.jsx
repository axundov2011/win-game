import React from 'react'
import PropTypes from "prop-types";

const TaskList = ({tasks }) => {
  return (
    <div className="card shadow-sm mb-4" style={{maxWidth:"320px"}}>
      <div className='card body'>
        <h5 className='card-title'>Tasks</h5>
        <ul className='list-group list-group-flush'>
            {tasks.map((task, index) => (
                <li className="list-group-item" key={index}>{task} </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

TaskList.PropTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TaskList;
