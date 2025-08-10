const express = require("express");
const router = express.Router();
const { deleteBlog,createTestimonial,deleteTestimonial,createOutreach,deleteOutreach,createService,deleteService,createOffer,deleteOffer,createCollaboration,deleteCollaboration,createPricing,deletePricing,getAllContactForms
} = require("../controllers/adminController");

const isAuthenticatedAdmin = require("../middleware/isAuthenticatedAdmin");



router.post("/addtestimonial", isAuthenticatedAdmin, createTestimonial);
router.delete("/deleteTestimonial/:id", isAuthenticatedAdmin, deleteTestimonial);


router.post("/createService", isAuthenticatedAdmin, createService);
router.delete("/deleteService/:id", isAuthenticatedAdmin, deleteService);
router.delete("/deleteOutreach/:id", isAuthenticatedAdmin, deleteOutreach);

router.post("/createOutreach", isAuthenticatedAdmin,createOutreach );


router.post("/createOffer", isAuthenticatedAdmin, createOffer);
router.delete("/deleteOffer/:id", isAuthenticatedAdmin, deleteOffer);


router.post("/addCollaboration", isAuthenticatedAdmin, createCollaboration);
router.delete("/deletecollaboration/:id", isAuthenticatedAdmin, deleteCollaboration);

router.post("/pricing", isAuthenticatedAdmin, createPricing);
router.delete("/deletePricing/:id", isAuthenticatedAdmin, deletePricing);

router.post("/contact-forms", isAuthenticatedAdmin, getAllContactForms);


module.exports = router;
