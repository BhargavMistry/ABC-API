import { Router } from "express";

import auth from "../middleware/auth";
import adminAuth from "../middleware/admin-auth";
import categoryValidator from "../middleware/validation/categoryValidation";
import contentValidator from "../middleware/validation/contentValidation";
import { fields } from "../middleware/file-operation/upload-content";
import { single } from "../middleware/file-operation/upload-single-file";

import { addCategory, categoryList, updateCategoryById, deleteCategoryById, getAllCategories } from "../controller/category.controller";
import { addContent, getContent, updateContent, getAllFiles, deleteContentById } from "../controller/content.controller";
import { addContentType, getContentType, updateContentTypeById, deleteContentTypeById } from "../controller/content-type.controller";
import { addTag, getAllTag, updateTagById, deleteTagById, getLatestTag, addBulkTags } from "../controller/tag.controller";
import { getAllUsers } from "../controller/user.controller";
import { getAllFileTypes, updateFileById, addFileType, deleteFileTypeById } from "../controller/file-type.controller";
import { getLicense, updateLicenseById, addLicense, deleteLicenseById } from "../controller/license-type.controller";
import { addSize, getSizes, updateSizeById, deleteSizeById, addBulkSizes } from "../controller/size.controller";
import { bulkFileUpload } from "../controller/bulk-file-upload.controller";
import { single as _single } from "../middleware/file-operation/upload-excel";
import { addWebTerm, getAllWebTerms, updateWebTermById, deleteWebTermById } from "../controller/website-terms";
import { addLicenseService, getAllLicenseService, updateLIcenseServiceById, deleteLicenseServiceById } from "../controller/license-service.controller";
import { addPrivacyPolicy, getAllPrivacyPolicy, updatePrivacyById, deletePrivacyId } from "../controller/privacy.controller";
import { addHelpQuestion, getAllHelpQuestions, updateHelpQuestionById, deleteHelpQuestionById } from "../controller/help-question.controller";

const router = Router();
const uploadFields = fields([{ name : "mainFile" }, { name : "thumbFile" }, { name : "waterMarkFile" }]);

router.get("/users", auth, adminAuth, getAllUsers);

// abc stock content
router.post("/addcontent", auth, adminAuth, uploadFields, contentValidator, addContent);
router.post("/contents",auth, getAllFiles);
router.put("/content", auth, adminAuth, updateContent);
router.delete("/content/:id", auth, adminAuth,  deleteContentById);

// abc stock category
router.post("/addcategory", auth, adminAuth, single("categoryThumbImg"), categoryValidator, addCategory);
router.get("/categorybycontent/:id",auth,  categoryList);
router.get("/category", auth, adminAuth, getAllCategories);
router.put("/category/:id", auth, adminAuth, single("categoryThumbImg"), categoryValidator, updateCategoryById);
router.delete("/category/:id", auth, adminAuth, deleteCategoryById);

//abc stock content type
router.post("/contenttype", auth, adminAuth, addContentType);
router.get("/contenttype", auth, getContentType);
router.put("/contenttype", auth, adminAuth, updateContentTypeById);
router.delete("/contenttype/:id", auth, adminAuth,  deleteContentTypeById);


//abc stock tags
router.post("/add-tag", auth, adminAuth, addTag);
router.post("/bulk-tag", auth, adminAuth, addBulkTags);
router.get("/tags", auth, adminAuth, getAllTag);
router.get("/latesttag", auth, adminAuth, getLatestTag);
router.put("/tag", auth, adminAuth,  updateTagById);
router.delete("/tag/:id", auth, adminAuth,  deleteTagById);

// abc stock file type
router.post("/filetype", auth, adminAuth, addFileType);
router.get("/filetype", auth, adminAuth, getAllFileTypes);
router.put("/filetype", auth, adminAuth, updateFileById);
router.delete("/filetype/:id", auth, adminAuth, deleteFileTypeById);

// abc stock license type
router.post("/license", auth, adminAuth, addLicense);
router.get("/license", auth, adminAuth, getLicense);
router.put("/license", auth, adminAuth, updateLicenseById);
router.delete("/license/:id", auth, adminAuth, deleteLicenseById);

// abc stock size
router.post("/size", auth, adminAuth, addSize);
router.post("/bulk-size", auth, adminAuth, addBulkSizes);
router.get("/size", auth, adminAuth, getSizes);
router.put("/size", auth, adminAuth, updateSizeById);
router.delete("/size/:id", auth, adminAuth, deleteSizeById);


//abc stock webterm type
router.post("/webterm", auth, adminAuth, addWebTerm);
router.get("/webterm",  getAllWebTerms);
router.put("/webterm", auth, adminAuth, updateWebTermById);
router.delete("/webterm/:id", auth, adminAuth, deleteWebTermById);

//abc stock license service type
router.post("/licenseservice", auth, adminAuth, addLicenseService);
router.get("/licenseservice",   getAllLicenseService);
router.put("/licenseservice", auth, adminAuth, updateLIcenseServiceById);
router.delete("/licenseservice/:id", auth, adminAuth, deleteLicenseServiceById);

//abc stock privacy type
router.post("/privacy", auth, adminAuth, addPrivacyPolicy);
router.get("/privacy",   getAllPrivacyPolicy);
router.put("/privacy", auth, adminAuth, updatePrivacyById);
router.delete("/privacy/:id", auth, adminAuth,  deletePrivacyId);

//abc stock help question
router.post("/help", auth, adminAuth, addHelpQuestion);
router.get("/help",  getAllHelpQuestions);
router.put("/help", auth, adminAuth, updateHelpQuestionById);
router.delete("/help/:id", auth, adminAuth, deleteHelpQuestionById);

