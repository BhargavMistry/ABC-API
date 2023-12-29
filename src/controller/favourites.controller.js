const Favourites = require("../models/favourites.model");

const addFavourites = async (req, res) => {
  const { user_id, content_id } = req.body;

  try {
    if (!user_id && !content_id) {
      return res.status(200).json({ message: "Favourites name is required" });
    }

    const existingRecord = await Favourites.findOne({ user_id, content_id });

    if (existingRecord) {
      return res.status(200).json({ message: "Record already exists" });
    }

    const tag = new Favourites({
      user_id: user_id,
      content_id: content_id,
    });

    const data = await tag.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const getAllFavourites = async (req , res) =>{
  try {

    const aggregateQuery = [
      {
        $lookup: {
          from: "contents",
          localField: "content_id",
          foreignField: "_id",
          as: "content_data",
        },
      },
      {
        $lookup: {
          from: "tags",
          localField: "content_data.tag_id",
          foreignField: "_id",
          as: "tag_id",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "content_data.category_id",
          foreignField: "_id",
          as: "category_id",
        },
      },
      {
        $lookup: {
          from: "content_types",
          localField: "content_data.content_type_id",
          foreignField: "_id",
          as: "content_type_id",
        },
      },
      {
        $lookup: {
          from: "file_types",
          localField: "content_data.file_type",
          foreignField: "_id",
          as: "file_type",
        },
      },
      {
        $lookup: {
          from: "license_types",
          localField: "content_data.license_type",
          foreignField: "_id",
          as: "license_type",
        },
      },
      {
        $lookup: {
          from: "sizes",
          localField: "content_data.size",
          foreignField: "_id",
          as: "size",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $project: {
          _id: 1,
          user_id : 1,
          content_data : 1,
          content_id : 1,
          tag_id: 1,
          category_id: 1,
          content_type_id: 1,
          file_type: 1,
          license_type: 1,
          size: 1,
          user:1
        },
      },
    ];

    const favourites = await Favourites.aggregate(aggregateQuery).unwind(
      "content_data",
      "tag_id",
      "category_id",
      "content_type_id",
      "file_type",
      "license_type",
      "size"
    );

    return res.status(200).json(favourites);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updateFavouritesById = async (req , res) =>{
  try {
    const favourite = await Favourites.findByIdAndUpdate(req.body._id, req.body)
    if(favourite){
      return res.status(200).json({
        message:"updated successfully"
      });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const deleteFavouritesId = async (req, res) => {
  const id = req.params.id;

  try {
      
    const deletedByContentId = await Favourites.findOneAndRemove({
      $or: [
          { _id: id },
          { content_id: id }
      ]
  });

      if (deletedByContentId) {
          res.send({
              message: "Favourites was deleted successfully!"
          });
          return;
      }

      // If neither _id nor content_id match, respond with an error
      res.status(404).send({
          message: `Cannot delete Favourites with id=${id}. Maybe Favourites was not found!`
      });
  } catch (err) {
      res.status(500).send({
          message: "Could not delete Favourites with id=" + id
      });
  }
};

module.exports = { addFavourites ,getAllFavourites ,updateFavouritesById ,deleteFavouritesId};
