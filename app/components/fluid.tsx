export default function RectangleBox() {
  return (
    <div className="pt-4 pl-60 justify-center min-h-screen">
      <div className="w-5xl h-[30vh] bg-black border border-neutral-800 rounded-md flex flex-col items-center justify-center p-6">
        {/* Bold Text */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Introducing Fluid Compute
        </h1>

        {/* Normal Text */}
        <p className="text-medium text-neutral-400 mb-4">
          The power of servers in serverless form
        </p>

        {/* Button */}
        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
}
