const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');
const Collaboration = require('../models/Collaboration');
const Offer = require('../models/Offer');
const Pricing = require('../models/Pricing');


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


const getAllPricingPlans = async (req, res) => {
    try {
        const pricing = await PricingPlan.find({ isActive: true })
            .sort({ order: 1 })
            .select('-__v');
        
        res.status(200).json({
            success: true,
            count: pricing.length,
            data: pricing
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
