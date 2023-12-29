const LicenseService = require("../models/license-service");

const addLicenseService = async (req, res) => {
  const { name, content, version } = req.body;

  const tag = new LicenseService({
    name: name,
    content: content,
    version: version
  });
  try {
    if (!name) {
      return res.status(200).json({ message: "LIcenseService name is required" });
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

const getAllLicenseService = async (req , res) =>{
  try {
    const tags = await LicenseService.find();
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updateLIcenseServiceById = async (req , res) =>{
  try {
    const tag = await LicenseService.findByIdAndUpdate(req.body._id, req.body)
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


 const deleteLicenseServiceById = async (req, res) => {
  const id = req.params.id;

 await LicenseService.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete LIcense Service with id=${id}. Maybe LIcense Service was not found!`
        });
      } else {
        res.send({
          message: "LIcense Service was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete LIcense Service with id=" + id
      });
    });
};

module.exports = { addLicenseService ,getAllLicenseService ,updateLIcenseServiceById ,deleteLicenseServiceById};
