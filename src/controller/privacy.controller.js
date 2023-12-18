const PrivacyPolicy = require("../models/privacy");

const addPrivacyPolicy = async (req, res) => {
  const { name, content, version } = req.body;

  const tag = new PrivacyPolicy({
    name: name,
    content: content,
    version: version
  });
  try {
    if (!name) {
      return res.status(200).json({ message: "PrivacyPolicy name is required" });
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

const getAllPrivacyPolicy = async (req , res) =>{
  try {
    const tags = await PrivacyPolicy.find();
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updatePrivacyById = async (req , res) =>{
  try {
    const tag = await PrivacyPolicy.findByIdAndUpdate(req.body._id, req.body)
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


 const deletePrivacyId = async (req, res) => {
  const id = req.params.id;

 await PrivacyPolicy.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Privacy with id=${id}. Maybe Privacy was not found!`
        });
      } else {
        res.send({
          message: "Privacy was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Privacy with id=" + id
      });
    });
};

module.exports = { addPrivacyPolicy ,getAllPrivacyPolicy ,updatePrivacyById ,deletePrivacyId};
