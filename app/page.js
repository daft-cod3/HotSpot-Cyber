import ProductCard from './products/components/ProductCard'
import ServiceCard from './services/components/ServiceCard'
import Image from 'next/image'

export default function Home(){

     const services = [
        {
            id: 1,
            title: "Government Services",
            description: "HELB, KRA, Ecitizen",
            icon: "/services/gok.jpg"
        },
        {
            id: 2,
            title: "Academic Services",
            description: "Typing, Printing, Scanning",
            icon: "/services/edu.jpeg"
        },
        {
            id: 3,
            title: "Document Services",
            description: "Email, Social Media Setup",
            icon: "/services/doc.jpeg"
        },
        {
            id:4,
            title:"Other Services",
            description:"Email, Social Media Setup",
            icon:"/services/other.jpg"
        }
    ];

    const products = [
        {
            id: 1,
            title: "Flash Drives",
            descript: "8GB, 16GB, 32GB available",
            img: "/products/comp.png"
        },
        {
            id: 2,
            title: "Phones & Tablets",
            descript: "Latest models available",
            img: "/products/laptop.png"
        },
        {
            id: 3,
            title: "Accessories",
            descript: "Chargers, Cases, Screen Guards",
            img: "/products/power.jpeg"
        }
    ];

    return(
        <main className="bg-gray-700">
            <section className="relative h-[80vh] flex items-center justify-center top-0">
                <div
                className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/hero-bg.jpg')"
                }}></div>
                <div className="relative z-10 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl  font-bold mb-4">
                        Welcome to Royal HotSpot Cyber
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Your one-stop solution for all digital services.<br/>
                        We will help you navigate the digital world with ease and confidence. 
                    </p>
                    <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>
                {/* Services Section */}
            <section id="services" className="mb-16">
                <h2 className="text-3xl font-bold  p-6 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 px-4 bg-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            heading={product.title}
                            description={product.description}
                            img={product.img}
                        />
                    ))}
                </div>
            </section>   
               {/* Contact Section */}
            <section id="contact" className="text-center">
                <h2 className="text-3xl font-bold m-4 p-6">
                Contact Us
                </h2>
                <div className="flex flex-col items-center justify-center">
                <Image
                 src="/logo.jpg"
                 alt="SpongeBob Squarepants"
                 width={200}
                 height={200}
                 className="rounded-full p-4"
                />
                <p className="text-xl text-white font-semibold font-serif m-4">Get in touch with me for more information<br/>You can Email me by clicking the button below.</p>
                <a 
                    href="mailto:contact@greengram.com"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 "
                >
                    Contact Now
                </a>
                </div>
            </section>      
        </main>
    );
}
