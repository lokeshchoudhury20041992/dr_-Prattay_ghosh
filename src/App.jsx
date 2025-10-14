import React, { useState } from 'react';
import {
    Menu, X, Heart, Stethoscope, Settings,
    Syringe, Baby, Users, Microscope,
    MapPin, Phone, Mail, FileText,
    ClipboardList, CheckCircle, Zap,
    Droplet, Scale, Activity, Brain
} from 'lucide-react'; 

// --- Import Local Image ---
import doctorImage from './assets/profile_2.jpg'; 
import doctorImageFull from './assets/profile_1.jpg'; // Using this for the full image in Section 4


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



// --- DESIGN VARIABLES (Matching the Designer Portfolio Image Style) ---
const LIGHT_BG = "bg-indigo-50/50"; // Light lavender background
const CARD_BG = "bg-white"; // White card background
const ACCENT_COLOR_TEXT = "text-indigo-600"; // Primary accent color for text
const ACCENT_COLOR_HOVER = "hover:bg-indigo-700"; // Darker hover state for button
const BUTTON_BG = "bg-indigo-600"; // Primary button color
const RED_ICON_BG = "bg-red-600"; // Icon background for services

// --- Color Palette from the original template (used in the Hero and Services sections) ---
const primaryColor = 'text-cyan-700'; // Darker cyan for main text elements
const secondaryColor = 'text-cyan-500'; // Medium cyan for patterns/secondary text
const accentBg = 'bg-cyan-700'; // Dark cyan background for buttons/footer
const accentHover = 'hover:bg-cyan-800'; // Darker cyan for hover effects
const lightBgColor = 'bg-cyan-50'; // Very light cyan for backgrounds
const darkSideBg = 'bg-cyan-900'; // Dark Navy/Blue for the left side
const focusStatBorder = 'border-amber-500/80'; 


const doctorData = {
    name: "Dr. Prattay Ghosh",
    specialization: "Trusted Diabetologist",
    location: "Kolkata",
    contact: "prattay.ghosh@clinic.com", // Dummy email, not provided
    phone: "98765 43210", // Dummy phone, not provided
    introBio: "Dr. Prattay Ghosh is your trusted diabetes doctor. The ultimate ‘Diabetologist Near Me’ for personalized diabetes management and overall health.",
    mainBio: [
        "Embark on a transformative journey of diabetes care with Dr. Prattay Ghosh, a highly regarded diabetologist in Kolkata. Recognized as the best diabetes doctor in Kolkata, Dr. Ghosh specializes in delivering personalized care tailored to various diabetes types, including type 1, type 2, and gestational diabetes.",
        "Dr. Prattay Ghosh, a leader in the field, employs advanced techniques like insulin pump therapy and continuous glucose monitoring (CGM) to craft precise treatment plans. His exceptional reputation is rooted in the positive experiences of over 10,000 satisfied patients who have benefited profoundly from his expert care.",
    ],
    expertise: "Advanced Techniques (Insulin Pump Therapy & CGM)",
    collaboration: "Collaborating with Dr. Ankita Mandal, Dr. Prattay Ghosh extends comprehensive diabetes care, even for expectant mothers dealing with gestational diabetes mellitus (GDM).",
    services: [
        { title: "Body Composition and BMI Analysis", subtitle: "Understanding Your Health Body composition" },
        { title: "Diabetes Management", subtitle: "Effective Diabetes Management Tips by Dr. Prattay Ghosh, the Best Diabetes Doc" },
        { title: "Management of Complication of Diabetes", subtitle: "The Best Doctor for Management of Complications of Di..." },
    ],
    // Image placeholder
    doctorImage: 'profile_2.jpg'
};

