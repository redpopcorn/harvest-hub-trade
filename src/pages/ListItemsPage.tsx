
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Upload } from 'lucide-react';

const ListItemsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    quantity: '',
    location: '',
    lookingFor: '',
    photo: null as File | null,
    photoPreview: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target) {
          setFormData(prev => ({
            ...prev,
            photo: file,
            photoPreview: event.target?.result as string
          }));
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Listing created successfully!",
        description: "Your item is now available for trade.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        itemName: '',
        category: '',
        description: '',
        quantity: '',
        location: '',
        lookingFor: '',
        photo: null,
        photoPreview: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div>
      {/* List Items Header */}
      <section className="bg-green-100 py-12">
        <div className="container-tight">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">List Your Items</h1>
          <p className="text-lg text-brown-600 mb-2">
            Share what you have to trade with the community.
          </p>
          <p className="text-brown-500">
            Fill out the form below to create a new listing. Be as descriptive as possible to attract the right trades.
          </p>
        </div>
      </section>
      
      {/* List Items Form */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Item Name */}
                <div>
                  <label htmlFor="itemName" className="block text-sm font-medium text-brown-700 mb-1">
                    Item Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder="e.g., 5 kg Tomatoes, Farming Tools, Rice Seeds"
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-brown-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="grains">Grains</option>
                    <option value="seeds">Seeds</option>
                    <option value="tools">Tools & Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-brown-700 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describe your item in detail. Include quality, age, condition, etc."
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-brown-700 mb-1">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 5 kg, 10 pieces, 3 bags"
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Photo Upload */}
                <div>
                  <label htmlFor="photo" className="block text-sm font-medium text-brown-700 mb-1">
                    Upload Photo
                  </label>
                  
                  {formData.photoPreview ? (
                    <div className="mt-2 relative">
                      <img 
                        src={formData.photoPreview} 
                        alt="Item preview" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        onClick={() => setFormData(prev => ({ ...prev, photo: null, photoPreview: '' }))}
                      >
                        &times;
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="border-2 border-dashed border-brown-300 rounded-lg p-12 text-center cursor-pointer hover:border-green-500 transition-colors"
                      onClick={() => document.getElementById('photo')?.click()}
                    >
                      <Upload className="mx-auto h-12 w-12 text-brown-400" />
                      <p className="mt-2 text-sm text-brown-600">Click to upload a photo</p>
                      <p className="text-xs text-brown-500">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  )}
                  
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </div>
                
                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-brown-700 mb-1">
                    Your Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Village/Town name"
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Looking For */}
                <div>
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-brown-700 mb-1">
                    What You Need in Return <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lookingFor"
                    name="lookingFor"
                    placeholder="e.g., Seeds, Farming tools, Rice"
                    className="w-full p-3 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    value={formData.lookingFor}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Listing'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Help Section */}
      <section className="py-12 bg-yellow-100">
        <div className="container-tight">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-brown-600 mb-4">Tips for a Good Listing</h2>
            
            <ul className="space-y-4 text-brown-600">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Be specific about what you're offering and its condition.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Add a clear photo to attract more interest.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Mention what you're looking for in return.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Include accurate quantity and quality information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Specify your location for easier local trading.</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-700">
                <strong>Need help?</strong> Contact our support team via WhatsApp at +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListItemsPage;
