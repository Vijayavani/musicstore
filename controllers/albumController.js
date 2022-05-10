//import express from "express";
import Album from "../models/album";


// get all music albums

export const albums = async(req,res)=>{

    try
    {
      let albums = await Album.find();
      res.status(200).json(albums);    
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }


}
// single albums
export const album = async (req,res) => {

    let albumId = req.params.id;

    try{
       let album = await Album.findById(albumId);
       res.status(200).json(album);
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}


// post create album
export const createAlbum = async (req,res) => {
    let newAlbum = {
        title: req.body.title,
        album:req.body.album,
        genre:req.body.genre,
        musicDirector:req.body.musicDirector,
        movieDirector:req.body.movieDirector,
        lyricist:req.body.lyricist,
        productionHouse:req.body.productionHouse,
        price:req.body.price

    }

    try
    {
      //verify album exists already
      let album = await Album.findOne({title: newAlbum.title})

      if(album)
      {
          return res.status(400).json({
              msg:"Album exists already with the given title"
          })
      }
      //save to db if album does not exist
      album = new Album(newAlbum);
      album = await album.save();

      res.status(201).json({
          result: "Album Added Successfully",
          album: album
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}



export const updateAlbum = async (req,res) => {
    
    let albumId = req.params.id;

    let updateAlbum = {
        title: req.body.title,
        album:req.body.album,
        genre:req.body.genre,
        musicDirector:req.body.musicDirector,
        movieDirector:req.body.movieDirector,
        lyricist:req.body.lyricist,
        productionHouse:req.body.productionHouse,
        price:req.body.price

    }

    try
    {
      //check album does not exists 
      let album = await Album.findById(albumId);

      if(!album)
      {
          return res.status(400).json({
              msg:"Album does not exists"
          })
      }
      //update db
      album = await Album.findByIdAndUpdate(
          albumId,
          {
              $set: updateAlbum
          },
          { new: true}   
      )
      

      res.status(201).json({
          result: "Album Data Updated Successfully",
          album: album
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}

export const deleteAlbum = async (req,res) => {
    
    let albumId = req.params.id;

    
    try
    {
      //check album does not exists 
      let album = await Album.findById(albumId);

      if(!album)
      {
          return res.status(400).json({
              msg:"Album does not exists"
          })
      }
      //delete db
      album = await Album.findByIdAndDelete(albumId);
      

      res.status(201).json({
          result: "album deleted Successfully",
          albumId: albumId 
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}
