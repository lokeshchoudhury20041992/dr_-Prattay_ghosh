import React, { useState, useEffect } from 'react';
import {
    Menu, X, Heart, Stethoscope, Settings,
    Syringe, Users,
    MapPin, Phone, Mail,
    ClipboardList, CheckCircle, Zap,
    Droplet, Scale, Activity,
    CalendarCheck, GraduationCap, Star, Lightbulb, BookOpen, Clock, Globe, ArrowRight, Briefcase,
    ChevronDown, ChevronUp // Ensure these are explicitly destructured
} from 'lucide-react';

// --- External Appointment Link ---
const APPOINTMENT_URL = "https://maatritvaivffertility.com/appointment";

// --- Import Local Image (assuming these exist in the user's project) ---
import doctorImage from './assets/profile_2.jpg';
import doctorImageFull from './assets/profile_1.jpg'; // Using this for the full image in Section 4
import doctorImage3 from './assets/profile_3.png'
// --- DESIGN VARIABLES (Consistent Cyan/Navy Theme) ---
const primaryColor = 'text-cyan-700'; // Darker cyan for main text elements
const secondaryColor = 'text-cyan-500'; // Medium cyan for patterns/secondary text
const accentBg = 'bg-cyan-700'; // Dark cyan background for buttons/footer
const accentHover = 'hover:bg-cyan-800'; // Darker cyan for hover effects
const lightBgColor = 'bg-cyan-50'; // Very light cyan for backgrounds
const darkSideBg = 'bg-cyan-900'; // Dark Navy/Blue for the left side
const focusStatBorder = 'border-amber-500/80';

// --- Updated Data for Dr. Prattay Ghosh (from content) ---
const DOCTOR_NAME = "Dr. Prattay Ghosh";
const SPECIALIZATION = "Diabetologist";
const LOCATION = "Kolkata";

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Me', href: '#why-choose' }, 
    { name: 'Services', href: '#services' },
    { name: 'Qualifications', href: '#qualifications' },
    { name: 'Clinics', href: '#our-clinics' }, 
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
];

const doctorData = {
    name: "Dr. Prattay Ghosh",
    specialization: "Trusted Diabetologist",
    location: "Kolkata",
    phone: "+917679944040",
    contactEmail: "drprattayghoshkol@gmail.com",
    introBio: "Dr. Prattay Ghosh is your trusted diabetes doctor. The ultimate ‘Diabetologist Near Me’ for personalized diabetes management and overall health.",
    mainBio: [
        "Embark on a transformative journey of diabetes care with Dr. Prattay Ghosh, a highly regarded diabetologist in Kolkata. Recognized as the best diabetes doctor in Kolkata, Dr. Ghosh specializes in delivering personalized care tailored to various diabetes types, including type 1, type 2, and gestational diabetes.",
        "Dr. Prattay Ghosh, a leader in the field, employs advanced techniques like insulin pump therapy and continuous glucose monitoring (CGM) to craft precise treatment plans. His exceptional reputation is rooted in the positive experiences of over 10,000 satisfied patients who have benefited profoundly from his expert care.",
    ],
    collaboration: "Collaborating with Dr. Ankita Mandal, Dr. Prattay Ghosh extends comprehensive diabetes care, even for expectant mothers dealing with gestational diabetes mellitus (GDM).",
    services: [
        { title: "Body Composition and BMI Analysis", subtitle: "Understanding Your Health Body composition" },
        { title: "Diabetes Management", subtitle: "Effective Diabetes Management Tips by Dr. Prattay Ghosh" },
        { title: "Management of Complication of Diabetes", subtitle: "The Best Doctor for Management of Complications" },
        { title: "Personalised Obesity Management", subtitle: "A More Effective Approach to Weight Loss" },
        { title: "Hypo/Hyperthyroidism", subtitle: "Treatment for two common thyroid disorders" },
        { title: "Thyroid & Parathyroid disorders Treatment", subtitle: "Typically involves medication, surgery, and management" },
    ],
    qualifications: [
        { degree: "MBBS", institution: "Reputed College in India", icon: GraduationCap },
        { degree: "MD (Medicine)", institution: "Reputed College in India", icon: GraduationCap },
        { degree: "PGDCC (Clinical Cardiology)", institution: "Apollo Hospital, Kolkata", icon: Heart },
        { degree: "Post Graduate Diploma (Clinical Endocrinology and Diabetes)", institution: "Royal College of Physicians, UK", icon: Syringe },
        { degree: "Advanced Training (Diabetes & Complications)", institution: "CMC Vellore", icon: Droplet },
        { degree: "Advanced Training (Critical Care Medicine)", institution: "Reputed Institutions", icon: Activity },
    ],
    whyChoose: [
        { title: "Advanced Expertise", description: "Utilizing Insulin Pump Therapy and CGM for accurate and modern treatment plans.", icon: Zap },
        { title: "10K+ Satisfied Patients", description: "Proven track record with thousands of successful patient journeys in Kolkata.", icon: Users },
        { title: "Holistic & Personalized Care", description: "Focus on patient education, support groups, and tailored treatment for all diabetes types.", icon: Heart },
    ]
};

