const ContentType = require("../models/content-type.model");

const addContentType = async (req, res) => {
  const { type } = req.body;

  const content = new ContentType({
    type,
  });
  try {
    const data = await content.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const getContentType = async(req , res) => {
  try {
    const content_type = await ContentType.aggregate([{ $project: { value: "$_id", label: "$type", _id: 0 } }]);
    return res.status(200).json(content_type);
  } catch (err) {
    console.log(err,"err err")
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}

const updateContentTypeById = async (req , res) =>{
  try {
    const tag = await ContentType.findByIdAndUpdate(req.body._id, req.body)
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

const deleteContentTypeById = async (req, res) => {
  const id = req.params.id;

 await ContentType.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ContentType with id=${id}. Maybe ContentType was not found!`
        });
      } else {
        res.send({
          message: "ContentType was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ContentType with id=" + id
      });
    });
};


module.exports = {addContentType ,getContentType ,updateContentTypeById, deleteContentTypeById};
