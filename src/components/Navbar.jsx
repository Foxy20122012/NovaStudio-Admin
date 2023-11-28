"use client";
import React, { useState } from "react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  user,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  const title = "Asesores";
  const [productosMenuVisible, setProductosMenuVisible] = useState(false);
  const [nosotrosMenuVisible, setNosotrosMenuVisible] = useState(false);

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // Agregamos el estado para el menú móvil

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible); // Cambiamos la visibilidad del menú móvil al hacer clic en el botón
  };

  const toggleProductosMenu = () => {
    setProductosMenuVisible(!productosMenuVisible);
  };

  const toggleNosotrosMenu = () => {
    setNosotrosMenuVisible(!nosotrosMenuVisible);
  };

  const Marca = () => {
    return (
      <a
        href=""
        className="flex items-center md:flex md:justify-start md:mx-auto ml-auto "
      >
        <img src="/nova.jpeg" className="h-12" alt="Nova Studio" />
      </a>
    );
  };

  const InicioButton = () => {
    const inicioLabel = "Home";

    return (
      <a
        href="/home"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {inicioLabel}
      </a>
    );
  };

  const ProductosButton = () => {
    const productosLabel = "Productos";

    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleProductosMenu}
            className="flex items-center text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
          >
            {productosLabel} <ChevronDownIcon className="w-4 h-4 " />
          </button>
        </div>
        {productosMenuVisible && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="py-2">
              <a
                href="/admin-finanzas"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Administración y Finanzas
              </a>
              <a
                href="/servicios-Ti"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Servicios de TI
              </a>
              <a
                href="/process"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Procesos y Recaudación
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Clientes = () => {
    const clientesLabel = "Clientes";

    return (
      <a
        href="/affiliates"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {clientesLabel}
      </a>
    );
  };

  const Nosotros = () => {
    const nosotrosLabel = "Nosotros";

    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleNosotrosMenu}
            className="flex items-center text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
          >
            {nosotrosLabel} <ChevronDownIcon className="w-4 h-4 " />
          </button>
        </div>
        {nosotrosMenuVisible && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="py-2">
              <a
                href="/Us"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Nosotros
              </a>
              <a
                href="/consulting"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Prestaciones de Servicios
              </a>
              <a
                href="/news"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Noticias Relevantes
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Contactos = () => {
    return (
      <>
        <a
          href="mailto:guatemala@via-asesores.com"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 invisible md:visible"
        >
          novaStudios@gmail.com
        </a>
        <a
          href="telto:+502 22971267"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800  invisible md:visible"
        >
          +502 4835 6624
        </a>
        <Link href="/login">
          <button>
            <UserCircleIcon className="h-10 w-10 text-white invisible md:visible" />
          </button>
        </Link>
      </>
    );
  };

  // const AccesosButton = () => {
  //   const accesosLabel = "Accesos";

  //   return (
  //     <a
  //       href="/accesos"
  //       className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
  //     >
  //       {accesosLabel}
  //     </a>
  //   );
  // };

  const ContactameButton = () => {
    const contactameLabel = "Contactenos";

    return (
      <a
        href="/contactame"
        className="invisible md:visible text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {contactameLabel}
      </a>
    );
  };

  return (
    <nav className="bg-sky-900 border-sky-200 rounded-lg m-1 dark:bg-gray-900 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex justify-center">
          <button
            className=" md:hidden ml-auto flex justify-end"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <Marca />
        <div className="flex mt-4">
          <div
            className={`${
              mobileMenuVisible ? "block" : "hidden"
            } md:block md:flex md:items-center md:w-auto my-3`}
          >
            <InicioButton />
            <ProductosButton />
            <Clientes />
            <Nosotros />
            {/* <AccesosButton/> */}
            <ContactameButton />
          </div>
        </div>

        <div className="md:flex md:items-center ">
          <Contactos />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
