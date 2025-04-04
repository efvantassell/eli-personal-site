import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const words = ["Electrical Engineer", "Developer", "Innovator"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      setText((prev) => {
        const updated = isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1);
        return updated;
      });

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated background blob */}
        <motion.div
          className="absolute w-[60vw] h-[60vw] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ zIndex: 0 }}
        />

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-semibold mb-4 relative z-10"
        >
          Eli Van Tassell
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl relative z-10 h-10"
        >
          <span className="border-r-2 border-black pr-1 animate-pulse">{text}</span>
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg leading-relaxed"
          >
            I'm an electrical engineer passionate about embedded systems, signal processing, and clean design. I enjoy working at the intersection of hardware and software, where I can blend creative problem-solving with deep technical insight. 
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Embedded Sensor Dashboard", "Teensy CNN Classifier"].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-medium mb-2">{project}</h3>
                <p className="text-gray-600">An innovative solution showcasing deep integration of software and hardware.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">My Resume</h2>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-black text-white rounded-full font-medium"
          >
            Download Resume
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
          <p className="mb-8">Interested in collaborating or learning more about my work?</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="mailto:vantassellco@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-black rounded-full font-medium"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/eli-van-tassell-5b627b252/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
