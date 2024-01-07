import { useEffect, useState } from "react";


const useAllDramas = () => {
    const [dramas, setDramas] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/dramas')
            .then((res) => res.json())
            .then((data) => {
                setDramas(data)
                setLoading(false)
            })
    }, [])
    return [dramas, loading];
};

export default useAllDramas;

