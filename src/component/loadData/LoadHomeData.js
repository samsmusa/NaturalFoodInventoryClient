import React, { useEffect, useState } from 'react';

const LoadHomeData = () => {
    const [alldata, setAlldata] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(result=>setAlldata(result))
    },[]);

    return [alldata, setAlldata];
};

export default LoadHomeData;