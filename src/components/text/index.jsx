import React from 'react'
import { useState } from 'react';
const Text = () => {
    const [text, setText] = React.useState(false);
    const [isHovered, setIsHovered] = useState(false);
    


    const changeText = () => {
        setText(!text);
    }

    const handleOnclickBtn = () => {
        setTimeout(() => {
            setText(false);
        }, 3000);
    }
    return (
        <div className='container text-center py-5'>
            <div className='card p-4'>
                <p >{text ? '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' : 'This handy tool helps you create dummy text for all your layout needs. It’s a great way to fill your designs with placeholder content, so you can focus on the visual aspects of your project without getting distracted by the actual text. We are gradually adding new functionality and we welcome your suggestions and feedback.Please feel free to send us any additional dummy texts'}</p>
                <button onClick={() => changeText()} className="btn btn-primary  mb-5">
                    Toggle Text
                </button>
            </div>
            <div className="card shadow-sm" style={{ maxWidth: "320px" }}>
                <div className="card-body text-center">
                    <button
                        className="btn btn-primary"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        click
                    </button>

                    {
                        isHovered && (
                            <p className="mt-3 mb-0 text-success">This handy tool helps you create dummy text for all your layout needs. It’s a great way to fill your designs with placeholder content, so you can focus on the visual aspects of your project without getting distracted by the actual text. We are gradually adding new functionality and we welcome your suggestions and feedback.Please feel free to send us any additional dummy texts!</p>
                        )
                    }
                </div>
            </div>

            <div className="card shadow-sm mt-4" style={{ maxWidth: "320px" }}>
               <p className="mt-3 mb-0 text-success" >This handy tool helps you create dummy text for all your layout needs. It’s a great way to fill your designs with placeholder content, so you can focus on the visual aspects of your project without getting distracted by the actual text. We are gradually adding new functionality and we welcome your suggestions and feedback.Please feel free to send us any additional dummy texts!</p>
                 <button className="btn btn-primary mt-3" onClick={handleOnclickBtn}>
                    Click Me
                 </button>
                      
            </div>
        </div>
    )
}

export default Text
