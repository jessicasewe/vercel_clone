import Navbar from "../app/components/navbar";
import RectangleBox from "../app/components/fluid";
import { GridBox } from "./components/gridbox";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Add a padding-top to the RectangleBox to account for the fixed navbar */}
      <div className="pt-16">
        {" "}
        <RectangleBox />
        <GridBox />
        <Footer />
      </div>
    </div>
  );
}
