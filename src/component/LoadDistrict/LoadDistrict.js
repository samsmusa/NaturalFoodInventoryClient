import React, { useEffect, useState } from 'react';

const LoadDistrict = (districtName,string) => {
    const [district, setDistrict] = useState([])
    useEffect(()=>{
        fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${string}`)
        .then(res=>res.json())
        .then(result=>setDistrict(result.data))
    },[districtName])
    return [district, setDistrict]
};

export default LoadDistrict;