import Card from "@/components/Card";
import React from "react";

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

async function getPrograms() {
  const res = await fetch("http://localhost:3001/programs");
  if (!res.ok) {
    throw new Error("Failed to fetch programs");
  }
  return res.json();
}

const page = async () => {
  const data: Program[] = await getPrograms();
  return (
    <div className="grid xl:grid-cols-3 gap-10 mt-8 sm:grid-cols-2">
      {data.map((program: Program) => (
        <Card key={program.id} {...program} />
      ))}
    </div>
  );
};

export default page;
