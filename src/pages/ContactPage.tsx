
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: 'question',
    joinPilot: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        reason: 'question',
        joinPilot: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div>
      {/* Contact Header */}
      <section className="bg-brown-500 py-16 text-white">
        <div className="container-tight">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-brown-100">
            Get in touch with our team for support, questions, or to join our program.
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-brown-600 mb-6">Reach Out To Us</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">WhatsApp Support</h3>
                  <p className="text-brown-600 mb-1">For quick assistance, message us on WhatsApp:</p>
                  <p className="text-lg font-medium text-brown-700">+91 98765 43210</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Email Us</h3>
                  <p className="text-brown-600 mb-1">For general inquiries:</p>
                  <p className="text-lg font-medium text-brown-700">info@communitycrop.org</p>
                  
                  <p className="text-brown-600 mt-4 mb-1">For support:</p>
                  <p className="text-lg font-medium text-brown-700">help@communitycrop.org</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Visit Our Office</h3>
                  <p className="text-brown-600 mb-1">We're located at:</p>
                  <address className="text-brown-700 not-italic">
                    Community Crop Exchange<br />
                    123 Rural Development Road<br />
                    Vijayawada, Andhra Pradesh 520001<br />
                    India
                  </address>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Operating Hours</h3>
                  <p className="text-brown-600 mb-2">Our support team is available:</p>
                  <p className="text-brown-700">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-brown-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brown-600 mb-6">Send Us a Message</h2>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* Reason for Contact */}
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-brown-700 mb-1">
                        Reason for Contact <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="question">General Question</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Join Pilot Program */}
                    <div className="flex items-start pt-2">
                      <div className="flex items-center h-5">
                        <input
                          id="joinPilot"
                          name="joinPilot"
                          type="checkbox"
                          className="w-4 h-4 text-green-600 border-brown-300 rounded focus:ring-green-500"
                          checked={formData.joinPilot}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="joinPilot" className="font-medium text-brown-700">
                          I'm interested in joining the pilot program
                        </label>
                        <p className="text-brown-500">
                          Check this if you'd like to be part of our early adopter community.
                        </p>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-yellow-100">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center text-brown-600 mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">How does the exchange work?</h3>
              <p className="text-brown-600">
                Our platform connects farmers who want to trade surplus crops, seeds, or tools with others. You list what you have, browse what others offer, and arrange exchanges directly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">Is there any fee to use the platform?</h3>
              <p className="text-brown-600">
                No, Community Crop Exchange is completely free to use. We're funded by grants and partners who support our mission of agricultural sustainability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">How do I arrange transportation for exchanges?</h3>
              <p className="text-brown-600">
                Transportation is arranged between the farmers directly. We recommend focusing on local exchanges to minimize travel needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">What if I have a dispute with another farmer?</h3>
              <p className="text-brown-600">
                Contact our support team via WhatsApp or email, and we'll help mediate any issues between trading partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">Can I sell items for money on the platform?</h3>
              <p className="text-brown-600">
                No, Community Crop Exchange is designed for bartering and trading only. All exchanges should be item-for-item without monetary payment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-3">How can my village join the pilot program?</h3>
              <p className="text-brown-600">
                Contact us using the form on this page, check the "join pilot program" box, and provide details about your community. Our team will get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