// Data for the detailed Service Cards (Section 3)
const detailServices = [
    {
        icon: Droplet, // Icon for blood/diabetes
        title: 'Diabetes Management',
        description: "Effective Diabetes Management: Personalized plans for Type 1, Type 2, and Gestational Diabetes, including insulin pump therapy.",
        image: 'https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/diabetes-and-glucose-metabolism/diabetes_treatments_pe_1796x9432.jpg' // Placeholder URL
    },
    {
        icon: Activity, // Icon for monitoring/progress
        title: 'Management of Complications',
        description: "Expert care for complications of diabetes such as neuropathy, retinopathy, and kidney issues to preserve long-term health.",
        image: 'https://www.easyclinic.io/wp-content/uploads/2025/09/empty-doctor-office-with-computer-having-anatomical-body-skeleton-radiography-computer-screen-clinical-consultation-hospital-room-equipped-with-professional-medical-tools-medicine-concept-1-scaled.jpg' // Placeholder URL
    },
    {
        icon: Scale, // Icon for weight/body
        title: 'Body Composition Analysis',
        description: "Precise Body Composition and BMI Analysis: Understanding your health profile to tailor effective, comprehensive treatment strategies.",
        image: 'https://madebydiet.com/eu/wp-content/uploads/sites/2/2025/02/Same-height-and-weight-EN-scaled.webp' // Placeholder URL
    },
    {
        icon: Users, // Icon for community/support
        title: 'Diabetes Education & Support',
        description: "Beyond treatment, we provide crucial diabetes education and support groups to empower you in managing your condition.",
        image: 'https://www.iowaspecialtyhospital.com/media/cms/diabetes_education_498CCDB28FD5F.png' // Placeholder URL
    },
];

// Data for the Left Stats/Focus Block - ADJUSTED STATS
const focusStats = [
    { value: '15+', label: 'Years Experience', icon: Settings }, // Changed from 12+
    { value: '10K+', label: 'Satisfied Patients', icon: CheckCircle }, // Changed from 5K+
];


// --- Components (ServiceCard updated for new design) ---

