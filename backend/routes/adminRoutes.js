const express = require("express");
const router = express.Router();
const { createBlog,deleteBlog,createTestimonial,deleteTestimonial,createService,deleteService,createOffer,deleteOffer,createCollaboration,deleteCollaboration,createPricing,deletePricing,getAllContactForms
} = require("../controllers/adminController");

const isAuthenticatedAdmin = require("../middleware/isAuthenticatedAdmin");

router.post("/blog", isAuthenticatedAdmin, createBlog);
router.delete("/blog/:id", isAuthenticatedAdmin, deleteBlog);


router.post("/testimonial", isAuthenticatedAdmin, createTestimonial);
router.delete("/testimonial/:id", isAuthenticatedAdmin, deleteTestimonial);


router.post("/service", isAuthenticatedAdmin, createService);
router.delete("/service/:id", isAuthenticatedAdmin, deleteService);


router.post("/offer", isAuthenticatedAdmin, createOffer);
router.delete("/offer/:id", isAuthenticatedAdmin, deleteOffer);


router.post("/collaboration", isAuthenticatedAdmin, createCollaboration);
router.delete("/collaboration/:id", isAuthenticatedAdmin, deleteCollaboration);

router.post("/pricing", isAuthenticatedAdmin, createPricing);
router.delete("/pricing/:id", isAuthenticatedAdmin, deletePricing);

router.get("/contact-forms", isAuthenticatedAdmin, getAllContactForms);


module.exports = router;
