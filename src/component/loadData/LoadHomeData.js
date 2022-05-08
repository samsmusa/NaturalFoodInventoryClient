import React, { useEffect, useState } from 'react';

const LoadHomeData = () => {
    const [alldata, setAlldata] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products/")
        // fetch('https://raw.githubusercontent.com/samsmusa/natural--inventory/master/public/fakedb.json')
        .then(res=>res.json())
        .then(result=>setAlldata(result))
    },[]);

    return [alldata, setAlldata];
};

export default LoadHomeData;