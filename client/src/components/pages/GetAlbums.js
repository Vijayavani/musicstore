import { useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { getAllAlbums} from '../../redux/albums/albumActions';
import {albumsFeatureKey} from '../../redux/albums/albumReducer'
import {Link} from 'react-router-dom'

const GetAlbums = () => {
  let dispatch = useDispatch();
  
  let albumInfo = useSelector((state)=>{
    return state[albumsFeatureKey];

  })
  
  let {albums} = albumInfo;

  useEffect(() => {
    dispatch(getAllAlbums())
  }, []);

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(albums)}</pre> */}
      <div className="row">
        <div className="col">
          {albums.length > 0 ? (
            <>
              {albums.map((album) => {
                <pre>{JSON.stringify(album.musicDirector)}</pre>
                return (
                  <div className="card m-3 p-2" key={album._id}>
                    <div className="card-header bg-danger text-white text-uppercase fw-bold">{album.title}</div>
                    <div className="card-body">
                      <h5 className="card-title text-dark"><span className="fw-bold text-dark">About:</span>  {album.genre}</h5>
                       <p className="card-text"><span className="fw-bold text-dark">title</span>
                         {album.title}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">album</span>
                         {album.album}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">musicDirector</span>
                         {album.musicDirector}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">movieDirector</span>
                         {album.movieDirector}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">musicDirector</span>
                         {album.musicDirector}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">lyricist</span>
                         {album.lyricist}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">productionHouse</span>
                         {album.productionHouse}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">releasedate</span>
                         {album.releasedate}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">price</span>
                         {album.price}
                      </p>
                      <Link to={`/albums/${album._id}`} className="btn btn-primary">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GetAlbums;