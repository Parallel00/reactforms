import React, {useState} from "react";
import Box from "./box";
import BxFrm from "./boxform";

function BoxLs(){
	const [boxes, boxSet] = useState([]);
	const add = boxObj => {
		boxSet(boxes => [...boxes, boxObj]);
	};
	const del = id => {
		boxSet(boxes => boxes.filter(box => box.id !== id));
	};
	const bxComponent = boxes.map(box => (
		<Box 
			key = {box.id}
			id = {box.id}
			width = {box.width}
			height = {box.height}
			handleRemove = {del}
			backgroundColor = {box.backgroundColor}
		/>
	));
	
	return (
		<div>
			<BxFrm createBox={add} />
				{bxComponent}
		</div>
	);
}

export default BoxLs;