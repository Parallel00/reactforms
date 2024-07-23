import React from "react";

function Box({
	id,
	handleRemove,
	width = 7,
	height = 7,
	backgroundColor = "red"
}) {
	const del = () => handleRemove(id);
	return(
		<div>
			<div 
				style ={{
					height: `${height}em`,
					width: `${width}em`,
					backgroundColor
				}}
			/>
			<button onClick={del}>Remove Box</button>
		</div>
	);
}

export default Box;