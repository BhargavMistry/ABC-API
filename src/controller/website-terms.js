const WebsiteTerms = require("../models/website-terms");

const addWebTerm = async (req, res) => {
  const { name, content, version } = req.body;

  const tag = new WebsiteTerms({
    name: name,
    content: content,
    version: version
  });
  try {
    if (!name) {
      return res.status(200).json({ message: "WebTerms name is required" });
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

const getAllWebTerms = async (req , res) =>{
  try {
    const tags = await WebsiteTerms.find();
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updateWebTermById = async (req , res) =>{
  try {
    const tag = await WebsiteTerms.findByIdAndUpdate(req.body._id, req.body)
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


 const deleteWebTermById = async (req, res) => {
  const id = req.params.id;

 await WebsiteTerms.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete WebTerm with id=${id}. Maybe WebTerm was not found!`
        });
      } else {
        res.send({
          message: "WebTerm was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete WebTerm with id=" + id
      });
    });
};

module.exports = { addWebTerm ,getAllWebTerms ,updateWebTermById ,deleteWebTermById};
