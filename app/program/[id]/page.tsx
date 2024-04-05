import { getProgramById } from "@/api/programs";
import Image from "next/image";

const minutesToWeeks = (minutes: number) => {
  return Math.floor(minutes / 10080);
};

const page = async ({ params }: { params: { id: string } }) => {
  const program = await getProgramById(params.id);
  return (
    <div className="w-full flex align-center justify-center mt-8">
      <div className="w-8/12 mx-auto">
        <div className="w-full h-96 relative">
          <Image
            src={program.image}
            alt={program.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold">{program.program_name}</h1>
            <p className=" text-lg mt-5">{program.long_description}</p>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-2xl font-bold ">{program.price} DH</h1>
            <p className=" text-lg">
              {minutesToWeeks(program.duration_minutes)} weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