// Data for the detailed Service Cards 
const detailServices = [
    {
        icon: Droplet,
        title: 'Diabetes Management',
        description: "Personalized plans for Type 1, Type 2, and Gestational Diabetes, including advanced techniques like Insulin Pump Therapy.",
        image: 'https://sunrisediagnosis.com/wp-content/uploads/2023/09/Sunrise-Diabetic-Management.jpg'
    },
    {
        icon: Activity,
        title: 'Complications Management',
        description: "Expert care for complications like neuropathy, retinopathy, and diabetic foot ulcers to preserve long-term health and well-being.",
        image: 'https://img.freepik.com/free-vector/diabetes-complications-treatment-medical-infographic-with-explicit-patient-symptoms-images-medication-icons-flat_1284-28996.jpg'
    },
    {
        icon: Scale,
        title: 'Obesity & Thyroid Care',
        description: "Comprehensive endocrinological services including Personalized Obesity Management and treatment for Hypo/Hyperthyroidism.",
        image: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2586637.jpg'
    },
    {
        icon: Users,
        title: 'Education & Support',
        description: "Prioritizing patient education and support, offering Diabetic Support Groups and knowledge to empower self-management.",
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Esp_logo_2019.png'
    },
];

// Data for the Left Stats/Focus Block
const focusStats = [
    { value: '15+', label: 'Years Experience', icon: Settings },
    { value: '10K+', label: 'Satisfied Patients', icon: CheckCircle },
];

// Clinic Data
const clinicData = [
    { name: "SURAKSHA DIAGNOSTICS (KASBA)", address: "1582, Southend Conclave, 1, Rajdanga Main Rd, Kasba New Market, Sector E, East Kolkata Twp, Kolkata, West Bengal 700107", phone: "76799 44040" },
    { name: "APOLLO CLINIC (NEWTOWN)", address: "Apollo Clinic The Galleria, 1B, Street Number 124, BG Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700156", phone: "076799 44040" },
    { name: "APOLLO CLINIC (KANKURGACHI)", address: "Apollo Clinic, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054", phone: "76799 44040" },
    { name: "APOLLO CLINIC (BELEGHATA)", address: "A, Hem Chandra Naskar Rd, Topas Sarobar Park, Phool Bagan, Beleghata, Kolkata, West Bengal 700010", phone: "76799 44040" },
];

