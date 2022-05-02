import React, { useEffect, useState } from 'react';

const LoadDistrict = (string) => {
    const [district, setDistrict] = useState([])
    useEffect(()=>{
        fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${string}`)
    },[])
    return [district, setDistrict]
};

export default LoadDistrict;