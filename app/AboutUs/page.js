import AboutCard from './components/AboutCard';
import Image from 'next/image'

export default function  AboutUs(){

    const About = [
        {
            "id":1,
            "name":"SpongeBob Squarepants",
            "details":"Director and founder",
            "image":"/about/spongebob.jpg"
        },
    ]

    return(
    <div className="container m-auto bg-gray-700 px-6 py-10">
        <div>
            <h2 className="text-4xl text-gray-300  font-bold flex items-center justify-center rounded-lg">
                About Us
            </h2>
        </div>
        <div className="flex items-center justify-center">
            {About.map(About => (<AboutCard key={About.id} {...About}/>))}
        </div>
    </div>
    );
}