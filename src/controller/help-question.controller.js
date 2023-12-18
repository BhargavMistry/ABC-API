const Help = require("../models/help.model");

const addHelpQuestion = async (req, res) => {
  const { name } = req.body;

  const help = new Help({
    name: name
  });
  try {
    if (!name) {
      return res.status(200).json({ message: "HelpQuestions name is required" });
    }
    const data = await help.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const getAllHelpQuestions = async (req , res) =>{
  try {
    const help = await Help.find();
    return res.status(200).json(help);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updateHelpQuestionById = async (req , res) =>{
  try {
    const help = await Help.findByIdAndUpdate(req.body._id, req.body)
    if(help){
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


 const deleteHelpQuestionById = async (req, res) => {
  const id = req.params.id;

 await Help.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete HelpQuestion with id=${id}. Maybe HelpQuestion was not found!`
        });
      } else {
        res.send({
          message: "HelpQuestion was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete HelpQuestion with id=" + id
      });
    });
};

module.exports = { addHelpQuestion ,getAllHelpQuestions ,updateHelpQuestionById ,deleteHelpQuestionById};
