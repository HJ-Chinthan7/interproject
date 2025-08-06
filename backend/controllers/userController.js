const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');
const Collaboration = require('../models/Collaboration');
const Offer = require('../models/Offer');
const Pricing = require('../models/Pricing');
const Contact = require('../models/ContactForm');


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ status: 'published' })
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
        const testimonials = await Testimonial.find({ })
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
        const services = await Service.find({  })
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
            validTill: { $gte: new Date() } 
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
        const collaborations = await Collaboration.find({ })
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
        const pricing = await Pricing.find({ })
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

const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

      
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields: name, email, and message'
            });
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

       
        const newContact = new Contact({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: {
                id: newContact._id,
                name: newContact.name,
                email: newContact.email,
                message: newContact.message,
                createdAt: newContact.createdAt
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting contact form',
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
    getAllPricingPlans,
    submitContactForm
};
