import React, { useState } from 'react';
import {
  Menu, X, Heart, Stethoscope, Settings,
  Syringe, Baby, Users, Microscope,
  MapPin, Phone, Mail, FileText,
  ClipboardList, CheckCircle, Zap,
  Droplet, Scale, Activity, Brain
} from 'lucide-react'; 

// --- Import Local Image ---
// NOTE: Assuming doctorImage and doctorImage2 still point to valid image paths for Dr. Ghosh.
import doctorImage from './assets/profile_2.jpg'; 
import doctorImage2 from './assets/profile_1.jpg';


// --- Updated Data for Dr. Prattay Ghosh (Diabetologist) ---

const DOCTOR_NAME = "Dr. Prattay Ghosh";
const SPECIALIZATION = "Diabetologist";
const LOCATION = "Kolkata";
const SHORT_TITLE = `${DOCTOR_NAME}, Best ${SPECIALIZATION} in ${LOCATION}`;

const navLinks = [
  { name: 'Home', href: '#' },
  { name: DOCTOR_NAME.split(' ')[1], href: '#' }, // Links to 'Ghosh'
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact', href: '#' },
];

// Data for the detailed Service Cards (Right side of the section)
const detailServices = [
    {
        icon: Droplet, // Icon for blood/diabetes
        title: 'Diabetes Management',
        description: "Effective Diabetes Management: Personalized plans for Type 1, Type 2, and Gestational Diabetes, including insulin pump therapy."
    },
    {
        icon: Activity, // Icon for monitoring/progress
        title: 'Management of Complications',
        description: "Expert care for complications of diabetes such as neuropathy, retinopathy, and kidney issues to preserve long-term health."
    },
    {
        icon: Scale, // Icon for weight/body
        title: 'Body Composition Analysis',
        description: "Precise Body Composition and BMI Analysis: Understanding your health profile to tailor effective, comprehensive treatment strategies."
    },
    {
        icon: Users, // Icon for community/support
        title: 'Diabetes Education & Support',
        description: "Beyond treatment, we provide crucial diabetes education and support groups to empower you in managing your condition."
    },
];

// Data for the Left Stats/Focus Block - ADJUSTED STATS
const focusStats = [
    { value: '15+', label: 'Years Experience', icon: Settings }, // Changed from 12+
    { value: '10K+', label: 'Satisfied Patients', icon: CheckCircle }, // Changed from 5K+
];

// Biographical Content for Dr. Prattay Ghosh
const bioContent = {
    shortTitle: "Best Diabetologist in Kolkata - Dr. Prattay Ghosh: Expert Care for Diabetes Management",
    mainTitle: "Dr. Prattay Ghosh: Your Trusted Diabetes Doctor in Kolkata",
    paragraph1: `Voted the best diabetologist in Kolkata, ${DOCTOR_NAME} is your trusted diabetes doctor. The ultimate ‘Diabetologist Near Me’ for personalized diabetes management and overall health. Embark on a transformative journey of diabetes care with ${DOCTOR_NAME}, a highly regarded diabetologist in Kolkata. Recognized as the best diabetes doctor in Kolkata, Dr. Ghosh specializes in delivering personalized care tailored to various diabetes types, including type 1, type 2, and gestational diabetes.`,
    paragraph2: `${DOCTOR_NAME}, a leader in the field, employs advanced techniques like insulin pump therapy and continuous glucose monitoring (CGM) to craft precise treatment plans. His exceptional reputation is rooted in the positive experiences of over 10,000 satisfied patients who have benefited profoundly from his expert care.`,
    affiliationsTitle: "Specialized & Collaborative Care",
    affiliationsText: `Collaborating with other specialists like Dr. Ankita Mandal, Dr. Prattay Ghosh extends comprehensive diabetes care, even for expectant mothers dealing with gestational diabetes mellitus (GDM). Whether you reside in New Town, Salt Lake, Park Street, Behala, Garia, Howrah, or any corner of Kolkata, Dr. Ghosh provides expert care intricately tailored to your neighborhood.`,
    educationTitle: "Commitment to Empowerment",
    educationText: `Discover a new approach to understanding diabetes with ${DOCTOR_NAME}. He goes beyond medical jargon, prioritizing diabetes education and support. Dr. Ghosh's dedication ensures you not only gain knowledge but actively contribute to improving your overall health. Enhance your well-being journey by joining a Diabetic Support Group, connecting with a community that shares your health goals.`,
};


// --- Components (ServiceCard remains the same, but uses new accent colors) ---

/**
 * Enhanced Service Card component to display service details.
 */
