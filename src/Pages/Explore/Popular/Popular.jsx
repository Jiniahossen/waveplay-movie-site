
import Movies from "../../../Components/Movies/Movies";
import useAllDramas from "../../../hooks/useAllDramas";

const Popular = () => {

    const [dramas]=useAllDramas();
    

    return (
        <div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    dramas?.map(movie=><Movies key={movie._id} movie={movie}></Movies>)
                }
            </div>
        </div>
    );
};

export default Popular;
