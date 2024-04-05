import { getPrograms } from "@/api/programs";
import Card from "@/components/Card";

export interface Program {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  slug: string;
  longDescription: string;
}

const page = async () => {
  const data = await getPrograms();
  return (
    <div className="grid xl:grid-cols-3 gap-10 mt-8 sm:grid-cols-2">
      {data.map((program: Program) => (
        <Card key={program.id} {...program} />
      ))}
    </div>
  );
};

export default page;
