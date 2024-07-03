import React, { useState } from 'react';
import { Home, Briefcase, User, Mail, BookOpen } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'About', icon: User },
    { name: 'Contact', icon: Mail },
    { name: 'Blog', icon: BookOpen },
  ];

  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              className={`flex items-center space-x-2 text-white hover:text-gray-300 ${
                activeTab === item.name ? 'border-b-2 border-white' : ''
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HomePage = () => (
  <div className="text-center text-white">
    <h1 className="text-4xl font-bold mb-4">Welcome to Chase Naples' Portfolio</h1>
    <p className="text-xl mb-6">
      Explore my projects, learn about my skills, and discover how I can contribute to your team.
    </p>
    <p className="text-lg">
      This site showcases my work in web development, mobile apps, and AI projects. 
      Feel free to browse my portfolio, read about my background, or get in touch!
    </p>
  </div>
);

const Portfolio = () => {
  const projects = [
    { name: 'Project 1', description: 'A React-based web application', link: 'https://github.com/chasenaplesdev/project1' },
    { name: 'Project 2', description: 'Python data analysis tool', link: 'https://github.com/chasenaplesdev/project2' },
    { name: 'Project 3', description: 'Mobile app built with .NET MAUI', link: 'https://github.com/chasenaplesdev/project3' },
    { name: 'Project 4', description: 'AI-powered chatbot', link: 'https://github.com/chasenaplesdev/project4' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.name} className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

const About = () => (
  <div className="max-w-2xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg mb-4">
      I'm a full stack developer with extensive experience in JavaScript, Python, Node.js, C++, data analysis, C#, .NET, and .NET MAUI.
    </p>
    <p className="text-lg mb-4">
      My passion lies in AI, web development, and mobile application development. I'm constantly exploring new technologies and pushing the boundaries of what's possible in software development.
    </p>
    <h3 className="text-2xl font-bold mt-6 mb-2">Skills</h3>
    <ul className="list-disc list-inside">
      <li>JavaScript & React</li>
      <li>Python & Data Analysis</li>
      <li>Node.js</li>
      <li>C++ & C#</li>
      <li>.NET & .NET MAUI</li>
      <li>AI & Machine Learning</li>
      <li>Web & Mobile Development</li>
    </ul>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or API call)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Email: chase.naples@example.com</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 rounded h-32 text-white"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    { title: 'The Future of AI in Web Development', date: '2024-03-15' },
    { title: 'Building Cross-Platform Apps with .NET MAUI', date: '2024-03-01' },
    { title: 'Optimizing React Performance', date: '2024-02-15' },
    { title: 'Python vs JavaScript: A Data Analysis Showdown', date: '2024-02-01' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogPosts.map((post) => (
        <div key={post.title} className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
          <p className="text-gray-400">{post.date}</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'Portfolio':
        return <Portfolio />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Blog':
        return <Blog />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  );
};

export default App;
