'use client'
import React, { useState } from "react";

const ProductDropdown = () => {
  // Puedes agregar las opciones específicas de productos aquí
  const productOptions = [
    "Producto 1",
    "Producto 2",
    "Producto 3",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {productOptions.map((option, index) => (
        <a
          key={index}
          href={`#${option.toLowerCase().replace(" ", "-")}`}
          className="text-gray-700 hover:text-blue-700"
        >
          {option}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="fixed w-full">
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="index.html" className="flex items-center">
            <img
              src="assets/img/orbis/cropped-Logo-VIA-Asesores-1-90x60.png"
              className="mr-3 h-12 sm:h-9"
              alt="Logo"
            />
          </a>
          <button
            id="botonburger"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block justify-between items-center w-full md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="index.html"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 md:text-gray-600"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <div className="relative">
              <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 mmd:text-gray-600"
                  >
                  Productos
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isMobileMenuOpen && (
                    <ProductDropdown />
                  )}
                  </div>
              </li>
              {/* Otras opciones del menú... */}

              <li>
                <a
                  href="tel:+50222129760"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 md:text-gray-600"
                >
                  <i className="fa-solid fa-phone"></i>+502 2212 9760
                </a>
              </li>
              <li>
                <a
                  href="mailto:guatemala@via-asesores.com"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 md:text-gray-600"
                >
                  <i className="fa-solid fa-envelope"></i>{" "}
                  guatemala@via-asesores.com
                </a>
              </li>
              <li>
                <a
                  href="contactenos.html"
                  className="block md:p-2 rounded md:p-0 text-gray-600 md:text-white md:bg-blue-500 btnconta"
                >
                  Contactenos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 hidden"
        >
          {/* Opciones del menú desplegable... */}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
