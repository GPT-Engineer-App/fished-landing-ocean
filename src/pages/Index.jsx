// Update this page (the content is just a fallback if you fail to update the page)

import { Fish, Waves, Anchor, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="bg-blue-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Fish className="h-6 w-6" />
        <span className="text-xl font-bold">FishWorld</span>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-blue-200">Home</a></li>
        <li><a href="#" className="hover:text-blue-200">Species</a></li>
        <li><a href="#" className="hover:text-blue-200">Habitats</a></li>
        <li><a href="#" className="hover:text-blue-200">Conservation</a></li>
      </ul>
    </div>
  </nav>
);

const Index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-300">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
            Dive into the World of Fishes
          </h1>
          <p className="text-xl text-blue-600">
            Explore the fascinating underwater universe
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Fish className="h-12 w-12 text-blue-500" />}
            title="Diverse Species"
            description="Discover thousands of unique fish species from around the globe."
          />
          <FeatureCard
            icon={<Waves className="h-12 w-12 text-blue-500" />}
            title="Aquatic Habitats"
            description="Learn about various aquatic environments and ecosystems."
          />
          <FeatureCard
            icon={<Anchor className="h-12 w-12 text-blue-500" />}
            title="Conservation"
            description="Understand the importance of preserving our oceans and marine life."
          />
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Your Aquatic Journey
          </Button>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-blue-800 text-white p-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-2">FishWorld</h3>
        <p>Exploring the wonders of aquatic life.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-200">About Us</a></li>
          <li><a href="#" className="hover:text-blue-200">Contact</a></li>
          <li><a href="#" className="hover:text-blue-200">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200"><Facebook /></a>
          <a href="#" className="hover:text-blue-200"><Twitter /></a>
          <a href="#" className="hover:text-blue-200"><Instagram /></a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; 2024 FishWorld. All rights reserved.</p>
    </div>
  </footer>
);

export default Index;
