import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import TestimonialCard from '../components/TestimonialCard';
import OfferCard from '../components/OfferCard';
import '../styles/Home.css';

const Home = () => {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        
        setServices([
          {
            id: 1,
            title: "Web Development",
            description: "Custom web applications built with modern technologies",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            price: "Starting at $2,500"
          },
          {
            id: 2,
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            price: "Starting at $3,000"
          },
          {
            id: 3,
            title: "UI/UX Design",
            description: "Beautiful and intuitive user experiences",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            price: "Starting at $1,500"
          }
        ]);

        setBlogs([
          {
            id: 1,
            title: "10 Tips for Better Web Performance",
            excerpt: "Learn how to optimize your website for speed and user experience",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-15",
            readTime: "5 min read"
          },
          {
            id: 2,
            title: "The Future of AI in Development",
            excerpt: "Exploring how artificial intelligence is changing software development",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-12",
            readTime: "7 min read"
          },
          {
            id: 3,
            title: "Building Scalable Applications",
            excerpt: "Best practices for creating applications that grow with your business",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-10",
            readTime: "6 min read"
          }
        ]);

        setTestimonials([
          {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content: "Working with this team was an incredible experience. They delivered beyond our expectations!",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
          },
          {
            id: 2,
            name: "Michael Chen",
            role: "CTO, InnovateCorp",
            content: "The quality of work and attention to detail is outstanding. Highly recommended!",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
          },
          {
            id: 3,
            name: "Emily Rodriguez",
            role: "Marketing Director, GrowthCo",
            content: "Professional, responsive, and delivered exactly what we needed. Will work with them again!",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
          }
        ]);

        setOffers([
          {
            id: 1,
            title: "New Year Special",
            description: "Get 20% off on all web development packages",
            discount: "20% OFF",
            validUntil: "2024-02-28"
          },
          {
            id: 2,
            title: "Startup Package",
            description: "Complete web solution for new businesses",
            discount: "Starting at $1,999",
            validUntil: "2024-03-15"
          }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
   
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Digital Presence
            </h1>
            <p className="hero-subtitle">
              We create stunning websites, mobile apps, and digital experiences that help businesses grow and succeed in the digital world.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

   
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We deliver exceptional digital solutions tailored to your business needs</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>Cutting-edge technology and creative approaches</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Result-Driven</h3>
              <p>Focused on delivering measurable business outcomes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions for modern businesses</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

   
      {offers.length > 0 && (
        <section className="offers-section">
          <div className="container">
            <div className="section-header">
              <h2>Special Offers</h2>
              <p>Limited-time deals to help you get started</p>
            </div>
            <div className="offers-grid">
              {offers.slice(0, 2).map(offer => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </section>
      )}

  
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Awards Won</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights</h2>
            <p>Stay updated with the latest trends and insights in digital technology</p>
          </div>
          <div className="blog-grid">
            {blogs.slice(0, 3).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/blogs" className="btn btn-outline">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

     
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Hear from businesses we've helped transform</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

   
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
