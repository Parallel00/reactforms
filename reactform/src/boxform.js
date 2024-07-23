import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function BxFrm({ createBox }) {
  const [formDt, dataSet] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  const changeHndl = evt => {
    const { name, value } = evt.target;
    dataSet(formDt => ({
      ...formDt,
      [name]: value
    }));
  };

  const getInput = evt => {
    evt.preventDefault();
    createBox({ ...formDt, id: uuid() });
    dataSet({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={changeHndl}
            type="text"
            name="height"
            value={formDt.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={changeHndl}
            type="text"
            name="width"
            id="width"
            value={formDt.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={changeHndl}
            type="text"
            name="backgroundColor"
            value={formDt.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add Box</button>
      </form>
    </div>
  );
}

export default BxFrm;
