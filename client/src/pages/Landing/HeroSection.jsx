import { FaSearch } from "react-icons/fa";
import HeroImage from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <section className="h-full bg-black/60 flex items-center justify-center text-white text-center px-10 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start text-left">
            <div className="w-full md:w-8/12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Unlock the world of knowledge, imagination,
                <br /> and discovery
                <br />
                anytime, anywhere, with{" "}
                <span className="text-blue-500">DigitalBook</span>
              </h1>

              <p className="text-lg mb-6 text-gray-200">
                All your books in one place. Track your borrowing history,
                manage reservations effortlessly, and gain valuable insights
                into your library.
              </p>

              <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 h-12 max-w-md mb-4">
                <input
                  type="text"
                  placeholder="Find your book here"
                  className="bg-transparent text-white placeholder-white flex-1 outline-none border-none"
                />
                <FaSearch className="text-white" />
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition duration-300">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
