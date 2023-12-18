const Cart = require("../models/cart.model");

const addCart = async (req, res) => {
  
  const cart = new Cart(req.body);
  try {
    if (!req.body) {
      return res.status(200).json({ message: "Cart is required" });
    }
    const data = await cart.save();
    if (data) {
      res.status(200).json({ message: "data uploaded successfully" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};

const addCartItems = async (req, res) => {
  const { carts } = req.body;

  try {
    if (!Array.isArray(carts) || carts.length === 0) {
      return res.status(400).json({ message: "Invalid or empty cart list provided" });
    }

    const insertedCarts = await Cart.insertMany(
      carts.map((name) => ({ name }))
    );

    if (insertedCarts) {
      res.status(200).json({ message: "carts uploaded successfully", insertedCarts });
    } else {
      res.status(500).json({ message: "Failed to insert carts" });
    }
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
};


const getAllCart = async (req , res) =>{
  try {
    const tags = await Cart.aggregate([{ $project: { value: "$_id", label: "$name", _id: 0 } }]);
    return res.status(200).json(tags);
  } catch (err) {
    res.status(err?.status || 500).json({
      message: err?.message,
    });
  }
}


const updateCartById = async (req , res) =>{
  try {
    const cart = await Cart.findByIdAndUpdate(req.body._id, req.body)
    if(cart){
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


 const deleteCartById = async (req, res) => {
  const id = req.params.id;

 await Cart.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete cart with id=${id}. Maybe cart was not found!`
        });
      } else {
        res.send({
          message: "cart was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete cart with id=" + id
      });
    });
};

module.exports = { addCart ,getAllCart ,updateCartById , deleteCartById, addCartItems};
