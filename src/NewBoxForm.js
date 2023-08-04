import React, { useState } from "react";

function NewBoxForm({addBox}){
    //initial state empties the fields
    const initialState = {
        width: "",
        height: "",
        color: ""
    }

    const colorOptions = [
        "select a color",
        "blue",
        "red",
        "purple",
        "yellow",
        "cyan"
    ];

    const [formData, setFormData] = useState(initialState)
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { width, height, color } = formData;
        if (!width || !height || !color){
            alert("Please fill in all the fields");
            return;
        }
        //uses the passed function to pass the dimensions of the new box
        addBox(width, height, color)

        //clears the inputs after submission
        setFormData(initialState)
    }


    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width</label>
        <input 
            type="number"
            placeholder="width"
            name = "width"
            value={formData.width}
            onChange={handleChange} 
        />

        <label htmlFor="height">Height</label>
        <input 
            type="number"
            placeholder="height"
            name = "height"
            value={formData.height}
            onChange={handleChange}
        />

        <label htmlFor= "color">Color</label>
        <select 
            name="color"
            value={formData.color}
            onChange={handleChange}>
                {colorOptions.map((color, idx) => <option value={color} key={idx}>{color}</option>)}
        </select> 

        <button> Add box! </button>

    </form>
    
    );

}

export default NewBoxForm;