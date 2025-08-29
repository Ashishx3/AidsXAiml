"use client"

import React, { useState } from "react";
import { Github, ExternalLink, Award } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI Chatbot",
      description: "A chatbot built with NLP using Python & TensorFlow.",
      github: "https://github.com/example/chatbot",
      demo: "https://demo.com/chatbot",
      isFeatured: true,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.github) return alert("Title & GitHub required!");

    const newProject = {
      id: projects.length + 1,
      ...formData,
      isFeatured: false,
    };

    setProjects([...projects, newProject]);
    setFormData({ title: "", description: "", github: "", demo: "" });
  };

  return (
    <div className="bg-slate-900 text-white py-16 px-6 lg:px-20">
      <h2 className="text-center text-4xl font-extrabold mb-12">Student Projects</h2>

      {/* Upload Form */}
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mb-12">
        <h3 className="text-xl font-bold mb-4">📤 Upload Your Project</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-700 text-white"
          />
          <textarea
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-700 text-white"
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub Link"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-700 text-white"
          />
          <input
            type="url"
            name="demo"
            placeholder="Live Demo Link (optional)"
            value={formData.demo}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-700 text-white"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Upload Project
          </button>
        </form>
      </div>

      {/* Display Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all relative"
          >
            {/* Featured Badge */}
            {project.isFeatured && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1 font-bold">
                <Award size={16} /> Project of the Month
              </span>
            )}

            <h4 className="text-xl font-bold text-purple-400">{project.title}</h4>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded-md hover:bg-purple-500 transition"
              >
                <Github size={18} /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded-md hover:bg-pink-500 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
