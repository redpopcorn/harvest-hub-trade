
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* About Header */}
      <section className="bg-green-600 py-16 text-white">
        <div className="container-tight">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Community Crop Exchange</h1>
          <p className="text-xl text-green-100">
            Creating a sustainable, self-reliant rural economy through direct farmer-to-farmer exchange.
          </p>
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="py-16">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
              <p className="text-lg text-brown-600 mb-4">
                Community Crop Exchange was born from a simple idea: farmers often have surplus crops, seeds, or tools that other farmers need, while money can be scarce.
              </p>
              <p className="text-lg text-brown-600 mb-4">
                We envision a thriving rural ecosystem where farmers can directly exchange goods, strengthen community bonds, reduce waste, and become more self-sufficient.
              </p>
              <p className="text-lg text-brown-600">
                By removing money from the equation, we're helping create a more resilient and sustainable agricultural community.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
                alt="Farmers in a field" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-300 p-4 rounded-lg shadow-md max-w-xs transform rotate-3 hidden md:block">
                <p className="text-brown-700 font-medium italic">
                  "When we trade directly with each other, everybody wins."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-yellow-100">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center text-brown-600 mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Community First</h3>
              <p className="text-brown-600">
                We believe in the power of local communities supporting each other. Our platform prioritizes direct, person-to-person connections between farmers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Environmental Sustainability</h3>
              <p className="text-brown-600">
                By facilitating local exchanges, we reduce transportation emissions and waste. Utilizing surplus crops that might otherwise go unused helps build a more sustainable food system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Digital Inclusion</h3>
              <p className="text-brown-600">
                We're committed to making technology accessible to all farmers regardless of their tech literacy. Our platform is designed to be simple, intuitive, and usable by everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Problem We're Solving */}
      <section className="py-16">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80"
                alt="Rural farming" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brown-600 mb-6">The Challenge We're Addressing</h2>
              
              <div className="space-y-4">
                <div className="bg-cream p-4 rounded-lg border-l-4 border-brown-400">
                  <h3 className="font-bold text-brown-600">Resource Inefficiency</h3>
                  <p className="text-brown-500">
                    Small farmers often have surplus of one crop but lack others, leading to waste and scarcity simultaneously.
                  </p>
                </div>
                
                <div className="bg-cream p-4 rounded-lg border-l-4 border-brown-400">
                  <h3 className="font-bold text-brown-600">Financial Constraints</h3>
                  <p className="text-brown-500">
                    Cash flow can be limited, especially between harvest seasons, making it hard to purchase needed supplies.
                  </p>
                </div>
                
                <div className="bg-cream p-4 rounded-lg border-l-4 border-brown-400">
                  <h3 className="font-bold text-brown-600">Limited Access</h3>
                  <p className="text-brown-500">
                    Many rural communities have limited access to markets where they can sell surplus or buy what they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Pilot Program */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Pilot Program</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">How It Started</h3>
              <p className="mb-4">
                Community Crop Exchange began as a small pilot program in three villages in Andhra Pradesh, connecting 50 farmers through a basic SMS and WhatsApp system.
              </p>
              <p>
                The results exceeded our expectations: in just six months, over 200 exchanges took place, farmers reported increased access to diverse crops, and community bonds strengthened.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Where We're Going</h3>
              <p className="mb-4">
                Now, we're expanding our digital platform to reach more farming communities across India, while keeping the interface simple and accessible.
              </p>
              <p>
                Our goal is to connect 10,000 farmers by the end of next year, creating resilient local food networks that support farmer independence.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-secondary">
              Join Our Pilot Program
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team/Founder Section */}
      <section className="py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center text-brown-600 mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-1">Priya Sharma</h3>
              <p className="text-brown-500 mb-3">Founder & Director</p>
              <p className="text-brown-600">
                Former farmer with 15 years of experience in agricultural cooperatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-1">Rajesh Kumar</h3>
              <p className="text-brown-500 mb-3">Community Manager</p>
              <p className="text-brown-600">
                Rural development specialist with a focus on farmer education.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-1">Anita Reddy</h3>
              <p className="text-brown-500 mb-3">Tech Lead</p>
              <p className="text-brown-600">
                Software engineer specializing in rural technology adoption.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-yellow-200">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold text-brown-600 mb-6">Join Our Community</h2>
          <p className="text-lg text-brown-600 mb-8 max-w-3xl mx-auto">
            Whether you're a farmer looking to trade, an organization wanting to partner, or just interested in our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/browse" className="btn-primary">
              Start Trading
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
