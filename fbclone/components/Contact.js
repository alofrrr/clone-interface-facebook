/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function Contact({src, name}) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={45} 
                height={45} 
                layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-600 h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default Contact
