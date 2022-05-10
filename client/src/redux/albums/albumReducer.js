import * as albumActions from './albumActions';

export const albumsFeatureKey = "albums";


let initialState = {
    errorMessage:"",
    albums:[],
    album:{}

}

const albumReducer =(state=initialState,action) =>{

    let {type,payload} = action;


    switch(type)
    {



        //get all albums
        case albumActions.GET_ALL_ALBUMS:
            return{
                ...state
            }


         //get all album success
         case albumActions.GET_ALL_ALBUMS_SUCCESS:
             return{
                 ...state,
                 albums: payload

             }

          //get all albums failure
          case albumActions.GET_ALL_ALBUMS_FAILURE:
              return{
                  ...state,
                  errorMessage: payload
              } 


              //get single album

              case albumActions.GET_ALBUM:
                  return{
                      ...state
                  }


              //get single album success
              case albumActions.GET_ALBUM_SUCCESS:
                return{
                    ...state,
                    album: payload
   
                }

              //get single album failure

              case albumActions.GET_ALBUM_FAILURE:
                return{
                    ...state,
                    errorMessage: payload
                } 

                //create album

                case albumActions.CREATE_ALBUM:
                    return{
                        ...state,
                       
                    }

                 //create album success
                 case albumActions.CREATE_ALBUM_SUCCESS:
                    return{
                        ...state,
                       
                    }


                  //create album failure

                  case albumActions.CREATE_ALBUM_FAILURE:
                    return{
                        ...state,
                       
                    }


                    //update input
                    case albumActions.UPDATE_INPUT:
                        return{
                            ...state,
                            album: {
                                ...state.album,
                                [payload.key]:payload.value
                            }
                        }


                    //update album

                    case albumActions.UPDATE_ALBUM:
                        return{
                            ...state,
                           
                        }
    

                    //update album success
                    case albumActions.UPDATE_ALBUM_SUCCESS:
                        return{
                            ...state,
                           
                        }
    

                    //update album failure
                    case albumActions.UPDATE_ALBUM_FAILURE:
                        return{
                            ...state,
                           
                        }
    

                        //Delete album

                    case albumActions.DELETE_ALBUM:
                        return{
                            ...state,
                           
                        }
    

                    //DELETE album success
                    case albumActions.DELETE_ALBUM_SUCCESS:
                        return{
                            ...state,
                           
                        }
    

                    //DELETE album failure
                    case albumActions.DELETE_ALBUM_FAILURE:
                        return{
                            ...state,
                           
                        }
  

              default:
                  return state;


    }
}


export { albumReducer};