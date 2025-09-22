import Image from 'next/image';

export default function ServiceCard({title, description, icon}){
    return(
            <div className="relative border rounded-lg border-gray-800 p-6 m-4 text-gray-300 w-min-full
            hover:shadow-lg transition flex flex-col justify-end h-40 shadow-md bg-opacity-50 cursor-pointer"
            style={{
                backgroundImage:`url(${icon})`,
                backgroundPostion:"center"
            }}
            >
                <h2 className="text-2xl text-white font-serif font-bold flex items-center justify-center">
                {title}
                </h2>
                <p className="text-sm text-white">
                {description}
                </p>
                
            </div>
    );
}                 