// Testimonial Data 
const testimonials = [
    {
        id: 1,
        name: "Bi Bi",
        date: "2023-11-18",
        quote: "Choosing Dr. Prattay Ghosh isn’t merely selecting a diabetologist; it’s inviting a guide into your health narrative. His consultations are not just appointments; they are chapters in a book where the main character is your well-being, and the plot revolves around managing diabetes in the vibrant backdrop of Kolkata.",
        image: "https://cdn-kgpnf.nitrocdn.com/DlGXXejZmkNpPPlMPtpDFJtaflBRBDcx/assets/desktop/optimized/rev-cb21f07/lh3.googleusercontent.com/a/ACg8ocIPbkaKPz4oKB2m1h7B1qdVQF8WwaIKF9-e2NcMCQXq=s120-c-rp-mo-br100"
    },
    {
        id: 2,
        name: "Rakesh Ghora",
        date: "2023-10-29",
        quote: "Choosing Dr. Prattay Ghosh as my diabetes doctor in Kolkata was a life-changing decision. His tailored diet guidance has helped me lead a healthier lifestyle.",
        image: "https://cdn-kgpnf.nitrocdn.com/DlGXXejZmkNpPPlMPtpDFJtaflBRBDcx/assets/desktop/optimized/rev-cb21f07/lh3.googleusercontent.com/a/ACg8ocKrjjxikiSiF3Y246nKJQUrEtRznZwSYUUtryVGAgLb=s120-c-rp-mo-br100"
    },
    {
        id: 3,
        name: "Riju Mondal",
        date: "2023-10-21",
        quote: "As a diabetes doctor in Kolkata, Dr. Ghosh's tailored diet guidance has helped me understand the importance of making healthier choices. His regular follow-ups over the phone reflect his dedication to patient well-being.",
        image: "https://cdn-kgpnf.nitrocdn.com/DlGXXejZmkNpPPlMPtpDFJtaflBRBDcx/assets/desktop/optimized/rev-cb21f07/lh3.googleusercontent.com/a-/ALV-UjV5StWWKyGDK0We3Q_U0bsmLf69JHZA7vneepcxAfCRtTE=s120-c-rp-mo-br100"
    },
    {
        id: 4,
        name: "bikhas Roy",
        date: "2023-08-20",
        quote: "As a resident of Kolkata, I can confidently say that Dr. Prattay Ghosh is the best diabetologist in the city. His constant support and personalized approach have transformed my diabetes management.",
        image: "https://placehold.co/120x120/cccccc/333333?text=Bikhas+R" // Placeholder for extra review
    },
];

// FAQ Data 
const faqItems = [
    {
        question: "What types of diabetes does Dr. Ghosh treat?",
        answer: "Dr. Prattay Ghosh specializes in personalized care for various diabetes types, including Type 1, Type 2, and Gestational Diabetes Mellitus (GDM)."
    },
    {
        question: "Does Dr. Ghosh use advanced technology in treatment?",
        answer: "Yes, he employs advanced techniques such as Insulin Pump Therapy and Continuous Glucose Monitoring (CGM) to craft precise and effective treatment plans."
    },
    {
        question: "Where is Dr. Prattay Ghosh located in Kolkata?",
        answer: "Dr. Ghosh provides expert care across Kolkata, including New Town, Salt Lake, Park Street, Behala, Garia, and Howrah, ensuring convenient access to specialist diabetology care."
    },
    {
        question: "Are there support services available for patients?",
        answer: "Yes, Dr. Ghosh strongly promotes patient education and support. Patients are encouraged to join a Diabetic Support Group to connect with a community and enhance their well-being journey."
    }
];

// --- Components ---

const ServiceCard = ({ index, icon: Icon, title, description, image, primaryColor }) => (
    <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
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
 * Testimonial Card Component (ENHANCED with image and Google icon)
 */
const TestimonialCard = ({ quote, name, date, primaryColor, image }) => {
    const displayQuote = quote.length > 150 ? quote.substring(0, 150) + '...' : quote;

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-cyan-500/70 h-full flex flex-col justify-between transform hover:scale-[1.02] transition duration-300">
            <div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="relative flex-shrink-0">
                         {/* Profile Image */}
                        <img 
                            src={image} 
                            alt={`${name} review`} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/cccccc/333333?text=U"; }}
                        />
                        {/* Google Icon Overlay */}
                        <Globe size={16} className="absolute bottom-[-2px] right-[-2px] bg-white text-green-600 rounded-full p-[2px] shadow-sm"/>
                    </div>
                    <div>
                        <p className="font-playfair font-bold text-gray-900 text-md">{name}</p>
                        <p className="font-raleway text-xs text-gray-500">{date}</p>
                    </div>
                </div>

                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                </div>
                <blockquote className="italic text-gray-700 text-base leading-relaxed mb-6">
                    "{displayQuote}"
                </blockquote>
            </div>
            {/* Added Read More link for completeness based on the image */}
            <a href="#" className={`font-raleway text-sm font-semibold ${primaryColor} hover:underline`}>
                Read more <ArrowRight size={14} className="inline ml-1"/>
            </a>
        </div>
    );
};

