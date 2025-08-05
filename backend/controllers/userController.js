const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');
const Collaboration = require('../models/Collaboration');
const Offer = require('../models/Offer');
const PricingPlan = require('../models/PricingPlan');

// Get all published blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true })
            .populate('author', 'name email')
            .sort({ createdAt: -1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: blogs.length,
            data: blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching blogs',
            error: error.message
        });
    }
};

// Get all published testimonials
const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({ isPublished: true })
            .sort({ createdAt: -1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching testimonials',
            error: error.message
        });
    }
};

// Get all active services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({ isActive: true })
            .sort({ order: 1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching services',
            error: error.message
        });
    }
};

// Get all active offers
const getAllOffers = async (req, res) => {
    try {
        const offers = await Offer.find({ 
            isActive: true, 
            validUntil: { $gte: new Date() } 
        })
            .sort({ createdAt: -1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: offers.length,
            data: offers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching offers',
            error: error.message
        });
    }
};

// Get all active collaborations
const getAllCollaborations = async (req, res) => {
    try {
        const collaborations = await Collaboration.find({ isActive: true })
            .sort({ createdAt: -1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: collaborations.length,
            data: collaborations
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching collaborations',
            error: error.message
        });
    }
};

// Get all active pricing plans
const getAllPricingPlans = async (req, res) => {
    try {
        const pricingPlans = await PricingPlan.find({ isActive: true })
            .sort({ order: 1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: pricingPlans.length,
            data: pricingPlans
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching pricing plans',
            error: error.message
        });
    }
};

module.exports = {
    getAllBlogs,
    getAllTestimonials,
    getAllServices,
    getAllOffers,
    getAllCollaborations,
    getAllPricingPlans
};
