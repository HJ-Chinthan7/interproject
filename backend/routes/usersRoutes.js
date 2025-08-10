const express = require('express');
const router = express.Router();
const {createBlog} =require('../controllers/adminController');
const isUserAuthenticated = require('../middleware/isUserAuthenticated');
const{getAllBlogs,getAllOutreach,getAllCollaborations,getAllOffers,getAllPricingPlans,getAllServices,getAllTestimonials,submitContactForm,deleteBlog,getBlogById} =require('../controllers/userController');

router.post('/getAllBlogs', isUserAuthenticated, getAllBlogs);
router.post('/getBlogById/:id', isUserAuthenticated, getBlogById)
router.post('/getAllCollaborations', isUserAuthenticated, getAllCollaborations);

router.post('/getAllOffers', isUserAuthenticated, getAllOffers);

router.post('/getAllOutreach', isUserAuthenticated, getAllOutreach);

router.post('/getAllPricingPlans', isUserAuthenticated, getAllPricingPlans);

router.post('/getAllTestimonials', isUserAuthenticated, getAllTestimonials);

router.post('/getAllServices', isUserAuthenticated, getAllServices);

router.post('/submitContactForm', isUserAuthenticated, submitContactForm);

router.post("/addBlog", isUserAuthenticated, createBlog);

router.delete("/blog/:id", isUserAuthenticated, deleteBlog);
module.exports = router;