// bulk upload data using excel file.
router.post("/bulk-upload" , auth , adminAuth ,_single("excel-file"),bulkFileUpload)

export default router;



// const express = require("express");

// const auth = require("../middleware/auth");
// const adminAuth = require("../middleware/admin-auth");
// const categoryValidator = require("../middleware/validation/categoryValidation");
// const contentValidator = require("../middleware/validation/contentValidation");
// const uploadContent = require("../middleware/file-operation/upload-content");
// const uploadCategoryThumbnail = require("../middleware/file-operation/upload-single-file");

// const { addCategory, categoryList, updateCategoryById, deleteCategoryById, getAllCategories } = require("../controller/category.controller");
// const { addContent, getContent, updateContent , getAllFiles, deleteContentById} = require("../controller/content.controller");
// const { addContentType, getContentType, updateContentTypeById, deleteContentTypeById } = require("../controller/content-type.controller");
// const { addTag, getAllTag, updateTagById, deleteTagById, getLatestTag, addBulkTags } = require("../controller/tag.controller");
// const { getAllUsers } = require("../controller/user.controller");
// const { getAllFileTypes, updateFileById, addFileType, deleteFileTypeById } = require("../controller/file-type.controller");
// const { getLicense, updateLicenseById, addLicense, deleteLicenseById } = require("../controller/license-type.controller");
// const { addSize, getSizes, updateSizeById, deleteSizeById, addBulkSizes } = require("../controller/size.controller");
// const { bulkFileUpload } = require("../controller/bulk-file-upload.controller");
// const uploadExcelFile = require("../middleware/file-operation/upload-excel");
// const { addWebTerm, getAllWebTerms, updateWebTermById, deleteWebTermById } = require("../controller/website-terms");
// const { addLicenseService, getAllLicenseService, updateLIcenseServiceById, deleteLicenseServiceById } = require("../controller/license-service");
// const { addPrivacyPolicy, getAllPrivacyPolicy, updatePrivacyById, deletePrivacyId } = require("../controller/privacy");
// const { addHelpQuestion, getAllHelpQuestions, updateHelpQuestionById, deleteHelpQuestionById } = require("../controller/help-question.controller");

// const router = express.Router();
// const uploadFields = uploadContent.fields([{ name : "mainFile" }, { name : "thumbFile" }, { name : "waterMarkFile" }]);

// router.get("/users",  getAllUsers);

// // abc stock content
// router.post("/addcontent",  uploadFields, contentValidator, addContent);
// router.post("/contents",  getAllFiles);
// router.put("/content",  updateContent);
// router.delete("/content/:id",   deleteContentById);

// // abc stock category
// router.post("/addcategory",  uploadCategoryThumbnail.single("categoryThumbImg"), categoryValidator, addCategory);
// router.get("/categorybycontent/:id", categoryList);
// router.get("/category",  getAllCategories);
// router.put("/category/:id",  uploadCategoryThumbnail.single("categoryThumbImg"), categoryValidator, updateCategoryById);
// router.delete("/category/:id",  deleteCategoryById);

// //abc stock content type
// router.post("/contenttype",  addContentType);
// router.get("/contenttype",  getContentType);
// router.put("/contenttype",  updateContentTypeById);
// router.delete("/contenttype/:id",   deleteContentTypeById);


// //abc stock tags
// router.post("/add-tag",  addTag);
// router.post("/bulk-tag",  addBulkTags);
// router.get("/tags",  getAllTag);
// router.get("/latesttag",  getLatestTag);
// router.put("/tag",   updateTagById);
// router.delete("/tag/:id",   deleteTagById);

// // abc stock file type
// router.post("/filetype",  addFileType);
// router.get("/filetype",  getAllFileTypes);
// router.put("/filetype",  updateFileById);
// router.delete("/filetype/:id",  deleteFileTypeById);

// // abc stock license type
// router.post("/license",  addLicense);
// router.get("/license",  getLicense);
// router.put("/license",  updateLicenseById);
// router.delete("/license/:id",  deleteLicenseById);

// // abc stock size
// router.post("/size",  addSize);
// router.post("/bulk-size",  addBulkSizes);
// router.get("/size",  getSizes);
// router.put("/size",  updateSizeById);
// router.delete("/size/:id",  deleteSizeById);


// //abc stock webterm type
// router.post("/webterm",  addWebTerm);
// router.get("/webterm",  getAllWebTerms);
// router.put("/webterm",  updateWebTermById);
// router.delete("/webterm/:id",  deleteWebTermById);

// //abc stock license service type
// router.post("/licenseservice",  addLicenseService);
// router.get("/licenseservice",  getAllLicenseService);
// router.put("/licenseservice",  updateLIcenseServiceById);
// router.delete("/licenseservice/:id",  deleteLicenseServiceById);

// //abc stock privacy type
// router.post("/privacy",  addPrivacyPolicy);
// router.get("/privacy",  getAllPrivacyPolicy);
// router.put("/privacy",  updatePrivacyById);
// router.delete("/privacy/:id",   deletePrivacyId);

// //abc stock help question
// router.post("/help",  addHelpQuestion);
// router.get("/help",  getAllHelpQuestions);
// router.put("/help",  updateHelpQuestionById);
// router.delete("/help/:id",  deleteHelpQuestionById);

// // bulk upload data using excel file.
// router.post("/bulk-upload"  ,uploadExcelFile.single("excel-file"),bulkFileUpload)

// module.exports = router;
