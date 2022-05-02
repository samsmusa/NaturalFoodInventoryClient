import React, { useEffect, useState } from 'react';

const LoadDivisions = () => {
    const [divisions, setDivisions] = useState([])
    useEffect(()=>{
        fetch("https://bdapis.herokuapp.com/api/v1.1/divisions")
        .then(res=>res.json())
        .then(result=>setDivisions(result.data))
    },[])
    return [divisions, setDivisions]
};

export default LoadDivisions;