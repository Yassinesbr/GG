import { Program } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<Program> = ({
  image,
  name,
  description,
  price,
  duration,
  id,
}) => {
  return (
    <Link href={`/program/${id}`}>
      <div className="w-full bg-white shadow-md rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-full">
        <div className="relative h-32 w-full">
          <Image src={image} layout="fill" objectFit="cover" alt={name} />
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">{description}</p>
          <div className="flex justify-between items-center mt-3 border-t border-gray-200 pt-5">
            <h1 className="text-sm font-bold text-gray-800">{price} DH</h1>
            <p className="text-gray-600 text-sm">{duration}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
