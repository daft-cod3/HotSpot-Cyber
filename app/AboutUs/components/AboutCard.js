import Image from 'next/image'

export default function AboutCard({name, details, image}){
    return(
        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-700 p-8 mt-8">
            <div className="flex items-center justify-center">
                <Image src={`${image}`} alt={`${name}`} width={100} height={75} className="rounded-full "></Image>
            </div>
            <h1 className="text-2xl font-bold p-4 mb-6">{name}</h1>
            <p className="text-sm">{details}</p>
        </div>
    );
}