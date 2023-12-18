const Category = require("../models/category.model");
const pathSplit = require("../utils/pathSplit");
const { default: mongoose } = require("mongoose");

const addCategory = async (req, res) => {
  const { name, description, content_type_id } = req.body;
  try {
    const categories = await Category.find({ name: name });

    if (!categories.length) {
      const category = new Category({
        name,
        thumbNailImg:pathSplit(req, req.file.path),
        description,
        content_type_id
      });
      const data = await category.save();
      if (data) {
        return res.status(200).json({ message: "successfully inserted category" });
      }
    }

    return res.status(400).json({ message: "category name must be unique !!" });
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {

    const aggregateQuery = [
      {
        $lookup: {
          from: "content_types",
          localField: "content_type_id",
          foreignField: "_id",
          as: "content_type",
        },
      },
      {
        $unwind: "$content_type",
      },
      {
        $project: { value: "$_id", label: "$name", description : "$description", path : "$thumbNailImg" , _id: 1, content_type : 1 }
      },
    ];

    const categories = await Category.aggregate(aggregateQuery)
    return res.status(200).json(categories);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const categoryList = async (req, res) => {
  try {
    const contentTypeId = req.params.id;
    const isContentTypeId = mongoose.Types.ObjectId.isValid(contentTypeId);
    const aggregateQuery = [];

    if (isContentTypeId) {
      aggregateQuery.push({
        $match: {
          content_type_id: mongoose.Types.ObjectId(contentTypeId),
        },
      },
      {
        $lookup: {
          from: "content_types",
          localField: "content_type_id",
          foreignField: "_id",
          as: "content_type",
        },
      },
      {
        $unwind: "$content_type",
      });
    } else {
      aggregateQuery.push({
        $lookup: {
          from: "content_types",
          localField: "content_type_id",
          foreignField: "_id",
          as: "content_type",
        },
      },
      {
        $unwind: "$content_type",
      },
      {
        $match: {
          "content_type.type": contentTypeId,
        },
      });
    }

    aggregateQuery.push(
      {
        $project: { value: "$_id", label: "$name", description: "$description", path: "$thumbNailImg", _id: 1, content_type: 1 },
      }
    );

    const categories = await Category.aggregate(aggregateQuery);

    return res.status(200).json(categories);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const updateCategoryById = async (req, res) => {
  const { name, description, content_type_id } = req.body
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, {
      name,
      thumbNailImg:pathSplit(req, req.file.path),
      description,
      content_type_id
    })
    if(category){
      return res.status(200).json({
        message:"updated successfully"
      });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const deleteCategoryById = async (req, res) => {
  const id = req.params.id;

 await Category.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      } else {
        res.send({
          message: "Category was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};


module.exports = { addCategory, categoryList ,getAllCategories ,updateCategoryById, deleteCategoryById};
