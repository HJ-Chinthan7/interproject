const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');
const Offer = require('../models/Offer');
const Collaboration = require('../models/Collaboration');
const Pricing = require('../models/Pricing');


const createBlog = async (req, res) => {
    try {
        const { title, content, excerpt, imageUrl, tags, category, status } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title and content are required'
            });
        }

        const newBlog = new Blog({
            title,
            content,
            excerpt: excerpt || content.substring(0, 200) + '...',
            imageUrl: imageUrl || '',
            tags: tags || [],
            category: category || 'general',
            status: status || 'published',
            author: req.user._id
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


const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Blog post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting blog post',
            error: error.message
        });
    }
};


const createTestimonial = async (req, res) => {
    try {
        const { clientName, clientTitle, content, rating, imageUrl } = req.body;

        if (!clientName || !content || !rating) {
            return res.status(400).json({
                success: false,
                message: 'Client name, content, and rating are required'
            });
        }

        const newTestimonial = new Testimonial({
            clientName,
            clientTitle: clientTitle || '',
            content,
            rating: Math.min(Math.max(rating, 1), 5),
            imageUrl: imageUrl || '',
            isActive: true
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
        const { title, description, features, price, duration, imageUrl, category } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const newService = new Service({
            title,
            description,
            features: features || [],
            price: price || 0,
            duration: duration || '',
            imageUrl: imageUrl || '',
            category: category || 'general',
            isActive: true
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
        const { title, description, discount, originalPrice, discountedPrice, validUntil, imageUrl } = req.body;

        if (!title || !description || !discount) {
            return res.status(400).json({
                success: false,
                message: 'Title, description, and discount are required'
            });
        }

        const newOffer = new Offer({
            title,
            description,
            discount,
            originalPrice: originalPrice || 0,
            discountedPrice: discountedPrice || 0,
            validUntil: validUntil || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            imageUrl: imageUrl || '',
            isActive: true
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

// Delete an offer
const deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;

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
        const { title, description, partnerName, partnerLogo, websiteUrl, status } = req.body;

        if (!title || !description || !partnerName) {
            return res.status(400).json({
                success: false,
                message: 'Title, description, and partner name are required'
            });
        }

        const newCollaboration = new Collaboration({
            title,
            description,
            partnerName,
            partnerLogo: partnerLogo || '',
            websiteUrl: websiteUrl || '',
            status: status || 'active'
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
        const { planName, price, features, duration, description, isPopular } = req.body;

        if (!planName || !price || !features) {
            return res.status(400).json({
                success: false,
                message: 'Plan name, price, and features are required'
            });
        }

        const newPricing = new Pricing({
            planName,
            price,
            features,
            duration: duration || 'monthly',
            description: description || '',
            isPopular: isPopular || false
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


module.exports = {
    createBlog,
    deleteBlog,
    
    createTestimonial,
    deleteTestimonial,
    
    createService,
    deleteService,
    
    createOffer,
    deleteOffer,
    
    createCollaboration,
    deleteCollaboration,
    
    createPricing,
    deletePricing
};
