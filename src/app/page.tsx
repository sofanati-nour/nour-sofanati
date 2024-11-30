"use client";
import {
  Moon,
  Sun,
  Search,
  Menu,
  Globe,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const BlogLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialLinks = [
    { icon: Github, url: "https://github.com/sofanati-nour", label: "Github" },
    {
      icon: Twitter,
      url: "https://twitter.com/Nour_Sofanati",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/nour",
      label: "LinkedIn",
    },
    { icon: Globe, url: "https://nour-sofanati.com", label: "الموقع الشخصي" },
  ];

  const posts = [
    {
      title: "كيف تصبح مطور ويب محترف",
      excerpt: "خطوات بسيطة للبدء في مجال تطوير الويب وتحقيق النجاح المهني",
      date: "٢٤ نوفمبر ٢٠٢٤",
      category: "تطوير الويب",
      image: "https://via.placeholder.com/1600x900",
    },
    {
      title: "أفضل أدوات التطوير في ٢٠٢٤",
      excerpt: "استعراض لأهم الأدوات التي يجب أن يعرفها كل مطور",
      date: "٢٣ نوفمبر ٢٠٢٤",
      category: "أدوات",
      image: "https://via.placeholder.com/1600x900",
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
      dir="rtl"
    >
      {/* Header */}
      <header
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md sticky top-0 z-50`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={toggleMenu} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-2xl font-bold">نور صوفاناتي</h1>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <div
                className={`hidden md:flex items-center gap-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <a href="#" className="hover:text-blue-500">
                  الرئيسية
                </a>
                <a href="#" className="hover:text-blue-500">
                  المقالات
                </a>
                <a href="#" className="hover:text-blue-500">
                  عني
                </a>
                <a href="#" className="hover:text-blue-500">
                  اتصل بي
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${isDarkMode ? "bg-gray-800" : "bg-white"} border-b fixed w-full z-40`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-blue-500">
                الرئيسية
              </a>
              <a href="#" className="hover:text-blue-500">
                المقالات
              </a>
              <a href="#" className="hover:text-blue-500">
                عني
              </a>
              <a href="#" className="hover:text-blue-500">
                اتصل بي
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-6">
            {/* Author Card */}
            <div
              className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
            >
              <div className="text-center mb-4">
                <Image
                  src="/nour-sofanati-portrait.jpg"
                  alt="نور صوفاناتي بورتريت"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">نور صوفاناتي</h3>
                <p
                  className={`mb-4 text-balance ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  مطور ويب متخصص في تطوير تطبيقات الويب المتقدمة. مستشار تقني في{" "}
                  <a
                    href="https://audimee.com"
                    hrefLang="en"
                    className=" underline"
                  >
                    Audimee.com
                  </a>{" "}
                  و{" "}
                  <a href="https://simplebackups.com" className="underline">
                    SimpleBackups.com
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}
                      title={link.label}
                    >
                      <IconComponent className="size-5" strokeWidth={1} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div
              className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-4">التصنيفات</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-blue-500">
                  تطوير الويب
                </a>
                <a href="#" className="block hover:text-blue-500">
                  أدوات التطوير
                </a>
                <a href="#" className="block hover:text-blue-500">
                  نصائح تقنية
                </a>
                <a href="#" className="block hover:text-blue-500">
                  مقالات عامة
                </a>
              </div>
            </div>
          </aside>
          {/* Main Content Area */}
          <div className="md:col-span-8">
            {/* Search Bar */}
            <div
              className={`relative mb-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg`}
            >
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                className={`w-full p-4 pr-12 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            </div>

            {/* Blog Posts */}
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className={`rounded-lg overflow-hidden col-span-1 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full  aspect-video bg-red"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-500">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                    <p
                      className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {post.excerpt}
                    </p>
                    <a href="#" className="text-blue-500 hover:underline">
                      اقرأ المزيد ←
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} mt-12 py-8`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            جميع الحقوق محفوظة © ٢٠٢٤ نور صوفاناتي
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
