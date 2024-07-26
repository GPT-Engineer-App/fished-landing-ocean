// Update this page (the content is just a fallback if you fail to update the page)

import { Fish, Waves, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
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

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Your Aquatic Journey
          </Button>
        </div>
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

export default Index;
