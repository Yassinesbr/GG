async function getProgram(id: string) {
  const res = await fetch(`http://localhost:3001/programs/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch programs");
  }
  return res.json();
}

const page = async ({ params }: { params: { id: string } }) => {
  const program = await getProgram(params.id);
  return (
    <div className="w-full flex align-center justify-center mt-8">
      <div className="w-8/12 mx-auto">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-96 object-cover"
        />
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold">{program.name}</h1>
            <p className=" text-lg mt-5">{program.longDescription}</p>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-2xl font-bold ">{program.price} DH</h1>
            <p className=" text-lg">{program?.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
