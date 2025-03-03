"use client";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import { ArrowRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typing from "react-typing-effect";

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, 2000); // Wait 1 second before restarting
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};




export default function Home() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState('Residential');
  const [propertyType, setPropertyType] = useState('All property types');
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const options = ['Residential', 'Industrial', 'Commercial', 'Agriculture'];
  const propertyTypes = [
    'All property types',
    'Office',
    'Retail',
    'Industrial',
    'Land',
    'Medical',
    'Hotel',
    'Multi-family'
  ];

  const tickerRef = useRef(null);
  const contentRef = useRef(null);
  
  
  useEffect(() => {
    // Clone the content to create a seamless loop
    if (tickerRef.current && contentRef.current) {
      const ticker = tickerRef.current;
      const content = contentRef.current;
      
      // Clone the content and append it
      const clone = content.cloneNode(true);
      ticker.appendChild(clone);
      
      // Calculate animation duration based on content width
      const contentWidth = content.offsetWidth;
      const animationDuration = contentWidth / 50; // Adjust speed by changing divisor
      
      // Apply animation
      ticker.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute -right-4 top-1/2 pt-2 pl-2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-[#003366] rounded-full shadow-md cursor-pointer z-10"
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowRight size={20} />
      </div>
    );
  };
  
    // Sample property data - you would fetch this from an API in a real app
    const properties = [
      {
        id: 1,
        type: '3 BHK Flat',
        price: '₹1.40 Cr',
        sqft: '2500 sqft',
        location: 'Nirman Nagar, Jaipur',
        status: 'Ready to Move',
        imageUrl: '/images/flat.jpg',
        imageCount: 2
      },
      {
        id: 2,
        type: '1050 SQFT PLOT',
        price: '₹39 Lac',
        sqft: '1050 sqft',
        location: 'Doctor Rajendra Prasad Nagar, Jaipur',
        status: 'Ready to Move',
        imageUrl: '/images/plot.jpg',
        imageCount: 9
      },
      {
        id: 3,
        type: '5 STORY APARTMENT',
        price: '₹1.50 Cr',
        sqft: '1800 sqft',
        location: 'Jaipur',
        status: 'Ready to Move',
        imageUrl: '/images/apartment.jpg',
        imageCount: 2
      },
      {
        id: 4,
        type: '2 STORY HOUSE',
        price: '₹22.5 Lac',
        sqft: '1050 sqft',
        location: 'Manglam City, Jaipur',
        status: 'Ready to Move',
        imageUrl: '/images/house.jpg',
        imageCount: 13
      },
      {
        id: 5,
        type: '1050 SQFT PLOT',
        price: '₹22.5 Lac',
        sqft: '1050 sqft',
        location: 'Manglam City, Jaipur',
        status: 'Ready to Move',
        imageUrl: '/images/plot.jpg',
        imageCount: 13
      },
    ];
  
    // Slick settings
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    // Slick settings
    const settingsTopProject = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };


  const locations = [
    {
      id: 1,
      name: "FLATS",
      image: "/images/flat.jpg",
      alt: "FLATS"
    },
    {
      id: 2,
      name: "HOUSE",
      image: "/images/house.jpg",
      alt: "House"
    },
    {
      id: 3,
      name: "APARTMENTS",
      image: "/images/apartment.jpg",
      alt: "APARTMENTS"
    },
    {
      id: 4,
      name: "PLOT",
      image: "/images/plot.jpg",
      alt: "PLOTS"
    }
  ];
 
  const uspFeatures = [
    {
      icon: "home",
      title: "Exclusive Listings",
      description: "Access properties you won't find anywhere else, with new exclusive listings added daily."
    },
    {
      icon: "dollar-sign",
      title: "Best Price Guarantee",
      description: "We negotiate the best deals and guarantee competitive pricing on all properties."
    },
    {
      icon: "check-circle",
      title: "Verified Properties",
      description: "Every listing is personally verified by our experts to ensure quality and accuracy."
    },
    {
      icon: "clock",
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist with your property search."
    }
  ];

  const testimonials = [
    {
      name: "Vinod Chopra",
      location: "Mansorover, Jaipur",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with this real estate agency was the best decision we made. Our agent went above and beyond to find us our dream home in a competitive market. The entire process was smooth and stress-free.",
      property: "Purchased a 3-bedroom townhouse"
    },
    {
      name: "Rohit Sharma",
      location: "Vaishali Nagar, Jaipur",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "I sold my property in just 2 weeks! Their marketing strategy and professional photography made all the difference. I received multiple offers above asking price. Couldn't be happier with the results.",
      property: "Sold a luxury apartment"
    },
    {
      name: "Aatish Agarwal",
      location: "Sitapura, Jaipur",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As first-time homebuyers, we had countless questions. Our agent was patient, knowledgeable, and always available. They helped us navigate the entire process with confidence.",
      property: "Purchased a suburban family home"
    }
  ];

  const clonedTestimonials = [...testimonials, ...testimonials];
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeTestimonialIndex]);
  
  const nextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    
    // Go to next slide
    setActiveIndex((current) => {
      // When we reach the end of original set
      if (current === testimonials.length - 1) {
        // Schedule a reset to first clone after transition completes
        setTimeout(() => {
          if (sliderRef.current) {
            // Disable transitions temporarily
            sliderRef.current.style.transition = 'none';
            setActiveTestimonialIndex(0);
            
            // Force browser to recognize the change before re-enabling transitions
            setTimeout(() => {
              if (sliderRef.current) {
                sliderRef.current.style.transition = 'transform 500ms ease-in-out';
                setTransitioning(false);
              }
            }, 500);
          }
        }, 5000);
        
        // Move to first clone
        return current + 1;
      }
      
      setTransitioning(false);
      return (current + 1) % clonedTestimonials.length;
    });
  };
  
  const goToSlide = (index) => {
    setActiveTestimonialIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % uspFeatures.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Import icons from lucide-react
  const IconComponent = ({ name }) => {
    if (name === "home") return <div className="w-12 h-12 flex items-center justify-center bg-[#003366] rounded-full">🏠</div>;
    if (name === "dollar-sign") return <div className="w-12 h-12 flex items-center justify-center bg-[#003366] rounded-full">💰</div>;
    if (name === "check-circle") return <div className="w-12 h-12 flex items-center justify-center bg-[#003366] rounded-full">✓</div>;
    if (name === "clock") return <div className="w-12 h-12 flex items-center justify-center bg-[#003366] rounded-full">⏰</div>;
    return null;
  };

  return (
    <>
    <section>
    <main>
            <div className="absolute inset-0 z-0 w-full">
            <video id="myVideo" muted autoPlay loop  className="w-full h-full object-cover brightness-40" >

                <source src="/videos/heroSectionProperty.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                </div>
      <Navbar />
      <div>    
          <div className="relative w-full h-[calc(100vh-125px)] ">
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
              <h2 className="text-white text-5xl md:text-6xl font-bold mb-4">
              <div className="inline-block border-b-2 border-[#ff4d00] pb-2">
              <Typewriter text="Explore Properties" delay={150} infinite/>
    </div>
              </h2>
              <p className="">
                {/* Modern, Intelligent Real Estate */}
              </p>
              <div className="w-full mb-4 overflow-hidden py-3">
      <div 
        ref={tickerRef}
        className="whitespace-nowrap inline-block animate-ticker"
        style={{
          animation: 'ticker linear infinite',
          animationDuration: '15s', // Default duration, will be overridden in useEffect
        }}
      >
        <div ref={contentRef} className="inline-block">
          <span className="text-white font-bold text-xl mx-4">Explore Properties in the Best Locations</span>
          <span className="text-[#ff4d00] font-bold text-xl mx-4">•</span>
          <span className="text-white font-bold text-xl mx-4">Find Commercial Real Estate Opportunities</span>
          <span className="text-[#ff4d00] font-bold text-xl mx-4">•</span>
          <span className="text-white font-bold text-xl mx-4">Discover Office, Retail, Industrial, and More</span>
          <span className="text-[#ff4d00] font-bold text-xl mx-4">•</span>
          <span className="text-white font-bold text-xl mx-4">Top Markets Available Now</span>
          <span className="text-[#ff4d00] font-bold text-xl mx-4">•</span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
              </div>
              <div className="w-full max-w-3xl">
              <div className="bg-white rounded-md shadow-lg overflow-visible">
          {/* Tab Options */}
          <div className="flex border-b overflow-y-auto">
            {options.map(option => (
              <button
                key={option}
                className={`py-3 px-6 cursor-pointer font-medium text-gray-700 text-sm focus:outline-none ${
                  selectedOption === option ? 'border-b-2 border-[#ff4d00] text-blue-600' : ''
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Search Controls */}
          <div className="flex flex-col md:flex-row">
            {/* Property Type Dropdown */}
            <div className="relative border-r md:w-1/3">
              <button
                className="w-full p-4 cursor-pointer text-left flex items-center justify-between"
                onClick={() => setShowPropertyTypes(!showPropertyTypes)}
              >
                <span className="text-gray-700">{propertyType}</span>
                <svg className="w-4 h-4 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showPropertyTypes && (
                <div className="absolute top-full left-0 w-full bg-white text-gray-600 shadow-lg z-50 border max-h-48 overflow-y-auto">
                  {propertyTypes.map(type => (
                    <div
                      key={type}
                      className="p-3 text-left hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setPropertyType(type);
                        setShowPropertyTypes(false);
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Input */}
            <div className="flex items-center md:flex-1 p-1">
              <svg className="w-5 h-5 text-[#ff4d00] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Where are you looking?"
                className="w-full p-3 focus:outline-none text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* Filter Button */}
              <button 
                className="mx-2 cursor-pointer p-2 rounded-full border border-[#ff4d00]"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg className="w-5 h-5 text-[#ff4d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
              
              {/* Search Button */}
              <button className="bg-[#003366] cursor-pointer text-white px-6 py-3 font-medium rounded-md">
                Search
              </button>
            </div>
          </div>
          
          {/* Advanced Filters (hidden by default) */}
          {showFilters && (
            <div className="border-t border-[#ff4d00] p-4 text-gray-600 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm  font-medium text-gray-700 mb-1">Price Range</label>
                  <select className="w-full p-2 text-gray-600 border rounded">
                    <option>Any Price</option>
                    <option>$0 - $500,000</option>
                    <option>$500,000 - $1,000,000</option>
                    <option>$1,000,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
                  <select className="w-full p-2 border rounded">
                    <option>Any Size</option>
                    <option>Under 1,000 sqft</option>
                    <option>1,000 - 5,000 sqft</option>
                    <option>5,000+ sqft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Features</label>
                  <select className="w-full p-2 border rounded">
                    <option>Any Features</option>
                    <option>Parking Available</option>
                    <option>ADA Accessible</option>
                    <option>Recently Renovated</option>
                  </select>
                </div>
              </div>
            </div>
          )}
              </div>
              </div>
            </div>
          </div>
      </div>
    </main>
    </section>

    <section>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-800">Popular Owner Properties</h2>
          <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ff4d00]"></div>
        </div>
        <Link href="/properties" className="text-[#ff4d00] font-medium flex items-center">
          See all Properties <ArrowRight size={16} className="ml-1 text-[#ff4d00]" />
        </Link>
      </div>
      
      <div className="relative">
        <Slider {...settings}>
          {properties.map((property) => (
            <div key={property.id} className="px-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <div className="aspect-w-16 aspect-h-12">
                    <Image 
                      src={property.imageUrl} 
                      alt={property.type} 
                      layout="fill" 
                      objectFit="cover"
                      className="rounded-t-lg w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className=" bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#003366" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {property.imageCount}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-medium text-gray-800">{property.type}</div>
                  <div className="flex items-center mt-1">
                    <span className="font-semibold text-gray-900">{property.price}</span>
                    <span className="mx-2 text-[#ff4d00]">|</span>
                    <span className="text-gray-600">{property.sqft}</span>
                  </div>
                  <div className="text-gray-600 text-sm mt-2 truncate">{property.location}</div>
                  <div className="flex justify-between mt-2">
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Explore
                  </button>
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Share
                  </button>
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Enquire
                  </button>
                  </div>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>

    <section>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-800">Top Projects</h2>
          <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ff4d00]"></div>
        </div>
        <Link href="/properties" className="text-[#ff4d00] font-medium flex items-center">
          See all Projects <ArrowRight size={16} className="ml-1 text-[#ff4d00]" />
        </Link>
      </div>
      
      <div className="relative">
        <Slider {...settingsTopProject}>
          {properties.map((property) => (
            <div key={property.id} className="px-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <div className="aspect-w-16 aspect-h-12">
                    <Image 
                      src={property.imageUrl} 
                      alt={property.type} 
                      layout="fill" 
                      objectFit="cover"
                      className="rounded-t-lg w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className=" bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#003366" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {property.imageCount}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-medium text-gray-800">{property.type}</div>
                  <div className="flex items-center mt-1">
                    <span className="font-semibold text-gray-900">{property.price}</span>
                    <span className="mx-2 text-[#ff4d00]">|</span>
                    <span className="text-gray-600">{property.sqft}</span>
                  </div>
                  <div className="text-gray-600 text-sm mt-2 truncate">{property.location}</div>
                  <div className="flex mt-2 justify-between">
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Explore
                  </button>
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Share
                  </button>
                  <button className="text-sm bg-[#003366] hover:bg-gray-800 text-white font-medium py-2 px-4 transition duration-300 ease-in-out">
                    Enquire
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>

    <section>
      <main className="flex flex-col md:min-h-screen min-h-auto bg-gray-200 lg:flex-row ">
        <div className="w-full lg:w-2/5 relative overflow-hidden group">
          <Image
            src="/images/house-middleclass.jpg" 
            alt="Natural herbs and spices with mortar and pestle" 
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"

          />
        </div>

        {/* Right side - About text */}
        <div className="w-full lg:w-3/5 bg-sage-400 p-8 lg:p-16 flex flex-col justify-center items-center text-center">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
              About Us
            </h1>
            
            <div className="w-16 h-1 bg-[#ff4d00] mx-auto mb-10"></div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
            We redefine real estate with a modern, intelligent approach. Whether you're buying, selling, or investing, we offer expert guidance and innovative solutions to help you make the right decisions.
            </p>
            
            <p className="text-gray-600 mb-12 leading-relaxed">
            With a deep understanding of the market and a commitment to excellence, we connect you to premium properties that match your lifestyle and investment goals. Trust us to turn your real estate dreams into reality.
            </p>
            
            <button className="bg-[#003366] hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 ease-in-out">
              Get Details
            </button>
          </div>
        </div>
      </main>
    </section>

    {/* <section>
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-screen mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {locations.map((location, index) => (
              <div 
                key={location.id} 
                className="relative h-96 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform"
                  style={{ transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
                >
                  <Image
                    src={location.image}
                    alt={location.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 brightness-30"
                    priority={index < 2}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-4 tracking-wide">
                      {location.name}
                    </h3>
                    <div className="border-2 border-white py-2 px-6 inline-block text-white hover:bg-[#003366] transition duration-300 cursor-pointer">
                      DETAILS
                    </div>
                    <div className="border-2 border-white py-2 px-6 inline-block text-white hover:bg-[#003366] transition duration-300 cursor-pointer">
                      Enquiry
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    </section> */}

    <section>
    <div className="bg-white py-16 px-4  rounded-lg mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <div className="w-20 h-1 bg-[#ff4d00] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {uspFeatures.map((feature, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg transition-all duration-500 transform ${
              index === activeIndex ? 'scale-105 shadow-xl bg-gray-200' : 'hover:shadow-md'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex flex-col items-center text-center">
              <IconComponent name={feature.icon} />
              
              <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
              
              <p className="text-gray-600">{feature.description}</p>
              
              <div className={`mt-4 w-0 h-1 bg-[#ff4d00] transition-all duration-300 ${
                index === activeIndex ? 'w-16' : ''
              }`}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          {uspFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#ff4d00]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
    </section>

    <section>
    <div className="bg-gradient-to-r overflow-y-hidden from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied clients about their experience finding their perfect home with us.</p>
          <div className="w-24 h-1 bg-[#ff4d00] mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
          
          {/* Testimonial cards */}
          <div className="relative overflow-hidden p-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {clonedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <div className="absolute -top-4 -right-4 bg-[#003366] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                      <span className="text-xl font-semibold">"</span>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#003366] mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    
                    <div className="bg-blue-50 p-2 rounded text-sm text-[#003366] font-medium inline-block">
                      {testimonial.property}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  (activeIndex % testimonials.length) === index ? 'bg-[#ff4d00]' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
      </div>
    </div>
    </section>

    <Footer/>
    </>
  );
}
