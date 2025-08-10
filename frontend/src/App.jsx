import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Blogs from './pages/Blogs';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Collaborations from './pages/Collaborations';
import Offers from './pages/Offers';
import Pricing from './pages/Pricing';
import AdminDashboard from './admin/AdminDashboard';
import './App.css';
import LandingPage from './pages/LandingPage';
import Display from './components/Display';
import AddBlogForm from './components/AddBlogForm';
import Outreach from './pages/Outreach';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const AdminRoute = ({ children }) => {
  const { isAuthenticated ,userRole} = useAuth();
  if(isAuthenticated){
     return userRole==='admin' ? children : <Navigate to="/login" />;
  }
 
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ?  <Navigate to="/home" /> : children;

};

function App() {
  return (
   
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
           
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } 
            />

          
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/blogs" 
              element={
                <ProtectedRoute>
                  <Blogs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/testimonials" 
              element={
                <ProtectedRoute>
                  <Testimonials />
                </ProtectedRoute>
              } 
            />
               <Route 
              path="/outreach" 
              element={
                <ProtectedRoute>
                  <Outreach />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <AboutUs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/services" 
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/collaborations" 
              element={
                <ProtectedRoute>
                  <Collaborations />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/offers" 
              element={
                <ProtectedRoute>
                  <Offers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/pricing" 
              element={
                <ProtectedRoute>
                  <Pricing />
                </ProtectedRoute>
              } 
            />
             <Route 
              path="/display/:id" 
              element={
                <ProtectedRoute>
                  <Display />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/createBlog" 
              element={
                <PublicRoute>
                  <AddBlogForm />
                </PublicRoute>
              } 
            />
              <Route 
              path="/admindashboard" 
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } 
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
