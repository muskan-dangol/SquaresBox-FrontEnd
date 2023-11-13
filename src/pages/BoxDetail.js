// BoxDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Square from "../component/Square";

import { useNavigate } from "react-router-dom";

const BoxDetail = ({onDelete, getColorById}) => {
  const navigate = useNavigate();
  const { id } = useParams();

const [name, setName] = useState('')

  useEffect(()=>{
    if(id){
      const colorObj = getColorById(id)
      setName(colorObj.name)
    }
  }, [id])

  const handleDelete = (colorId)=>{
    onDelete(colorId)
    navigate('/')
  }
  
  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <Square id={id} color={name} onDelete={handleDelete}/>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p>The color of the square is {name}.</p>
      </div>
    </div>
  );
};

export default BoxDetail;