const ServiceCard = ({ icon: Icon, title, description, primaryColor }) => (
  // Updated borders and icons to use the new primaryColor
  <div className="flex flex-col items-start text-left p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-cyan-500 transition duration-300 hover:shadow-2xl hover:border-cyan-600 transform hover:-translate-y-1 h-full">
    <div className="p-3 mb-4 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-playfair text-gray-900 font-bold mb-2 text-xl">{title}</h3>
    <p className="font-raleway text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);


/**
 * Main application component.
 */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define new Color Palette
  const primaryColor = 'text-cyan-700'; // Darker cyan for main text elements
  const secondaryColor = 'text-cyan-500'; // Medium cyan for patterns/secondary text
  const accentBg = 'bg-cyan-700'; // Dark cyan background for buttons/footer
  const accentHover = 'hover:bg-cyan-800'; // Darker cyan for hover effects
  const lightBgColor = 'bg-cyan-50'; // Very light cyan for backgrounds

  // New Light Blue/Teal background style for the Hero Section
  const heroBackgroundStyle = {
    // Custom gradient inspired by the minimal design (light blue/green)
    backgroundImage: `linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)`, 
    height: '90vh',
    minHeight: '750px',
  };
  
  // Custom Styles for other elements (e.g., Stats/Focus block)
  const focusBorderColor = 'border-cyan-500';
  const focusAccentColor = 'text-cyan-700';
  const focusStatBorder = 'border-amber-500/80'; // Keeping stats border red for high contrast/medical warning association

  return (
    <div className="min-h-screen bg-gray-50 font-raleway antialiased">

      {/* 1. Navigation Bar (Adjusted for light background) */}
      <header className="absolute top-0 left-0 w-full z-30 py-4 lg:py-6 px-4 sm:px-8 lg:px-16">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo - NAME & COLOR CHANGE */}
          <div className="flex items-center space-x-3">
            <Stethoscope className={`w-8 h-8 ${primaryColor}`} strokeWidth={1.8} /> 
            <span className="font-playfair text-xl font-extrabold text-gray-800">
              <span className={primaryColor}>{DOCTOR_NAME.split(' ')[1]}</span> Health
            </span>
          </div>

          {/* Desktop Links (Uses updated navLinks) - COLOR CHANGE */}
          <div className="hidden lg:flex items-center space-x-8 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-raleway text-gray-700 hover:${primaryColor} transition duration-200 relative group`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 w-0 h-[2px] ${accentBg} transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
            <button className={`font-playfair ${accentBg} text-white px-6 py-2 rounded-full shadow-lg ${accentHover} transition duration-300 transform hover:scale-[1.02] active:scale-95`}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button (omitted for brevity) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-4 transition-all duration-300 ease-in-out">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-raleway block px-8 py-3 text-gray-700 hover:bg-cyan-50 hover:${primaryColor} font-medium transition border-b border-gray-100 last:border-b-0`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-8 pt-4">
              <button className={`font-playfair w-full ${accentBg} text-white px-5 py-2 rounded-full shadow-lg ${accentHover} transition duration-300`}>
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section - NEW MINIMAL DESIGN (Keeping the previous implementation) */}
      <section className="relative overflow-hidden" style={heroBackgroundStyle}>
        {/* Abstract shapes/patterns inspired by the minimal design */}
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Simple heart pattern in the background */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Heart className={`w-10 h-10 ${secondaryColor}`} style={{ position: 'absolute', top: '5%', left: '20%', opacity: 0.1 }} />
                <Droplet className={`w-8 h-8 ${secondaryColor}`} style={{ position: 'absolute', bottom: '10%', left: '40%', opacity: 0.15 }} />
                <Activity className={`w-12 h-12 ${secondaryColor}`} style={{ position: 'absolute', top: '50%', right: '5%', opacity: 0.1 }} />
            </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center pt-24 pb-12 px-4 sm:px-8 lg:px-16 z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full items-center justify-between">
            
            {/* Left Content Area (Text and Buttons) */}
            <div className="w-full lg:w-1/2 xl:w-[55%] order-2 lg:order-1 mt-12 lg:mt-0 lg:text-left text-center">
                
                {/* Custom medical icon line */}
                <div className="mb-6 flex justify-center lg:justify-start">
                    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={primaryColor}>
                        <path d="M5 15H11.5L16 5L24.5 25L30 15H115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="5" cy="15" r="4" fill="currentColor"/>
                        <circle cx="115" cy="15" r="4" fill="currentColor"/>
                    </svg>
                </div>
                
                <p className="font-raleway text-sm uppercase tracking-[.2em] text-gray-700 font-semibold mb-2">
                    Expert Diabetes Management & Endocrine Care
                </p>
                {/* Reduced Heading Size (text-4xl/5xl) */}
                <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    Your Top Choice for the <span className={primaryColor}>Best Diabetologist</span> Near Me in Kolkata
                </h1>
                <h2 className="font-raleway text-lg sm:text-xl font-medium text-gray-700 mb-8">
                    {DOCTOR_NAME}, <span className='font-normal'>Expert {SPECIALIZATION} & Diabetes Specialist</span>
                </h2>
                <div className='flex space-x-4 justify-center lg:justify-start'>
                    <button className={`font-playfair ${accentBg} text-white font-semibold px-8 py-3 rounded-full shadow-lg ${accentHover} transition duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center space-x-2`}>
                        <span>BOOK APPOINTMENT</span>
                        <span className="text-xl leading-none">→</span>
                    </button>
                    <a href="#" className={`font-raleway flex items-center space-x-2 text-gray-700 font-medium hover:${primaryColor} transition duration-300`}>
                        <Phone size={20} className={primaryColor}/>
                        <span>Call Us</span>
                    </a>
                </div>
            </div>
            
            {/* Right Content Area (Image and Stat) */}
            <div className="w-full lg:w-1/2 xl:w-[45%] flex justify-center lg:justify-end order-1 lg:order-2 mt-12 lg:mt-0">
                
                {/* Circular Image Container with border and shadow */}
                <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] relative rounded-full overflow-hidden shadow-2xl border-4 border-white">
                    <img
                        src={doctorImage}
                        alt={`${DOCTOR_NAME}, Best ${SPECIALIZATION} in ${LOCATION}`}
                        className="w-full h-full object-cover object-top filter brightness-[1.05]"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/228B93/ffffff?text=Doctor+Ghosh"; }}
                    />
                    
                    {/* Floating Stat Card (Repositioned to the side/bottom for minimal design) */}
                    <div className="absolute -bottom-4 right-1/2 translate-x-1/2 lg:-right-4 lg:bottom-10 lg:translate-x-0 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center space-x-2 border border-gray-100">
                        <Droplet className={`w-5 h-5 ${primaryColor}`} /> 
                        <span className="font-playfair text-sm font-bold text-gray-800">10,000+ Patients Treated</span>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Services Section - STYLED WITH NEW COLORS */}
      <section id="services" className="relative mt-12 z-30 px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid: Focus Block (Left) and Services Grid (Right) */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">
            
            {/* Left Column: Focus Text and Stats */}
            <div className="lg:col-span-1 mb-10 lg:mb-0 pt-6 lg:pt-0">
                
                {/* Section Title - COLOR CHANGE */}
                <div className="mb-8 lg:text-left text-center">
                    <p className={`font-raleway text-sm uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                        Our Specialized Diabetes Care
                    </p>
                    <h2 className="font-playfair text-3xl sm:text-4xl font-extrabold text-gray-800">
                        <span className={primaryColor}>My Core</span> Focus
                    </h2>
                </div>

                {/* Main Focus Text (From user's data) - COLOR CHANGE */}
                <p className={`font-raleway text-lg text-gray-700 leading-relaxed mb-8 border-l-4 ${focusBorderColor} pl-4 ${lightBgColor} p-4 shadow-lg rounded-xl`}>
                    Optimizing Diabetes Health and Management - Your Top Choice for the **Best Diabetologist Near Me in Kolkata**.
                </p>

                {/* Stats Section - COLOR CHANGE */}
                <div className="flex flex-col space-y-4">
                    {focusStats.map((stat, index) => (
                        <div key={index} className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-xl border-b-4 ${focusStatBorder}`}>
                            {/* Retaining red for high-contrast warnings/settings-related icons */}
                            <stat.icon size={36} strokeWidth={1.5} className="text-red-600 flex-shrink-0" /> 
                            <div>
                                <p className="font-playfair text-3xl font-extrabold text-gray-900">{stat.value}</p>
                                <p className="font-raleway text-sm uppercase tracking-wider text-gray-600 font-semibold">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Detailed Services Grid - USES UPDATED ServiceCard */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {detailServices.map((service, index) => (
                  <div key={index} className="h-full">
                    {/* Passing the primaryColor variable is not strictly necessary here, 
                        as I've updated the ServiceCard component itself to use 'cyan-500' etc. */}
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
          
      {/* 4. About Section - STYLED WITH NEW COLORS */}
      <section className="bg-white text-gray-900 py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto border border-gray-300 p-0">
          
          {/* Section Header - COLOR CHANGE */}
          <div className={`flex justify-between items-center px-8 py-4 border-b border-gray-300 ${lightBgColor}`}>
            <h2 className={`font-playfair text-2xl font-extrabold ${primaryColor}`}>
              About {DOCTOR_NAME}
            </h2>
            <span className="font-raleway text-sm font-medium uppercase text-gray-500">
              Expert {SPECIALIZATION}, {LOCATION}
            </span>
          </div>

          {/* Main Content Grid: Text (Left) and Image (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Text Content and Details - COLOR CHANGE */}
            <div className="p-8 space-y-8 lg:border-r border-gray-300">
              
              {/* Main Biography Block */}
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-gray-800">
                  {bioContent.mainTitle}.
                </h3>
                <p className="font-raleway text-base text-gray-700 leading-relaxed">
                  {bioContent.paragraph1}
                </p>
                <p className="font-raleway text-base text-gray-700 leading-relaxed">
                  {bioContent.paragraph2}
                </p>
              </div>
              
              {/* Secondary Details Block (Education/Affiliations) - COLOR CHANGE */}
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <h4 className="font-playfair text-lg font-bold text-gray-800 uppercase tracking-widest">
                  {bioContent.affiliationsTitle}
                </h4>
                <p className="font-raleway text-sm text-gray-700 leading-relaxed">
                  {bioContent.affiliationsText}
                </p>
              </div>
              
              {/* Appointment/Consultation Block - COLOR CHANGE */}
              <div className="space-y-6">
                <h4 className="font-playfair text-lg font-bold text-gray-800 uppercase tracking-widest">
                  {bioContent.educationTitle}
                </h4>
                
                {/* Appointment Card */}
                <div className="flex items-start space-x-4">
                  <ClipboardList size={24} className={primaryColor} />
                  <div>
                    <p className="font-playfair font-bold text-gray-900">Booking an Appointment</p>
                    <p className="font-raleway text-sm text-gray-600">
                      Easily book your appointment for a convenient and timely consultation with our Diabetologist in Kolkata.
                    </p>
                  </div>
                </div>
                
                {/* Online Consultation Card */}
                <div className="flex items-start space-x-4">
                  <Zap size={24} className={primaryColor} />
                  <div>
                    <p className="font-playfair font-bold text-gray-900">Online Consultation</p>
                    <p className="font-raleway text-sm text-gray-600">
                      Convenient virtual platform connecting patients to Dr. Ghosh for expert diabetes advice and management consultation online.
                    </p>
                  </div>
                </div>
                
                {/* Call to Action - COLOR CHANGE */}
                <a href="#" className={`font-playfair inline-flex mt-4 text-white ${accentBg} ${accentHover} font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.02]`}>
                  Call For Appointment <Phone size={16} className="ml-2" />
                </a>
              </div>
              
            </div>

            {/* Right Column: Dummy Image Placeholder - ALT TEXT CHANGE */}
            <div className="h-96 lg:h-full overflow-hidden">
              <img
                src={doctorImage2} // Dummy image placeholder
                alt={`${DOCTOR_NAME} Professional Profile, ${SPECIALIZATION} Expert`}
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.1]"
              />
            </div>
          </div>
          
          {/* Footer Branding - NAME CHANGE */}
          <div className={`flex justify-between items-center px-8 py-4 border-t border-gray-300 ${lightBgColor} text-sm`}>
            <div className="font-raleway text-gray-700 space-x-4">
              <a href="#" className={`hover:${primaryColor}`}>INSTAGRAM</a>
              <a href="#" className={`hover:${primaryColor}`}>FACEBOOK</a>
            </div>
            <p className="font-raleway text-gray-500">© {DOCTOR_NAME}</p>
          </div>

        </div>
      </section>
      
      {/* 5. Contact Info Footer Section - STYLED WITH NEW COLORS */}
      <footer className={`${accentBg} py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-white text-center sm:flex sm:justify-between sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <MapPin size={20} />
            <p className="font-raleway text-sm font-medium">{LOCATION}, West Bengal</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <Mail size={20} />
            <p className="font-raleway text-sm font-medium">contact@drprattayghosh.com</p> {/* Changed Email */}
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Phone size={20} />
            <p className="font-raleway text-sm font-medium">+91-99887-76655</p> {/* Changed Phone */}
          </div>
        </div>
      </footer>
      
      {/* Copyright Footer - NAME CHANGE (Keeping this dark gray for contrast) */}
      <div className="py-4 bg-gray-900 text-center text-gray-400">
          <p className="font-raleway text-xs">© {new Date().getFullYear()} {DOCTOR_NAME}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;