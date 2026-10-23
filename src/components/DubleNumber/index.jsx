import React from 'react'

const DubleNumber = () => {
    const [dubleNumber, setDubleNumber] = React.useState(0);

    const handleDouble = () => {
        setDubleNumber((prev) => prev + 2);
    };

    return (
        <div>
            <p>Double Number: {dubleNumber}</p>
            <button onClick={handleDouble}>Double Number</button>
        </div>
    );
};

export default DubleNumber
