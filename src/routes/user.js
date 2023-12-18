const express = require("express");

const auth = require("../middleware/auth");
const loginValidator = require("../middleware/validation/loginValidation");

const { getAllCategories } = require("../controller/category.controller");
const { register, login, status, reGenerateToken, logoutUser , getUserByEmail, updateUserById} = require("../controller/user.controller");
const {  getAllFiles, getMainFile, getRelatedFiles, getContentById } = require("../controller/content.controller");
const { getLatestTag } = require("../controller/tag.controller");
const { addCart, getAllCart, updateCartById, deleteCartById } = require("../controller/cart.controller");
const { addFavourites, getAllFavourites, updateFavouritesById, deleteFavouritesId } = require("../controller/favourites.controller");

const router = express.Router();

router.post("/signup", register);
router.post("/login" ,loginValidator,login);
router.get("/me" ,auth ,status)
router.post("/token" ,reGenerateToken)
router.post('/logout', auth, logoutUser)

router.get("/userbyemail/:email" , getUserByEmail)
router.put("/updateuser",auth,updateUserById)

// content list 
router.post("/default-files" ,auth, getAllFiles)
router.post("/related-files" ,auth, getRelatedFiles)
router.get("/main-file/:id" ,auth, getMainFile)

//abc stock Cart
router.post("/addcart", auth, addCart);
router.get("/cartitems", auth,   getAllCart);
router.put("/cart", auth, updateCartById);
router.delete("/cart/:id", auth,  deleteCartById)


router.get("/contentbyid/:id", auth, getContentById);

//abc stock Cart
router.post("/addfavourites", auth, addFavourites);
router.get("/favourites", auth, getAllFavourites);
router.put("/favourite", auth, updateFavouritesById);
router.delete("/favourite/:id", auth,  deleteFavouritesId);


// category 
router.get("/category" , auth ,getAllCategories)

// tags
router.get("/tags" , auth ,getLatestTag)

module.exports = router;
































