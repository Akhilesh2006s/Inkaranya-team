import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

// Import images
import img1 from '/1.jpg';
import img2 from '/2.jpg';
import img3 from '/3.jpg';
import img4 from '/4.jpg';
import img5 from '/5.jpg';
import img6 from '/6.jpg';
import img7 from '/7.jpg';
import logo from '/Logo.png';

function App() {
  const teamMembers = [
    {
      name: "Prof.(Dr.) Sanjeev Kumar",
      role: "Founder & Director",
      category: "Leadership",
      description: "Leading the vision and strategic direction of the organization."
    },
    {
      name: "Mr. Amit Kumar", 
      role: "Co-Director",
      category: "Leadership",
      description: "Supporting organizational growth and operational excellence."
    },
    {
      name: "Mr. Akshar Garg",
      role: "Founder's Team",
      category: "SOLA Alumni",
      description: "Contributing expertise from academic excellence and innovation."
    },
    {
      name: "Mr. Nishant Raj",
      role: "Founder's Team", 
      category: "SOLA Alumni",
      description: "Bringing specialized knowledge and collaborative leadership."
    },
    {
      name: "Mr. Rachit Tiwari",
      role: "Founder's Team",
      category: "SOLA Alumni",
      description: "Driving technical excellence and strategic implementation."
    },
    {
      name: "Mr. Yasaswi",
      role: "Founder's Team",
      category: "3rd Year Student, SCSET",
      description: "leadership in technology."
    },
    {
      name: "Mr. Atharv Krishna",
      role: "Founder's Team",
      category: "SOLA Alumni",
      description: "Driving technical and strategic excellence with Yasaswi atharv krishnass."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Inkaranya</h1>
              <p className="text-sm text-gray-600">Excellence in Innovation</p>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Team</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </div>
          
          {/* Logo in Right Corner */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Inkaranya Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Professional Hero Section with Subtle Animation */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-200 rounded-full animate-float-slower"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-slate-200 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300 rounded-full animate-float-slower"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Inkaranya
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light max-w-4xl mx-auto">
              Meet Our Distinguished Team
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals committed to excellence, innovation, and transformative solutions
            </p>
          </div>
        </div>
      </div>

      {/* Professional Team Members Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing together diverse expertise and proven leadership to drive organizational success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Professional Photo */}
                <div className="relative">
                  <div className="w-full h-80 overflow-hidden">
                    <img 
                      src={[img2, img5, img4, img3, img6, img1, img7][index]} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Professional Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.category}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                  </div>
                  
                  {/* Professional Contact Options */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex space-x-3">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Connect</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
          <p className="text-lg text-gray-600 mb-8">
            Ready to collaborate? Connect with our team to discuss opportunities and partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>contact@inkaranya.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+91 XXX XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Location, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src={logo} 
                alt="Inkaranya Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-400">Inkaranya</h3>
                <p className="text-gray-400 text-sm">Excellence in Innovation</p>
              </div>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Inkaranya. All rights reserved. | Committed to excellence and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;