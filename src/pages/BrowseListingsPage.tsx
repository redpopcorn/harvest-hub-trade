
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

// Sample listings data
const sampleListings = [
  {
    id: 1,
    title: "5 kg Fresh Tomatoes",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Ramesh Kumar",
    location: "Vijayawada",
    description: "Excess harvest from my small farm. Very fresh and organic.",
    lookingFor: "Seeds or farming tools",
    category: "vegetables"
  },
  {
    id: 2,
    title: "Flower Seeds Collection",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Lakshmi",
    location: "Guntur",
    description: "Variety of flower seeds for garden decoration. Good quality.",
    lookingFor: "Vegetables or fruits",
    category: "seeds"
  },
  {
    id: 3,
    title: "Farming Hand Tools",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Suresh",
    location: "Kakinada",
    description: "Extra gardening tools in good condition. Barely used.",
    lookingFor: "Rice or wheat",
    category: "tools"
  },
  {
    id: 4,
    title: "10 kg Organic Rice",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Anitha",
    location: "Rajahmundry",
    description: "Freshly harvested organic rice from my farm.",
    lookingFor: "Vegetables or fruits",
    category: "grains"
  },
  {
    id: 5,
    title: "Bamboo Baskets (Set of 3)",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Venkat",
    location: "Nellore",
    description: "Handmade bamboo baskets for harvesting and storage.",
    lookingFor: "Seeds or saplings",
    category: "tools"
  },
  {
    id: 6,
    title: "Mango Saplings",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=400&q=80",
    farmer: "Raju",
    location: "Tirupati",
    description: "Healthy mango saplings ready for planting.",
    lookingFor: "Farm equipment or tools",
    category: "seeds"
  }
];

// Categories for filtering
const categories = [
  { value: "all", label: "All Items" },
  { value: "vegetables", label: "Vegetables" },
  { value: "fruits", label: "Fruits" },
  { value: "grains", label: "Grains" },
  { value: "seeds", label: "Seeds" },
  { value: "tools", label: "Tools & Equipment" }
];

const BrowseListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter listings based on search term and category
  const filteredListings = sampleListings.filter(listing => {
    const matchesSearch = 
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      {/* Browse Header */}
      <section className="bg-yellow-200 py-12">
        <div className="container-tight">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-600 mb-4">Browse Available Listings</h1>
          <p className="text-lg text-brown-500 mb-8">
            Find crops, tools, seeds, and more from farmers in your community.
          </p>
          
          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search input */}
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-brown-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search listings..."
                  className="w-full pl-10 pr-4 py-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category filter */}
              <div className="w-full md:w-64">
                <select
                  className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Listings Grid */}
      <section className="py-12">
        <div className="container-tight">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map(listing => (
                <div key={listing.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                  <img 
                    src={listing.image} 
                    alt={listing.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-600 mb-2">{listing.title}</h3>
                    <p className="text-sm text-brown-500 mb-4">
                      Offered by: {listing.farmer} • {listing.location}
                    </p>
                    <p className="text-brown-600 mb-4">{listing.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-green-700 font-medium">Looking for: {listing.lookingFor}</p>
                    </div>
                    <button className="btn-primary w-full">
                      Send Trade Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brown-600 mb-4">No listings found</h3>
              <p className="text-brown-500 mb-6">Try adjusting your search or filters</p>
              <Link to="/list" className="btn-primary inline-block">
                List an Item Instead
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* List Your Items CTA */}
      <section className="py-12 bg-green-50">
        <div className="container-tight">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              Have something to trade?
            </h2>
            <p className="text-lg text-brown-600 mb-6 max-w-2xl mx-auto">
              List your excess crops, seeds, or tools and connect with other farmers in your area.
            </p>
            <Link to="/list" className="btn-primary inline-block">
              List Your Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseListingsPage;
