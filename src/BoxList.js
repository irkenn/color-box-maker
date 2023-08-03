import React, {useState} from "react";
import Box from "./Box";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";

function BoxList(){
    
    const INITIAL_STATE = [
        {id: uuid(), width: 40, height:80, color:"blue" },
        { id : uuid(), width: 80, height:40, color:"red" }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (width, height, color) => {
        // Adds a new box to the box list
        setBoxes(boxes => [...boxes, {id:uuid(), width, height, color}])
        
    }
    
    const deleteBox = (e, id) => {        
        const newBoxes = boxes.filter((i) => i.id !== id);
        setBoxes(newBoxes);
    }

    return(
        <div>
            <div>
                <NewBoxForm addBox={addBox}/>
            </div>
            <div>
                
                {boxes.map(({ id, height, width, color }) => <Box 
                                                                id={id} 
                                                                width={width} 
                                                                height={height} 
                                                                color={color} 
                                                                key={id}
                                                                deleteBox={deleteBox} /> )}
            </div>
        </div>
    );
}

export default BoxList;