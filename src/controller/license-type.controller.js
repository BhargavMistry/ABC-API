const LicenseType = require("../models/license-type");

const addLicense = async (req, res) => {
  const { name } = req.body;

  const license = new LicenseType({
    name: name,
  });

  try {
    if (!name) {
      return res.status(200).json({ message: "name is required" });
    }
    const data = await license.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const getLicense = async (req , res) =>{
  try {
    const license = await LicenseType.aggregate([{ $project: { value: "$_id", label: "$name", _id: 0 } }]);
    return res.status(200).json(license);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}

const updateLicenseById = async (req , res) =>{
  try {
    const license = await LicenseType.findByIdAndUpdate(req.body._id, req.body)
    if(license){
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

const deleteLicenseById = async (req, res) => {
  const id = req.params.id;

 await LicenseType.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete License with id=${id}. Maybe License was not found!`
        });
      } else {
        res.send({
          message: "License was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete License with id=" + id
      });
    });
};


module.exports = { addLicense ,getLicense ,updateLicenseById, deleteLicenseById};
