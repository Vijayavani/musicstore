import {  useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { getAllAlbums,deleteAlbum} from '../../redux/albums/albumActions';
import {albumsFeatureKey} from '../../redux/albums/albumReducer';
import {Link,useNavigate} from 'react-router-dom';

const Dashboard = () => {

    let dispatch = useDispatch();

    let albumInfo = useSelector((state)=>{
        return state[albumsFeatureKey];
    
      });

      let {albums} = albumInfo;

      useEffect(() => {
        dispatch(getAllAlbums())
      }, []);

      const handleDeleteAlbum = (albumId) => {
        dispatch(deleteAlbum(albumId))
      }

    return(
        <>
        <pre>{JSON.stringify(albums)}</pre>

        <div className="container text-center">
            <div className="row">
                <div className="col">
 
                <h1 className="text-dark text-center">Manage Albums</h1>

                <div className="border border-dark text-center m-2 p-3">
                    <p className="text-info h4">Admin dashboard to manage albums</p>

                    <Link to="/addalbum" className="btn btn-success p-2 btn-outline-dark text-white">Add Albums</Link>

                </div>

                <div className="row">
        <div className="col">
          {albums.length > 0 ? (
            <>
              {albums.map((album) => {
                return (
                  <div className="card m-3 p-2" key={album._id}>
                    <div className="card-header bg-danger text-white text-uppercase fw-bold">{album.title}</div>
                    <div className="card-body">
                      <h5 className="card-title text-dark"><span className="fw-bold text-dark">Movie:</span>  {album.movie}</h5>
                       <p className="card-text"><span className="fw-bold text-dark">Genre</span>
                         {album.genre}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">Music Director :</span>
                         {album.amusicDirector}
                      </p>
                      <p className="card-text">
                      <span className="fw-bold text-dark">Movie Director:</span>
                        {album.movieDirector}
                      </p>
                      <p className="card-text">
                      <span className="fw-bold text-dark">Lyricist:</span>
                         {album.lyricist}
                      </p>
                      <p className="card-text">
                      <span className="fw-bold text-dark">Production House:</span>
                         {album.productionHouse}
                      </p>
    
                      <p>
                      <span className="fw-bold text-dark">Price:</span>
                         {album.price}
                      </p>
                      <Link to={`/albums/${album._id}`} className="btn btn-info m-3 p-2">
                        Update
                      </Link>

                      <button onClick={handleDeleteAlbum.bind(this,album._id)} className="btn btn-danger m-3 p-2">Delete</button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
                    

                </div>
            </div>
        </div>
        </>

    );


}

export default Dashboard;