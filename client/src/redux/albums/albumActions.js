import Axios from "axios";

export const GET_ALL_ALBUMS = "GET_ALL_ALBUMS";
export const GET_ALL_ALBUMS_SUCCESS = "GET_ALL_ALBUMS_SUCCESS";
export const GET_ALL_ALBUMS_FAILURE = "GET_ALL_ALBUMS_FAILURE";


export const GET_ALBUM = "GET_ALBUM";
export const GET_ALBUM_SUCCESS = "GET_ALBUM_SUCCESS";
export const GET_ALBUM_FAILURE = "GET_ALBUM_FAILURE";

export const CREATE_ALBUM = "CREATE_ALBUM";
export const CREATE_ALBUM_SUCCESS = "CREATE_ALBUM_SUCCESS";
export const CREATE_ALBUM_FAILURE = "CREATE_ALBUM_FAILURE";

export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const UPDATE_ALBUM_SUCCESS = "UPDATE_ALBUM_SUCCESS";
export const UPDATE_ALBUM_FAILURE = "UPDATE_ALBUM_FAILURE";

export const DELETE_ALBUM = "DELETE_ALBUM";
export const DELETE_ALBUM_SUCCESS = "DELETE_ALBUM_SUCCESS";
export const DELETE_ALBUM_FAILURE = "DELETE_ALBUM_FAILURE";


export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_INPUT_SUCCESS ="UPDATE_INPUT_SUCCESS";
export const UPDATE_INPUT_FAILURE = "UPDATE_INPUT_FAILURE";




//get all albums

export const getAllAlbums = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_ALBUMS });
      let dataUrl = `http://localhost:3031/api/albums`;
      let response = await Axios.get(dataUrl);
      dispatch({ type: GET_ALL_ALBUMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_ALBUMS_FAILURE, payload: error });
    }
  };
};


//get single album

export const getAlbum = (albumId) =>{

  return async (dispatch) =>{

    try{


      dispatch({type:GET_ALBUM})
      let dataUrl = `http://localhost:3031/api/books/${albumId}`;
      let response = await Axios.get(dataUrl);
      dispatch({type:GET_ALBUM_SUCCESS,payload:response.data})
    }
    catch (error) {
      dispatch({ type: GET_ALBUM_FAILURE, payload: error });
    }

  }
  
}


//create new album
export const createAlbum = (album) =>{

  return async(dispatch) =>{

    try{
      dispatch({type:CREATE_ALBUM});
      let dataUrl = `http://localhost:3031/api/createalbum`;
      let response = await Axios.post(dataUrl,album);
      dispatch({type:CREATE_ALBUM_SUCCESS,payload:response.data})


    }
    catch(error)
    {
      dispatch({ type: CREATE_ALBUM_FAILURE, payload: error });
      
    }

  }

}

//update input

export const updateInput = (key,value) =>{

  return{
    type: UPDATE_INPUT,
    payload:{key,value}
  }

}

//update album

export const updateAlbum = (albumId,album) =>{

  return async(dispatch) =>{
    try{

      dispatch({type:UPDATE_ALBUM})
      let dataUrl = `http://localhost:3031/api/books/${albumId}`;
      let response = await Axios.put(dataUrl,album);
      dispatch({type:UPDATE_ALBUM_SUCCESS,payload:response.data})

    }
    catch(error)
    {
      dispatch({ type: UPDATE_ALBUM_FAILURE, payload: error });
    }
    
  }


}


//delete album

export const deleteAlbum = (albumId) =>{

  return async(dispatch) =>{
    try{

      dispatch({type:DELETE_ALBUM})
      let dataUrl = `http://localhost:3031/api/books/${albumId}`;
      let response = await Axios.delete(dataUrl);
      dispatch({type:DELETE_ALBUM_SUCCESS,payload:response.data})
      dispatch(getAllAlbums())

    }
    catch(error)
    {
      dispatch({ type: DELETE_ALBUM_FAILURE, payload: error });
    }
    
  }


}