
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-yellow-100 py-16 md:py-24">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 leading-tight mb-6">
                Trade Crops, Tools & Seeds. <br />
                <span className="text-brown-500">No Money Needed.</span>
              </h1>
              <p className="text-lg md:text-xl text-brown-600 mb-8">
                Empowering farmers to exchange what they have for what they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse" className="btn-primary text-center">
                  Browse Exchanges
                </Link>
                <a href="#how-it-works" className="btn-outline text-center">
                  Learn How It Works
                </a>
              </div>
            </div>
            <div className="relative lg:pl-12 animate-fade-in">
              <div className="bg-white p-2 rounded-lg shadow-lg transform -rotate-2">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
                  alt="Farmers exchanging crops"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-300 p-4 rounded-lg shadow-md transform rotate-3 hidden md:block">
                <p className="text-brown-700 font-heading font-bold">
                  "I traded my excess tomatoes for the seeds I needed!"
                </p>
                <p className="text-brown-600">- Ramesh, Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">How It Works</h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">
              Join our community of farmers exchanging goods in three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-center text-green-600 mb-3">List Your Surplus</h3>
              <p className="text-brown-600 text-center">
                Add crops, tools, or seeds you want to trade with other farmers in your area.
              </p>
              <div className="mt-6 text-center">
                <Link to="/list" className="text-green-500 hover:text-green-600 font-medium">
                  List an Item &rarr;
                </Link>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-center text-green-600 mb-3">Browse Listings</h3>
              <p className="text-brown-600 text-center">
                See what other farmers are offering and find items you need for your farm.
              </p>
              <div className="mt-6 text-center">
                <Link to="/browse" className="text-green-500 hover:text-green-600 font-medium">
                  Browse Items &rarr;
                </Link>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-center text-green-600 mb-3">Make an Offer</h3>
              <p className="text-brown-600 text-center">
                Connect and exchange locally with other farmers in your community.
              </p>
              <div className="mt-6 text-center">
                <Link to="/browse" className="text-green-500 hover:text-green-600 font-medium">
                  Start Trading &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Listings Preview */}
      <section className="py-16 bg-yellow-100">
        <div className="container-tight">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-brown-600">Available Exchanges</h2>
            <Link to="/browse" className="text-green-600 hover:text-green-700 font-medium">
              View All &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Fresh tomatoes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">5 kg Fresh Tomatoes</h3>
                <p className="text-sm text-brown-500 mb-4">Offered by: Ramesh Kumar • Vijayawada</p>
                <p className="text-brown-600 mb-4">Excess harvest from my small farm. Very fresh and organic.</p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-green-700 font-medium">Looking for: Seeds or farming tools</p>
                </div>
                <Link to="/browse" className="btn-primary w-full block text-center">
                  Send Trade Offer
                </Link>
              </div>
            </div>
            
            {/* Feature Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Flower Seeds" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">Flower Seeds Collection</h3>
                <p className="text-sm text-brown-500 mb-4">Offered by: Lakshmi • Guntur</p>
                <p className="text-brown-600 mb-4">Variety of flower seeds for garden decoration. Good quality.</p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-green-700 font-medium">Looking for: Vegetables or fruits</p>
                </div>
                <Link to="/browse" className="btn-primary w-full block text-center">
                  Send Trade Offer
                </Link>
              </div>
            </div>
            
            {/* Feature Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Farming Tools" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">Farming Hand Tools</h3>
                <p className="text-sm text-brown-500 mb-4">Offered by: Suresh • Kakinada</p>
                <p className="text-brown-600 mb-4">Extra gardening tools in good condition. Barely used.</p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-green-700 font-medium">Looking for: Rice or wheat</p>
                </div>
                <Link to="/browse" className="btn-primary w-full block text-center">
                  Send Trade Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Community CTA */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing Farming Community
            </h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto mb-8">
              Together we are building a sustainable, self-reliant rural economy where farmers support each other.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/list" className="btn-secondary text-center">
                List Your First Item
              </Link>
              <Link to="/contact" className="bg-white hover:bg-green-50 text-green-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
