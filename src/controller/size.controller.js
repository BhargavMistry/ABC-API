const SizeType = require("../models/size.model");

const addSize = async (req, res) => {
  const { name } = req.body;

  const contentSize = new SizeType({
    name: name,
  });

  try {
    if (!name) {
      return res.status(200).json({ message: "name is required" });
    }
    const data = await contentSize.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const addBulkSizes = async (req, res) => {
  const { sizes } = req.body;

  try {
    if (!Array.isArray(sizes) || sizes.length === 0) {
      return res.status(400).json({ message: "Invalid or empty tag list provided" });
    }

    const insertedSizes = await SizeType.insertMany(
      sizes.map((name) => ({ name }))
    );

    if (insertedSizes) {
      res.status(200).json({ message: "Sizes uploaded successfully", insertedSizes });
    } else {
      res.status(500).json({ message: "Failed to insert Sizes" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const getSizes = async (req , res) =>{
  try {
    const contentSize = await SizeType.aggregate([{ $project: { value: "$_id", label: "$name", _id: 0 } }]);
    return res.status(200).json(contentSize);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}

const updateSizeById = async (req , res) =>{
  try {
    const contentSize = await SizeType.findByIdAndUpdate(req.body._id, req.body)
    if(contentSize){
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


const deleteSizeById = async (req, res) => {
  const id = req.params.id;

 await SizeType.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Size with id=${id}. Maybe Size was not found!`
        });
      } else {
        res.send({
          message: "Size was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Size with id=" + id
      });
    });
};


module.exports = { addSize ,getSizes ,updateSizeById, deleteSizeById, addBulkSizes};
