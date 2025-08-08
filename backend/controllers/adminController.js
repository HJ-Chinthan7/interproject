const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');
const Offer = require('../models/Offer');
const Collaboration = require('../models/Collaboration');
const Pricing = require('../models/Pricing');
const ContactForm = require('../models/ContactForm');


const createBlog = async (req, res) => {
    try {
        const { title, content, tags, status,author } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title and content are required'
            });
        }

        const newBlog = new Blog({
            title,
            content,
            author: author || req.user._id,
            tags: tags || [],
            status: status || 'draft',
        });

        await newBlog.save();

        res.status(201).json({
            success: true,
            message: 'Blog post created successfully',
            data: newBlog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating blog post',
            error: error.message
        });
    }
};





const createTestimonial = async (req, res) => {
    try {
        const { name, message, designation, image } = req.body;

        if (!name || !message || !designation) {
            return res.status(400).json({
                success: false,
                message: 'Name, message, and designation are required'
            });
        }

        const newTestimonial = new Testimonial({
            name,
            message,
            designation,
            image: image || ''
        });

        await newTestimonial.save();

        res.status(201).json({
            success: true,
            message: 'Testimonial created successfully',
            data: newTestimonial
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating testimonial',
            error: error.message
        });
    }
};

const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await Testimonial.findByIdAndDelete(id);

        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: 'Testimonial not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting testimonial',
            error: error.message
        });
    }
};

const createService = async (req, res) => {
    try {
        const { title, description, icon } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const newService = new Service({
            title,
            description,
            icon: icon || ''
        });

        await newService.save();

        res.status(201).json({
            success: true,
            message: 'Service created successfully',
            data: newService
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating service',
            error: error.message
        });
    }
};

const deleteService = async (req, res) => {
    try {
        const { id } = req.params;

        const service = await Service.findByIdAndDelete(id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Service deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting service',
            error: error.message
        });
    }
};

const createOffer = async (req, res) => {
    try {
        const { title, description, validTill } = req.body;

        if (!title || !description || !validTill) {
            return res.status(400).json({
                success: false,
                message: 'Title, description, and validTill are required'
            });
        }

        const newOffer = new Offer({
            title,
            description,    
            validTill
        });

        await newOffer.save();

        res.status(201).json({
            success: true,
            message: 'Offer created successfully',
            data: newOffer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating offer',
            error: error.message
        });
    }
};

const deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;
console.log("in  delete offer")
        const offer = await Offer.findByIdAndDelete(id);

        if (!offer) {
            return res.status(404).json({
                success: false,
                message: 'Offer not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Offer deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting offer',
            error: error.message
        });
    }
};


const createCollaboration = async (req, res) => {
    try {
        const { partnerName, description, logo, link } = req.body;

        if (!partnerName || !description) {
            return res.status(400).json({
                success: false,
                message: 'Partner name and description are required'
            });
        }

        const newCollaboration = new Collaboration({
            partnerName,
            description,
            logo: logo || '',
            link: link || ''
        });

        await newCollaboration.save();

        res.status(201).json({
            success: true,
            message: 'Collaboration created successfully',
            data: newCollaboration
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating collaboration',
            error: error.message
        });
    }
};


const deleteCollaboration = async (req, res) => {
    try {
        const { id } = req.params;

        const collaboration = await Collaboration.findByIdAndDelete(id);

        if (!collaboration) {
            return res.status(404).json({
                success: false,
                message: 'Collaboration not found'
            });
        }

        res.status(200).json({
            success: false,
            message: 'Collaboration deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting collaboration',
            error: error.message
        });
    }
};

const createPricing = async (req, res) => {
    try {
        const { planName, price, features } = req.body;

        if (!planName || !price || !features) {
            return res.status(400).json({
                success: false,
                message: 'Plan name, price, and features are required'
            });
        }

        const newPricing = new Pricing({
            planName,
            price,
            features
        });

        await newPricing.save();

        res.status(201).json({
            success: true,
            message: 'Pricing plan created successfully',
            data: newPricing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating pricing plan',
            error: error.message
        });
    }
};


const deletePricing = async (req, res) => {
    try {
        const { id } = req.params;
console.log(id);
        const pricing = await Pricing.findByIdAndDelete(id);

        if (!pricing) {
            return res.status(404).json({
                success: false,
                message: 'Pricing plan not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Pricing plan deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting pricing plan',
            error: error.message
        });
    }
};


const getAllContactForms = async (req, res) => {
    try {
        const contactForms = await ContactForm.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            message: 'Contact forms retrieved successfully',
            data: contactForms
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving contact forms',
            error: error.message
        });
    }
};


module.exports = {
    createBlog,
    
    createTestimonial,
    deleteTestimonial,
    
    createService,
    deleteService,
    
    createOffer,
    deleteOffer,
    
    createCollaboration,
    deleteCollaboration,
    
    createPricing,
    deletePricing,
    
    getAllContactForms
};