/**
 * FAQ Item Component (FIXED: ChevronDown/ChevronUp defined at top level)
 */
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left font-playfair text-lg font-semibold text-gray-900 hover:text-cyan-700 transition duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} className={primaryColor} /> : <ChevronDown size={20} className={primaryColor} />}
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="font-raleway text-base text-gray-700 leading-relaxed pl-4 border-l-2 border-cyan-100">
                    {answer}
                </p>
            </div>
        </div>
    );
};

/**
 * Clinic Card Component (NEW DESIGN)
 */
const ClinicCard = ({ name, address, phone, primaryColor }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-cyan-400/80 hover:shadow-xl transition duration-300 flex flex-col justify-between">
        <div>
            <div className="flex items-center space-x-3 mb-3">
                <Briefcase size={24} className={primaryColor} />
                <h3 className="font-playfair text-xl font-bold text-gray-900">{name}</h3>
            </div>
            <p className="font-raleway text-sm text-gray-600 flex items-start space-x-2 mb-3">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>{address}</span>
            </p>
        </div>
        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
            <a href={`tel:+91${phone.replace(/\s/g, '')}`} className={`font-raleway text-sm font-semibold ${primaryColor} hover:underline flex items-center`}>
                <Phone size={14} className="mr-1"/> Call: {phone}
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className={`text-xs font-semibold text-gray-500 hover:${primaryColor} transition`}>
                Directions
            </a>
        </div>
    </div>
);

/**
 * Clinic Section (Uses Cards)
 */
const ClinicsSection = () => (
    <section id="our-clinics" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                    Visit Me
                </p>
                <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                    My Associated <span className={primaryColor}>Clinics</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {clinicData.map((clinic, index) => (
                    <ClinicCard 
                        key={index} 
                        {...clinic} 
                        primaryColor={primaryColor} 
                    />
                ))}
            </div>

             {/* Maatritva Fertility IVF & Healthcare Card */}
            <div className="max-w-3xl mx-auto bg-cyan-700 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-playfair text-2xl font-bold">Maatritva Fertility IVF & Healthcare</h3>
                    <div className="text-right">
                        <div className="flex items-center justify-end">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-amber-300 fill-current" />
                            ))}
                        </div>
                        <p className="font-raleway text-sm font-semibold">(166 Reviews)</p>
                    </div>
                </div>
                <p className="font-raleway text-base opacity-90 mb-4">
                    <MapPin size={16} className="inline mr-2"/> 1st Floor, Axis Mall Multi Complex Area, 01-0184, Plot no.CF/9, Newtown, Kolkata, West Bengal 700107
                </p>
                 <p className="font-raleway text-sm opacity-90 mb-4">
                    <Clock size={16} className="inline mr-2"/> **Hours:** Open · Closes 11 pm
                </p>
                <div className="flex justify-start space-x-4">
                    <a href="https://maatritvaivffertility.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition flex items-center">
                        <Globe size={16} className="mr-1"/> Website
                    </a>
                    <a href={`tel:08100343839`} className="bg-white text-cyan-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition flex items-center">
                        <Phone size={16} className="mr-1"/> Call: 081003 43839
                    </a>
                </div>
            </div>
        </div>
    </section>
);


