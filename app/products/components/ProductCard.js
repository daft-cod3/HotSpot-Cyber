import Image from 'next/image';

export default function ProductCard({heading, descript, img}){
    return(
        <div className="relative rounded-lg border border-gray-800  text-gray-300 w-min-full h-40 m-4
            hover:shadow-lg transition flex flex-col justify-evenly shadow-md bg-opacity-50 cursor-pointer"
            style={{
                backgroundImage:`url(${img})`,
                backgroundPostion:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}
        >
                <h2 className="text-2xl text-white font-serif font-bold flex items-center justify-center p-2">
                    {heading}
                </h2>
                <p className="text-sm">
                    {descript}
                </p>
        </div>
    );
}