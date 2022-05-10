import {  useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { createAlbum} from '../../redux/albums/albumActions';
import {albumsFeatureKey} from '../../redux/albums/albumReducer'
import {Link,useNavigate} from 'react-router-dom';

const AddAlbum
 = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let[album,setAlbum] = useState({
        title:"",
        album:"",
        genre:"",
        musicDirector:"",
        movieDirector:"",
        lyricist:"",
        productionHouse:"",
        price:"",

    });
    let albumInfo = useSelector((state)=>{
        return state[albumsFeatureKey];
    
      });
      let[submit,setSubmit]= useState(false);

      let updateInput = (event) =>{
          setAlbum({
              ...album,
              [event.target.name]:event.target.value
          })
          
      }

      let submitAlbum = (event) => {
        event.preventDefault();
        dispatch(createAlbum(album));
        setSubmit(true);


      }

    return(
        <>
       { submit ? (
           navigate('/admin')
       ):(
           
           <>

           <pre>{JSON.stringify(album)}</pre>

           <div className="container text-center">
               <div className="row">
                   <div className="col">
                     <h1 className="text-center text-dark">Add Album</h1>
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
                                 <input type="submit" value="Create" className="btn btn-warning btn-outline-dark text-white"/>

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

export default AddAlbum
;