/**
 * Main application component.
 */
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroHeight = 'min-h-[90vh] lg:min-h-[85vh]'; 
    
    return (
        // FIX: Added overflow-x-hidden to prevent horizontal scroll/white space
        <div className="min-h-screen bg-gray-50 font-raleway antialiased overflow-x-hidden">

            {/* 1. Navigation Bar (Modified for centering and simplified logo) */}
            <header className="sticky top-0 left-0 w-full z-30 py-3 lg:py-4 px-4 sm:px-8 lg:px-16 bg-white/90 backdrop-blur-sm shadow-md">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    
                    {/* Mobile Button Left and Menu Icon */}
                    <div className="flex items-center lg:hidden">
                        <button
                            className={`p-2 rounded-lg text-gray-900 hover:${primaryColor} transition`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    
                    {/* Desktop Links (Centered - takes up maximum space) */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-8 text-base font-medium">
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
                        </div>
                    </div>

                    {/* CTA Button (Aligned Right on desktop, centered on mobile) */}
                    <div className="flex items-center">
                        <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className={`font-playfair ${accentBg} text-white px-4 py-1 text-sm lg:px-6 lg:py-2 rounded-full shadow-lg ${accentHover} transition duration-300 transform hover:scale-[1.02] active:scale-95`}>
                            Book Online
                        </a>
                    </div>
                </nav>
                {/* Mobile Menu Content */}
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
                            <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className={`font-playfair w-full ${accentBg} text-white px-5 py-2 rounded-full shadow-lg ${accentHover} transition duration-300 flex items-center justify-center`}>
                                Book Online <CalendarCheck size={16} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                )}
            </header>
            
            {/* 2. Hero Section */}
            <div className="relative">
                <section className={`relative overflow-hidden ${heroHeight} flex`}>
                    {/* Left Side: Dark Blue/Navy (Contains all text) */}
                    <div className={`w-full lg:w-1/2 ${darkSideBg} relative flex flex-col justify-center items-center p-8 lg:p-16`}>
                        <Activity size={80} strokeWidth={1} className="text-white opacity-20 absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden" />
                        <Stethoscope size={64} strokeWidth={1} className="text-white opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden" />

                        <div className="relative z-10 text-center lg:text-right w-full">
                            
                            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-[7rem] font-extralight text-white leading-none mb-2 mt-20 lg:mt-0">
                                Your Diabetes
                            </h1>
                            
                            <p className="font-raleway text-xl sm:text-2xl font-medium text-white/90 mb-6 uppercase tracking-widest">
                                {DOCTOR_NAME}
                            </p>
                            
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
                             <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>

                        {/* Overlaid Content Container */}
                        <div className="relative z-10 w-full p-8 lg:p-16 flex flex-col justify-end items-center text-center h-full">
                            
                            <div className="w-full max-w-sm lg:max-w-xl mt-auto mb-0 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl"> 
                                
                                <div className="space-y-3 w-full mb-6">
                                    <div className="flex items-center space-x-2 justify-center"> 
                                        <Droplet size={20} className={primaryColor}/>
                                        <p className="font-raleway text-base uppercase tracking-wider text-gray-700 font-medium">
                                            10,000+ Patients Treated in {LOCATION}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2 justify-center">
                                        <Stethoscope size={20} className={primaryColor} />
                                        <p className="text-gray-700 font-raleway text-base text-left">
                                            Personalized Type 1, 2, and Gestational Diabetes Care
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2 justify-center">
                                        <MapPin size={20} className={primaryColor} />
                                        <p className="text-gray-700 font-raleway text-base text-left">
                                            In-Clinic and Online Consultations available.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full"> 
                                    <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" 
                                        className={`font-playfair w-full text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.02] text-center ${accentBg} ${accentHover} flex items-center justify-center`}
                                    >
                                        <CalendarCheck size={20} className="mr-2"/> BOOK ONLINE
                                    </a>
                                    <a href={`tel:${doctorData.phone}`} 
                                        className={`font-raleway flex items-center justify-center space-x-2 text-gray-700 font-medium transition duration-300 border border-gray-300 px-6 py-3 rounded-full hover:shadow-md bg-white w-full`}
                                    > 
                                        <Phone size={20} className={primaryColor}/>
                                        <span>Call: {doctorData.phone}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* 3. About Section (RE-DESIGNED) */}
            <section id="about" className={`py-16 px-4 sm:px-8 lg:px-16 bg-white`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* LEFT COLUMN: BIO Content */}
                    <div className="lg:col-span-2 space-y-8 flex flex-col lg:h-full order-2 lg:order-1">
                        
                        <div className={`bg-white rounded-3xl p-0 flex-grow`}>
                            <h2 className="font-playfair text-4xl font-extrabold mb-4">
                                About Dr. Ghosh
                            </h2>
                            <p className={`font-raleway font-semibold text-xl text-gray-700 mb-6`}>
                                {doctorData.introBio}
                            </p>
                            <p className="font-raleway text-base text-gray-700 leading-relaxed mb-4">
                                {doctorData.mainBio[0]}
                            </p>
                             <p className="font-raleway text-base text-gray-700 leading-relaxed">
                                {doctorData.mainBio[1]}
                            </p>
                        </div>
                        
                        {/* Collaboration/Services Snapshot (Retained for detail) */}
                        <div className={`bg-gray-50 rounded-3xl shadow-md p-8`}>
                             <h3 className="font-playfair text-xl font-bold mb-4 flex items-center">
                                <Stethoscope size={20} className={`mr-2 ${primaryColor}`} />
                                Key Services Snapshot
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
                                {doctorData.services.slice(0, 3).map((service, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className={`flex-shrink-0 w-6 h-6 rounded-full ${lightBgColor} ${primaryColor} flex items-center justify-center mt-1 border border-cyan-200`}>
                                            <Droplet size={14}/>
                                        </div>
                                        <div>
                                            <p className="font-raleway font-semibold text-gray-900 text-sm">{service.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    
                    {/* RIGHT COLUMN: PROFILE CARD (Now on the right) */}
                    <div className={`lg:col-span-1 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center order-1 lg:order-2 sticky top-4`}>
                        
                        {/* Profile Image Container */}
                        <div className="relative w-full overflow-hidden h-[30vh] md:h-[40vh] lg:h-[40vh]">
                            <img
                                src={doctorImageFull}
                                alt={`${doctorData.name} - ${doctorData.specialization}`}
                                className="w-full h-full object-cover object-top filter grayscale contrast-125 shadow-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/333333/ffffff?text=Profile+Image"; }}
                            />
                        </div>
                        
                        {/* Contact Info & CTA (Below the image) */}
                        <div className="text-center w-full p-6">
                            <h3 className="font-playfair text-2xl font-bold mb-1">
                                {doctorData.name}
                            </h3>
                            <p className={`font-raleway font-medium text-sm text-gray-500`}>
                                {doctorData.specialization} | {doctorData.location}
                            </p>
                            <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className={`font-raleway inline-flex items-center mt-6 ${accentBg} text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 ${accentHover} `}>
                                Book Appointment <CalendarCheck size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Me */}
            <section id="why-choose" className={`py-16 px-4 sm:px-8 lg:px-16 bg-gray-50`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Your Health Partner
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Why Choose Dr. Ghosh as Your <span className={primaryColor}>Diabetologist</span>?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {doctorData.whyChoose.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl border-t-4 border-red-500/80 transform hover:shadow-2xl transition duration-300">
                                <div className={`flex-shrink-0 p-4 rounded-full bg-red-500 text-white mb-4`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="font-raleway text-base text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 5. Professional Qualifications */}
            <section id="qualifications" className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Academic Excellence
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Detailed <span className={primaryColor}>Qualifications</span> & Training
                        </h2>
                        <p className={`font-raleway text-lg text-gray-700 leading-relaxed`}>
                            Dr. Ghosh's extensive education ensures the highest standard of care in Endocrinology and Diabetes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctorData.qualifications.map((qual, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-b-4 border-cyan-400/80 transform hover:shadow-lg transition duration-300">
                                <div className={`flex-shrink-0 p-3 rounded-full ${accentBg} text-white`}>
                                    <qual.icon size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">{qual.degree}</h3>
                                    <p className="font-raleway text-sm text-gray-600">{qual.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 6. Our Clinics (Now uses Card Design) */}
            <ClinicsSection />


            {/* 7. Key Services Section */}
            <section id="services" className="relative mt-12 z-30 px-4 sm:px-8 lg:px-16 pb-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Expert Care Pathways
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            How I Can <span className={primaryColor}>Help You Thrive</span>
                        </h2>
                        <p className={`font-raleway text-lg text-gray-700 leading-relaxed`}>
                            Optimizing Diabetes Health and Management - Your Top Choice for the **Best Diabetologist Near Me in Kolkata**.
                        </p>
                    </div>

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

                    {/* Stats Section */}
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
            
            {/* 8. Treatment Approach */}
            <section id="treatment-approach" className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Philosophy of Care
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                            My Comprehensive <span className={primaryColor}>Treatment Approach</span>
                        </h2>
                        <p className="font-raleway text-lg text-gray-700 leading-relaxed mb-6">
                            I believe effective diabetes management goes beyond medication. It requires a partnership, deep understanding, and commitment to long-term well-being.
                        </p>
                        <div className="space-y-5">
                            <div className="flex items-start space-x-4">
                                <Lightbulb size={24} className={primaryColor + " flex-shrink-0 mt-1"} />
                                <div>
                                    <h4 className="font-playfair font-bold text-gray-900">Education First</h4>
                                    <p className="font-raleway text-gray-600 text-sm">Prioritizing diabetes education and support to empower you to actively manage your health.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <BookOpen size={24} className={primaryColor + " flex-shrink-0 mt-1"} />
                                <div>
                                    <h4 className="font-playfair font-bold text-gray-900">Personalized Plans</h4>
                                    <p className="font-raleway text-gray-600 text-sm">Crafting intricate treatment plans tailored to your specific diabetes type, lifestyle, and location.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Users size={24} className={primaryColor + " flex-shrink-0 mt-1"} />
                                <div>
                                    <h4 className="font-playfair font-bold text-gray-900">Community Support</h4>
                                    <p className="font-raleway text-gray-600 text-sm">Encouraging participation in Diabetic Support Groups for shared goals and enhanced emotional well-being.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                         <img 
                            src={doctorImage3}
                            alt="Treatment Philosophy"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/228B93/ffffff?text=Holistic+Treatment"; }}
                        />
                         <div className="absolute inset-0 bg-cyan-700 opacity-40"></div>
                    </div>
                </div>
            </section>
            
            {/* 9. Patient Testimonials */}
            <section id="testimonials" className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Trust & Results
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Voices of <span className={primaryColor}>Satisfied Patients</span>
                        </h2>
                        <p className={`font-raleway text-lg text-gray-700 leading-relaxed`}>
                            See what my patients are saying about their experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {testimonials.slice(0, 4).map((testimonial) => (
                            <TestimonialCard 
                                key={testimonial.id} 
                                {...testimonial} 
                                primaryColor={primaryColor}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 10. FAQ Section */}
            <section id="faq" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <p className={`font-raleway text-md uppercase tracking-widest ${primaryColor} font-semibold mb-2`}>
                            Quick Answers
                        </p>
                        <h2 className="font-playfair text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Frequently Asked <span className={primaryColor}>Questions</span>
                        </h2>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                        {faqItems.map((item, index) => (
                            <FAQItem 
                                key={index} 
                                question={item.question} 
                                answer={item.answer} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Contact Info Footer Section */}
            <footer className={`${darkSideBg} py-6`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-white text-center sm:flex sm:justify-between sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
                        <MapPin size={20} />
                        <p className="font-raleway text-sm font-medium">{LOCATION}, West Bengal</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
                        <Mail size={20} />
                        <p className="font-raleway text-sm font-medium">{doctorData.contactEmail}</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <Phone size={20} />
                        <p className="font-raleway text-sm font-medium">{doctorData.phone}</p>
                    </div>
                </div>
            </footer>
            
            {/* Copyright Footer */}
            <div className="py-4 bg-gray-900 text-center text-gray-400">
                <p className="font-raleway text-xs">
                    © Best Diabetologist in Kolkata and Best Diabetes Doctor in Kolkata | {DOCTOR_NAME}. All Rights Reserved.
                </p>
                <p className={`font-raleway text-xs mt-1 text-cyan-500 font-bold`}>
                    Best diabetologist in Kolkata Dr.Prattay Ghosh
                </p>
            </div>
        </div>
    );
};

export default App;