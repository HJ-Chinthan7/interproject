const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../middleware/isUserAuthenticated');
const{getAllBlogs,getAllCollaborations,getAllOffers,getAllPricingPlans,getAllServices,getAllTestimonials} =require('../controllers/userController');

router.post('/getAllBlogs', isUserAuthenticated, getAllBlogs);

router.post('/getAllCollaborations', isUserAuthenticated, getAllCollaborations);

router.post('/getAllOffers', isUserAuthenticated, getAllOffers);

router.post('/getAllPricingPlans', isUserAuthenticated, getAllPricingPlans);


router.post('/getAllTestimonials', isUserAuthenticated, getAllTestimonials);

router.post('/getAllServices', isUserAuthenticated, getAllServices);

module.exports = router;