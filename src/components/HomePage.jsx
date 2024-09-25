import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard"; // Import your CategoryCard component
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  const categories = [
    {
      name: "Psychologists",
      description: "Find experts in mental health.",
      path: "/psychologists",
    },
    {
      name: "Family Therapy",
      description: "Get help with family and relationship issues.",
      path: "/family-therapy",
    },
    {
      name: "Career Mentors",
      description: "Guidance for your career path.",
      path: "/career-mentors",
    },
    {
      name: "Training Coaches",
      description: "Improve your skills with professional trainers.",
      path: "/training-coaches",
    },
    {
      name: "Financial Advisors",
      description: "Plan your financial future with experts.",
      path: "/financial-advisors",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={category.path} key={category.name}>
              <CategoryCard name={category.name} description={category.description} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
