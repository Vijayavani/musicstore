import {  useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { getAlbum,updateInput,updateAlbum} from '../../redux/albums/albumActions';
import {albumsFeatureKey} from '../../redux/albums/albumReducer'
import {useNavigate,useParams} from 'react-router-dom';
const UpdateAlbum = () => {
    let dispatch = useDispatch();
    let albumId = useParams().id;
    let navigate = useNavigate();

    let selectedAlbumInfo = useSelector((state)=>{
      return state[albumsFeatureKey];
    })

    let {album} = selectedAlbumInfo;

    let[submitted,setSubmitted] = useState(false);


    useEffect(()=>{
        dispatch(getAlbum(albumId))
       
    },[albumId])

    let handleInput = (event) => {
       
        dispatch(updateInput(event.target.name, event.target.value));
      };

    let submitAlbum = (event) => {

        event.preventDefault();
        dispatch(updateAlbum(albumId,album));
        setSubmitted(true);

    }

    return(
        <>
       { submitted ? (
           navigate('/admin')
       ):(
           
           <>

           <pre>{JSON.stringify(album)}</pre>

           <div className="container text-center">
               <div className="row">
                   <div className="col">
                     <h1 className="text-center text-dark">Update Album</h1>
                     <div className="form-group justify-content-center m-3">
                         <form onSubmit={submitAlbum} className="border border-dark m-2">

                         <div className="form-group m-3">
                                 <input 
                                 name="title"
                                 placeholder="title"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>




                              <div className="form-group m-3">
                                 <input 
                                 name="album"
                                 placeholder="album"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>



                             <div className="form-group m-3">
                                 <input 
                                 name="genre"
                                 placeholder="genre"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>


                             <div className="form-group m-3">
                                 <input 
                                 name="musicDirector"
                                 placeholder="musicDirector"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>

                             <div className="form-group m-3">
                                 <input 
                                 name="movieDirector"
                                 placeholder="movieDirector"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>
                             <div className="form-group m-3">
                                 <input 
                                 name="lyricist"
                                 placeholder="lyricist"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>

                             <div className="form-group m-3">
                                 <input 
                                 name="productionHouse"
                                 placeholder="productionHouse"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>

                             <div className="form-group m-3">
                                 <input 
                                 name="price"
                                 placeholder="price"
                                 onChange={updateInput}
                                 required
                                 type="text"
                                 className="form-control"
                                 
                                 />

                             </div>

                             <div className="m-3">
                                 <input type="submit" value="Update" className="btn btn-warning btn-outline-dark text-white"/>

                             </div>


                         </form>

                     </div>


                   </div>

               </div>

           </div>

           </>
       )}
        </>

    );

}

export default UpdateAlbum;