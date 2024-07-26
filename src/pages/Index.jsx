// Update this page (the content is just a fallback if you fail to update the page)

import { Fish, Waves, Anchor, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex-grow bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="container mx-auto px-4 py-16">
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

        <div className="text-center mb-16">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
            Start Your Aquatic Journey
          </Button>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Popular Fish Species</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Clownfish', 'Blue Tang', 'Angelfish', 'Betta'].map((fish) => (
              <div key={fish} className="bg-white rounded-lg shadow-md p-4">
                <img src={`/placeholder.svg`} alt={fish} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-blue-700">{fish}</h3>
                <p className="text-gray-600">Learn more about the fascinating {fish.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Join Our Conservation Efforts</h2>
          <p className="text-blue-700 text-center mb-6">Help us protect marine life and preserve our oceans for future generations.</p>
          <div className="text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Get Involved</Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Fun Fish Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Some fish can fly out of the water to escape predators.',
              'The smallest known fish is only 7.9 mm long.',
              'Fish have been on Earth for more than 500 million years.'
            ].map((fact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-blue-700 font-semibold mb-2">Did you know?</p>
                <p className="text-gray-600">{fact}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
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
