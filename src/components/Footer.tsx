
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container-tight py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Community Crop Exchange</h3>
            <p className="text-green-100">Empowering farmers to exchange what they have for what they need.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/browse" className="text-green-100 hover:text-white transition-colors">Browse Listings</Link></li>
              <li><Link to="/list" className="text-green-100 hover:text-white transition-colors">List Your Items</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <p className="text-green-100 mb-2">Need help? Reach out via:</p>
            <p className="text-green-100 mb-2">WhatsApp: +91 98765 43210</p>
            <p className="text-green-100">Email: help@communitycrop.org</p>
          </div>
        </div>
        
        <div className="border-t border-green-500 mt-8 pt-6 text-center text-green-100">
          <p>&copy; 2025 Community Crop Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
