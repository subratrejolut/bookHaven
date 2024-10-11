import React, { useState } from "react";
import { Book, Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Sell Your Book", path: "/sell-book" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Book className="h-6 w-6 mr-2" />
            <Link to="/" className="font-bold text-xl font-poppins">
              BookHaven
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-poppins hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <ShoppingCart className="ml-4 h-6 w-6 cursor-pointer hover:text-indigo-200" />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-poppins hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-indigo-500">
            <div className="flex items-center px-5">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="font-poppins w-full bg-indigo-500 text-white placeholder-indigo-200 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-200" />
              </div>
              <ShoppingCart className="ml-4 h-6 w-6 cursor-pointer hover:text-indigo-200" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
