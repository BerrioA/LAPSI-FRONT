export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Nombre */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h2 className="text-white text-xl font-bold tracking-wide">
                LAPSICECAR
              </h2>
              <img
                src="/Logo.webp"
                alt="Logo Lapsi"
                className="w-32 h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Ubícanos</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <address className="not-italic leading-relaxed">
                Carretera Troncal de Occidente Km. 1,
                <br />
                Vía Corozal - Sincelejo, Colombia
              </address>
              <div className="space-y-1">
                <p>
                  <a
                    href="tel:+573145248816"
                    className="hover:text-white transition-colors duration-200"
                  >
                    3145248816
                  </a>
                  {" - "}
                  <a
                    href="tel:+573167410103"
                    className="hover:text-white transition-colors duration-200"
                  >
                    3167410103
                  </a>
                </p>
                <p>
                  PBX:{" "}
                  <a
                    href="tel:+6052798900"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +60(5) 2798900
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:archivocentral@cecar.edu.co"
                    className="hover:text-white transition-colors duration-200"
                  >
                    archivocentral@cecar.edu.co
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces Útiles */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Enlaces Útiles</h3>
            <nav className="space-y-2">
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Acerca de Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Soporte
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Coordinadores */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Coordinadores</h3>
            <div className="text-gray-300 text-sm space-y-3">
              <div>
                <p className="font-semibold text-white">
                  Cesar Tulio Argumedo de la Ossa
                </p>
                <p>Magíster en Psicología</p>
                <p>Coordinador área de procesos cognitivos</p>
                <p>
                  <a
                    href="mailto:cesar.argumedo@cecar.edu.co"
                    className="hover:text-white transition-colors duration-200"
                  >
                    cesar.argumedo@cecar.edu.co
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">
                  Lisbeth Margarita Hoyos Córdoba
                </p>
                <p>PhD(c) en Neurociencia Cognitiva Aplicada</p>
                <p>Magíster en Trastornos Cognoscitivos y del Aprendizaje</p>
                <p>Coordinadora laboratorio de psicología</p>
                <p>
                  <a
                    href="mailto:lisbeth.hoyosc@cecar.edu.co"
                    className="hover:text-white transition-colors duration-200"
                  >
                    lisbeth.hoyosc@cecar.edu.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LAPSICECAR. Todos los derechos
              reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desarrollado con ❤️ en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
