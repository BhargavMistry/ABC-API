const Tag = require("../models/tag.model");

const addTag = async (req, res) => {
  const { name } = req.body;

  const tag = new Tag({
    name: name,
  });
  try {
    if (!name) {
      return res.status(200).json({ message: "Tag name is required" });
    }
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

const addBulkTags = async (req, res) => {
  const { tags } = req.body;

  try {
    if (!Array.isArray(tags) || tags.length === 0) {
      return res.status(400).json({ message: "Invalid or empty tag list provided" });
    }

    const insertedTags = await Tag.insertMany(
      tags.map((name) => ({ name }))
    );

    if (insertedTags) {
      res.status(200).json({ message: "Tags uploaded successfully", insertedTags });
    } else {
      res.status(500).json({ message: "Failed to insert tags" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const getAllTag = async (req , res) =>{
  try {
    const tags = await Tag.aggregate([{ $project: { value: "$_id", label: "$name", _id: 0 } }]);
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}

const getLatestTag = async (req , res) =>{
  try {
    const tags = await Tag.find({}).sort({updatedAt: -1}).limit(10);
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}

const updateTagById = async (req , res) =>{
  try {
    const tag = await Tag.findByIdAndUpdate(req.body._id, req.body)
    if(tag){
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


 const deleteTagById = async (req, res) => {
  const id = req.params.id;

 await Tag.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tag with id=${id}. Maybe Tag was not found!`
        });
      } else {
        res.send({
          message: "Tag was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tag with id=" + id
      });
    });
};

module.exports = { addTag ,getAllTag ,updateTagById ,getLatestTag, deleteTagById, addBulkTags};
