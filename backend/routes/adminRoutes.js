const express = require("express");
const router = express.Router();
const { deleteBlog,createTestimonial,deleteTestimonial,createService,deleteService,createOffer,deleteOffer,createCollaboration,deleteCollaboration,createPricing,deletePricing,getAllContactForms
} = require("../controllers/adminController");

const isAuthenticatedAdmin = require("../middleware/isAuthenticatedAdmin");



router.post("/testimonial", isAuthenticatedAdmin, createTestimonial);
router.delete("/testimonial/:id", isAuthenticatedAdmin, deleteTestimonial);


router.post("/createService", isAuthenticatedAdmin, createService);
router.delete("/deleteService/:id", isAuthenticatedAdmin, deleteService);


router.post("/createOffer", isAuthenticatedAdmin, createOffer);
router.delete("/deleteOffer/:id", isAuthenticatedAdmin, deleteOffer);


router.post("/collaboration", isAuthenticatedAdmin, createCollaboration);
router.delete("/deletecollaboration/:id", isAuthenticatedAdmin, deleteCollaboration);

router.post("/pricing", isAuthenticatedAdmin, createPricing);
router.delete("/deletePricing/:id", isAuthenticatedAdmin, deletePricing);

router.get("/contact-forms", isAuthenticatedAdmin, getAllContactForms);


module.exports = router;
