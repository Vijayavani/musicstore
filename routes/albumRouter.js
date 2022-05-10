import express from 'express';

const router = express.Router();
import {albums,album,createAlbum,updateAlbum,deleteAlbum} from '../controllers/albumController'
//import album from '../models/album';




//get all albums
router.get('/albums',albums);



//get single album
router.get('/album/:id',album);

//post create album
router.post('/createAlbum',createAlbum);

//put update album
router.put('/albums/:id',updateAlbum)


//delete delete album
router.delete('/albums/:id',deleteAlbum);


//export default router;
module.exports = router;