const ServiceCard = ({ index, icon: Icon, title, description, image, primaryColor }) => (
    <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
        {/* Left: Number and Icon/Title/Description */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
            <h3 className={`font-playfair text-6xl font-extrabold mb-4 ${primaryColor}`}>
                {index}.
            </h3>
            <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200`}>
                    <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-playfair text-gray-900 font-bold text-xl">{title}</h4>
            </div>
            <p className="font-raleway text-base text-gray-600 leading-relaxed border-l-2 border-cyan-100 pl-4">
                {description}
            </p>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 h-56 overflow-hidden rounded-xl shadow-md">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/333333?text=Image+Missing"; }}
            />
        </div>
    </div>
);


/**
 * Main application component.
 */
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Set fixed height for visual split
    const heroHeight = 'min-h-[90vh] lg:min-h-[85vh]'; 
    
    return (
        <div className="min-h-screen bg-gray-50 font-raleway antialiased">

            {/* 1. Navigation Bar */}
            <header className="sticky top-0 left-0 w-full z-30 py-4 lg:py-6 px-4 sm:px-8 lg:px-16 bg-white/90 backdrop-blur-sm shadow-md">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Stethoscope className={`w-8 h-8 ${primaryColor}`} strokeWidth={1.8} /> 
                        <span className="font-playfair text-xl font-extrabold text-gray-900"> 
                            <span className={`${primaryColor}`}>{DOCTOR_NAME.split(' ')[1]}</span> Health
                        </span>
                    </div>

                    {/* Desktop Links */}
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
                        <button className={`font-playfair ${BUTTON_BG} text-white px-6 py-2 rounded-full shadow-lg ${ACCENT_COLOR_HOVER} transition duration-300 transform hover:scale-[1.02] active:scale-95`}>
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 rounded-lg text-gray-900 hover:${primaryColor} transition`}
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
            
            {/* START: Hero Section */}
            <div className="relative">
                <section className={`relative overflow-hidden ${heroHeight} flex`}>
                    {/* Left Side: Dark Blue/Navy (Contains all text) */}
                    <div className={`w-full lg:w-1/2 ${darkSideBg} relative flex flex-col justify-center items-center p-8 lg:p-16`}>
                        
                        {/* 1. Large Stylized Icon (Stethoscope/Chart Line) - White for contrast */}
                        <Activity size={80} strokeWidth={1} className="text-white opacity-20 absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden" />
                        <Stethoscope size={64} strokeWidth={1} className="text-white opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden" />

                        <div className="relative z-10 text-center lg:text-right w-full">
                            
                            {/* Primary Headline (Your Diabetes) */}
                            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-[7rem] font-extralight text-white leading-none mb-2 mt-20 lg:mt-0">
                                Your Diabetes
                            </h1>
                            
                            {/* Doctor's Name & Title (Smaller, White) */}
                            <p className="font-raleway text-xl sm:text-2xl font-medium text-white/90 mb-6 uppercase tracking-widest">
                                {DOCTOR_NAME}
                            </p>
                            
                            {/* Secondary Headline (Expert.) MOVED TO DARK SIDE */}
                            <h1 className={`font-playfair text-6xl sm:text-7xl lg:text-[7rem] font-extrabold text-white leading-none mb-4 lg:pt-0`}> 
                                Expert<span className={secondaryColor}>.</span>
                            </h1>
                            
                        </div>
                    </div>
                    
                    {/* Right Side: Image background with overlaid content */}
                    <div className={`w-full lg:w-1/2 bg-white relative flex flex-col justify-center items-center`}>
                        
                        {/* Image Container (Fills the entire right panel) */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
                            <img
                                src={doctorImage}
                                alt={`${DOCTOR_NAME}, ${SPECIALIZATION} Expert`}
                                className="w-full h-full object-contain filter brightness-[0.85] transition duration-500 hover:brightness-[0.9]"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/228B93/ffffff?text=Doctor+Ghosh"; }}
                            />
                             {/* Optional dark overlay for better text contrast */}
                             <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>

                        {/* Overlaid Content Container */}
                        <div className="relative z-10 w-full p-8 lg:p-16 flex flex-col justify-end items-center text-center h-full">
                            
                            {/* Wrapper for CTA and Info (Aligns them to the bottom, below the main image area) */}
                            <div className="w-full max-w-sm lg:max-w-xl mt-auto mb-0 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl"> 
                                
                                {/* Info List */}
                                <div className="space-y-3 w-full mb-6">
                                    {/* 10,000+ Patients Treated in Kolkata */}
                                    <div className="flex items-center space-x-2 justify-center"> 
                                        <Droplet size={20} className={primaryColor}/>
                                        <p className="font-raleway text-base uppercase tracking-wider text-gray-700 font-medium">
                                            10,000+ Patients Treated in {LOCATION}
                                        </p>
                                    </div>
                                    
                                    {/* Personalized Type 2 Diabetes management */}
                                    <div className="flex items-center space-x-2 justify-center">
                                        <Stethoscope size={20} className={primaryColor} />
                                        <p className="text-gray-700 font-raleway text-base text-left">
                                            Personalized Type 2 Diabetes management
                                        </p>
                                    </div>
                                    
                                    {/* In-Clinic and Online Consultations available. */}
                                    <div className="flex items-center space-x-2 justify-center">
                                        <MapPin size={20} className={primaryColor} />
                                        <p className="text-gray-700 font-raleway text-base text-left">
                                            In-Clinic and Online Consultations available.
                                        </p>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full"> 
                                    <button className={`font-playfair w-full ${accentBg} text-white font-semibold px-8 py-3 rounded-full shadow-lg ${accentHover} transition duration-300 transform hover:scale-[1.02]`}>
                                        BOOK APPOINTMENT
                                    </button>
                                    <a href="#" className={`font-raleway flex items-center justify-center space-x-2 text-gray-700 font-medium hover:${primaryColor} transition duration-300 border border-gray-300 px-6 py-3 rounded-full hover:shadow-md bg-white w-full`}> 
                                        <Phone size={20} className={primaryColor}/>
                                        <span>Call for Consultation</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            {/* END: Hero Section */}

            {/* 3. Key Services Section */}
            <section id="services" className="relative mt-12 z-30 px-4 sm:px-8 lg:px-16 pb-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Centralized Section Title & Intro */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Our Specialized Diabetes Care
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            How I Can <span className={primaryColor}>Help You Thrive</span>
                        </h2>
                        <p className={`font-raleway text-lg text-gray-700 leading-relaxed`}>
                            Optimizing Diabetes Health and Management - Your Top Choice for the **Best Diabetologist Near Me in Kolkata**.
                        </p>
                    </div>

                    {/* Service Cards (Redesigned as numbered blocks) */}
                    <div className="grid grid-cols-1 gap-10">
                        {detailServices.map((service, index) => (
                            <ServiceCard 
                                key={index} 
                                index={index + 1} 
                                {...service} 
                                primaryColor={primaryColor} 
                            />
                        ))}
                    </div>

                    {/* Stats Section (Moved below the main service cards for distinction) */}
                    <div className="mt-16 pt-10 border-t border-gray-200">
                        <h3 className={`font-playfair text-2xl font-bold text-gray-800 mb-6 text-center`}>
                            My Professional <span className={primaryColor}>Experience</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                            {focusStats.map((stat, index) => (
                                <div key={index} className={`flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg border-b-4 ${focusStatBorder} transform hover:scale-[1.03] transition duration-300`}>
                                    <stat.icon size={36} strokeWidth={1.5} className="text-red-600 flex-shrink-0" /> 
                                    <div>
                                        <p className="font-playfair text-3xl font-extrabold text-gray-900">{stat.value}</p>
                                        <p className="font-raleway text-sm uppercase tracking-wider text-gray-600 font-semibold">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 4. About Section - REDESIGNED TO MATCH PORTFOLIO IMAGE STYLE (USING FULL IMAGE) */}
            <section className={`${LIGHT_BG} text-gray-800 py-16 px-4 sm:px-8 lg:px-16`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-full lg:items-start">
                    
                    {/* LEFT CARD: PROFILE & CALL TO ACTION (Image and Contact) */}
                    <div className={`lg:col-span-1 ${CARD_BG} rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-between lg:h-full`}>
                        
                        {/* Profile Image Container */}
                        <div className="relative w-full overflow-hidden h-[40vh] lg:h-[45%]">
                            <img
                                src={doctorImageFull} // image_e1aa96.jpg/profile_1.jpg
                                alt={`${doctorData.name} - ${doctorData.specialization}`}
                                className="w-full h-full object-cover object-top filter grayscale contrast-125 shadow-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/333333/ffffff?text=Profile+Image"; }}
                            />
                        </div>
                        
                        {/* Contact Info & CTA (Below the image) */}
                        <div className="text-center w-full p-8">
                            <h3 className="font-playfair text-2xl font-bold mb-1">
                                {doctorData.name}
                            </h3>
                            <p className={`font-raleway font-medium text-sm text-gray-500`}>
                                {doctorData.specialization} | {doctorData.location}
                            </p>
                            <p className={`font-raleway ${ACCENT_COLOR_TEXT} font-semibold text-sm mt-2`}>
                                {doctorData.contact}
                            </p>

                            {/* Call to Action Button */}
                            <a href={`tel:${doctorData.phone}`} className={`font-raleway inline-flex items-center mt-6 ${BUTTON_BG} text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 ${ACCENT_COLOR_HOVER} transform hover:scale-[1.02]`}>
                                Call for Consultation <Phone size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>

                    
                    {/* RIGHT COLUMN: BIO, EXPERTISE, & SERVICES (Three Cards Stacked) */}
                    <div className="lg:col-span-2 space-y-8 flex flex-col lg:h-full">
                        
                        {/* CARD 1 (TOP): ABOUT ME / MAIN BIO */}
                        <div className={`${CARD_BG} rounded-3xl shadow-xl p-8 flex-grow`}>
                            <h2 className="font-playfair text-2xl font-extrabold mb-4">
                                About Dr. Ghosh
                            </h2>
                            {/* Short Intro */}
                            <p className={`font-raleway font-semibold text-lg text-gray-700 mb-6`}>
                                {doctorData.introBio}
                            </p>
                            {/* Main Bio Content (First paragraph) */}
                            <p className="font-raleway text-base text-gray-700 leading-relaxed">
                                {doctorData.mainBio[0]}
                            </p>
                        </div>
                        
                        {/* CARD 2 (MIDDLE): ADVANCED EXPERTISE AND COLLABORATION (New Card) */}
                        <div className={`${CARD_BG} rounded-3xl shadow-xl p-8 flex-grow`}>
                            <h3 className="font-playfair text-xl font-bold mb-4 flex items-center">
                                <Stethoscope size={20} className={`mr-2 ${ACCENT_COLOR_TEXT}`} />
                                Advanced Expertise & Collaboration
                            </h3>
                            {/* Second paragraph of main bio (Moved here for separation) */}
                            <p className="font-raleway text-base text-gray-700 leading-relaxed mb-4">
                                {doctorData.mainBio[1]}
                            </p>

                            {/* Key Fact/Collaboration */}
                            <p className="font-raleway mt-4 text-sm font-medium text-gray-600 border-l-4 border-indigo-400 pl-3 pt-1 pb-1">
                                <span className='font-semibold'>Collaboration:</span> {doctorData.collaboration}
                            </p>
                        </div>
                        
                        {/* CARD 3 (BOTTOM): SERVICES & WHY CHOOSE */}
                        <div className={`${CARD_BG} rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow`}>
                            
                            {/* Core Services */}
                            <div>
                                <h3 className="font-playfair text-xl font-bold mb-4">Core Services</h3>
                                <div className="space-y-4">
                                    {doctorData.services.map((service, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-md ${RED_ICON_BG} text-white flex items-center justify-center mt-1`}>
                                                <ClipboardList size={16}/>
                                            </div>
                                            <div>
                                                <p className="font-raleway font-semibold text-gray-900">{service.title}</p>
                                                <p className="font-raleway text-xs text-gray-500">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Diabetes Education & Support */}
                            <div>
                                <h3 className="font-playfair text-xl font-bold mb-4">Diabetes Education & Support</h3>
                                <div className="space-y-5">
                                    <div className='flex items-start space-x-3'>
                                        <CheckCircle size={20} className={ACCENT_COLOR_TEXT} />
                                        <p className='font-raleway text-sm text-gray-700'>
                                            <span className='font-semibold'>Empowerment:</span> Prioritizing education and support for active health management.
                                        </p>
                                    </div>
                                    <div className='flex items-start space-x-3'>
                                        <Zap size={20} className={ACCENT_COLOR_TEXT} />
                                        <p className='font-raleway text-sm text-gray-700'>
                                            <span className='font-semibold'>Advanced Tech:</span> Using techniques like Insulin Pump Therapy and CGM for precise treatment.
                                        </p>
                                    </div>
                                    <div className='flex items-start space-x-3'>
                                        <Users size={20} className={ACCENT_COLOR_TEXT} />
                                        <p className='font-raleway text-sm text-gray-700'>
                                            <span className='font-semibold'>Community:</span> Join a Diabetic Support Group to connect with others.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 5. Contact Info Footer Section */}
            <footer className={`${accentBg} py-6`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-white text-center sm:flex sm:justify-between sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
                        <MapPin size={20} />
                        <p className="font-raleway text-sm font-medium">{LOCATION}, West Bengal</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
                        <Mail size={20} />
                        <p className="font-raleway text-sm font-medium">contact@drprattayghosh.com</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <Phone size={20} />
                        <p className="font-raleway text-sm font-medium">+91-99887-76655</p>
                    </div>
                </div>
            </footer>
            
            {/* Copyright Footer */}
            <div className="py-4 bg-gray-900 text-center text-gray-400">
                <p className="font-raleway text-xs">© {new Date().getFullYear()} {DOCTOR_NAME}. All rights reserved.</p>
            </div>
        </div>
    );
};

export default App;