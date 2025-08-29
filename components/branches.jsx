import React from "react";
import { GraduationCap, Briefcase, Code2, Brain } from "lucide-react";

const Branches = () => {
  return (
    <div className="bg-slate-900 text-white py-16 px-6 lg:px-20">
      <h2 className="text-center text-4xl font-extrabold mb-12">
        Our Branches
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* AIDS Section */}
        <div className="bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">
            Artificial Intelligence & Data Science (AIDS)
          </h3>
          <p className="mb-6 text-gray-300">
            <span className="font-semibold">What is it?</span>  
            A branch focused on harnessing AI and Data Science to extract insights, 
            build predictive models, and solve real-world problems using data-driven techniques.
          </p>

          {/* Career Scope */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-pink-300">
              <Briefcase size={20} /> Career Scope
            </h4>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Data Scientist</li>
              <li>Big Data Engineer</li>
              <li>Business Analyst</li>
              <li>AI Researcher</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-pink-300">
              <Code2 size={20} /> Tools & Technologies
            </h4>
            <p className="text-gray-400 mt-2">
              Python, TensorFlow, SQL, Big Data frameworks (Hadoop, Spark).
            </p>
          </div>

          {/* Curriculum */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-pink-300">
              <GraduationCap size={20} /> Curriculum Snapshot
            </h4>
            <p className="text-gray-400 mt-2">
              Core subjects include Data Mining, Machine Learning, Deep Learning, 
              Big Data Analytics, and Cloud Computing.
            </p>
          </div>

          {/* Alumni */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-pink-300">
              <Brain size={20} /> Alumni Success
            </h4>
            <p className="text-gray-400 mt-2">
              Alumni are excelling in top companies like Google, Microsoft, TCS, and startups, 
              contributing to cutting-edge AI-driven projects.
            </p>
          </div>
        </div>

        {/* AIML Section */}
        <div className="bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Artificial Intelligence & Machine Learning (AIML)
          </h3>
          <p className="mb-6 text-gray-300">
            <span className="font-semibold">What is it?</span>  
            A specialization in designing intelligent systems, building machine learning models, 
            and developing solutions that mimic human decision-making and problem-solving.
          </p>

          {/* Career Scope */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
              <Briefcase size={20} /> Career Scope
            </h4>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>AI Engineer</li>
              <li>Machine Learning Scientist</li>
              <li>Robotics Engineer</li>
              <li>AI Product Developer</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
              <Code2 size={20} /> Tools & Technologies
            </h4>
            <p className="text-gray-400 mt-2">
              ML models, Neural Networks, Scikit-learn, PyTorch, AI Ethics frameworks.
            </p>
          </div>

          {/* Curriculum */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
              <GraduationCap size={20} /> Curriculum Snapshot
            </h4>
            <p className="text-gray-400 mt-2">
              Core subjects include Neural Networks, Reinforcement Learning, 
              Natural Language Processing (NLP), and Computer Vision.
            </p>
          </div>

          {/* Alumni */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
              <Brain size={20} /> Alumni Success
            </h4>
            <p className="text-gray-400 mt-2">
              Alumni are contributing to fields like autonomous vehicles, 
              healthcare AI, and research labs worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
