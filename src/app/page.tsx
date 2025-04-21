"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  Sun,
  Moon,
  Code,
  Cpu,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

export default function ModernPersonalSite() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const socialLinks = [
    { icon: Github, url: "https://github.com/sofanati-nour", label: "Github" },
    {
      icon: Twitter,
      url: "https://twitter.com/Nour_Sofanati",
      label: "Twitter",
    },
    { icon: Linkedin, url: "https://linkedin.com/in/nour", label: "LinkedIn" },
    { icon: Globe, url: "https://nour-sofanati.com", label: "الموقع الشخصي" },
  ];

  const skills = [
    { name: "تطوير الويب", icon: Code, color: "from-blue-500 to-cyan-400" },
    {
      name: "الذكاء الاصطناعي",
      icon: BrainCircuit,
      color: "from-purple-500 to-pink-400",
    },
    {
      name: "تقنيات الحوسبة",
      icon: Cpu,
      color: "from-amber-500 to-orange-400",
    },
  ];

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 opacity-20 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        ></div>
        <motion.div
          className={`absolute inset-0 opacity-10 bg-gradient-to-br ${
            isDarkMode
              ? "from-blue-600 via-purple-600 to-cyan-600"
              : "from-blue-300 via-purple-300 to-cyan-300"
          }`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        ></motion.div>
      </div>

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
          isDarkMode
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-white hover:bg-gray-100 shadow-md"
        } transition-colors duration-200`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.button>

      {/* Navigation */}
      <nav
        className={`fixed bottom-6 right-1/2 transform translate-x-1/2 z-40 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg`}
      >
        <motion.ul
          className="flex space-x-4 md:space-x-8 rtl:space-x-reverse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#home"
              className={`text-sm font-medium ${
                activeSection === "hero"
                  ? "text-blue-500"
                  : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
              }`}
              onClick={() => setActiveSection("hero")}
            >
              الرئيسية
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#about"
              className={`text-sm font-medium ${
                activeSection === "about"
                  ? "text-blue-500"
                  : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
              }`}
              onClick={() => setActiveSection("about")}
            >
              نبذة عني
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#skills"
              className={`text-sm font-medium ${
                activeSection === "skills"
                  ? "text-blue-500"
                  : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
              }`}
              onClick={() => setActiveSection("skills")}
            >
              مهاراتي
            </a>
          </motion.li>
        </motion.ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center py-8 md:py-12"
        >
          <AnimatePresence>
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-6 md:mb-8"
              >
                <div className="relative inline-block">
                  <Image
                    src="/nour-sofanati-portrait.jpg"
                    alt="نور صوفاناتي"
                    width={140}
                    height={140}
                    className="rounded-full mx-auto object-cover sm:w-[160px] sm:h-[160px] w-[140px] h-[140px]"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 3px rgba(79, 70, 229, 0.2)",
                        "0 0 0 6px rgba(79, 70, 229, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                نور صوفاناتي
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-medium">
                  مطور ويب متخصص • مستشار تقني • خبير برمجة
                </h2>
              </motion.div>

              <motion.p
                className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8 md:mb-10 px-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                متخصص في تطوير تطبيقات الويب المتقدمة وتقنيات الذكاء الاصطناعي،
                أعمل على بناء حلول تقنية مبتكرة للشركات والمشاريع العالمية.
              </motion.p>

              <motion.div
                className="flex justify-center space-x-3 md:space-x-4 rtl:space-x-reverse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#about"
                  className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm md:text-base"
                >
                  عن سيرتي
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#skills"
                  className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  } transition-colors duration-200 text-sm md:text-base`}
                >
                  مهاراتي
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center py-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">نبذة عني</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">خبرات مهنية</h3>
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  مطور ويب متخصص في تطوير تطبيقات الويب المتقدمة. أعمل على
                  تقنيات الويب الحديثة وأحب دائماً استكشاف كل ما هو جديد في مجال
                  التطوير.
                </p>
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  أعمل حالياً كمستشار تقني في{" "}
                  <a
                    href="https://audimee.com"
                    className="text-blue-500 hover:underline"
                  >
                    Audimee.com
                  </a>{" "}
                  و{" "}
                  <a
                    href="https://simplebackups.com"
                    className="text-blue-500 hover:underline"
                  >
                    SimpleBackups.com
                  </a>
                </p>
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#skills"
                  className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600"
                >
                  <span>تعرّف على مهاراتي</span>
                  <ArrowRight className="mr-2 h-4 w-4" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`p-8 rounded-2xl shadow-lg ${
                  isDarkMode ? "bg-gray-800 bg-opacity-50" : "bg-white"
                } backdrop-blur-sm`}
              >
                <div className="space-y-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 rtl:space-x-reverse p-4 rounded-xl ${
                          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                        } transition-colors duration-200`}
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${
                            index % 3 === 0
                              ? "from-blue-500 to-cyan-400"
                              : index % 3 === 1
                                ? "from-purple-500 to-pink-400"
                                : "from-amber-500 to-orange-400"
                          }`}
                        >
                          <IconComponent
                            className="h-5 w-5 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{link.label}</h4>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {link.url.replace(/(^\w+:|^)\/\//, "")}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center py-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">مهاراتي</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`p-6 md:p-8 rounded-2xl shadow-lg text-center ${
                      isDarkMode ? "bg-gray-800 bg-opacity-50" : "bg-white"
                    } backdrop-blur-sm transition-all duration-300`}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${skill.color}`}
                    >
                      <IconComponent
                        className="h-8 w-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {index === 0 &&
                        "خبرة في بناء تطبيقات الويب المتقدمة باستخدام React و Next.js"}
                      {index === 1 &&
                        "تطوير حلول ذكية باستخدام تقنيات التعلم الآلي والذكاء الاصطناعي"}
                      {index === 2 &&
                        "تصميم وتطوير بنية تحتية قوية وقابلة للتوسع للمشاريع"}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`py-8 ${isDarkMode ? "bg-gray-800 bg-opacity-30" : "bg-gray-50"} backdrop-blur-sm`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            جميع الحقوق محفوظة © {new Date().getFullYear()} نور صوفاناتي
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
