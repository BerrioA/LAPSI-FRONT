import { Text } from "../components/UI";

export const MissionVision = () => {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: "#E6D3B3" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#152E3A" }}>
            Nuestro Propósito
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: "#B29A64" }}
          ></div>
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea central */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{ backgroundColor: "#B29A64" }}
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
              style={{ backgroundColor: "#B29A64" }}
            ></div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
              style={{ backgroundColor: "#B29A64" }}
            ></div>
          </div>

          {/* Misión - Lado izquierdo */}
          <div className="relative mb-20 lg:mb-32">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Contenido Misión */}
              <div className="w-full lg:w-5/12 lg:pr-8 mb-8 lg:mb-0">
                <div
                  className="p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                      style={{ backgroundColor: "#A3B18A" }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: "#FFFFFF" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-3xl font-bold"
                      style={{ color: "#152E3A" }}
                    >
                      Nuestra Misión
                    </h3>
                  </div>
                  <Text
                    className="text-lg leading-relaxed"
                    style={{ color: "#284B63" }}
                  >
                    Capacitar a individuos y comunidades para{" "}
                    <strong className="text-primary">
                      adoptar un estilo de vida sostenible y consciente
                    </strong>
                    , fomentando la armonía con el medio ambiente y promoviendo
                    el bienestar integral. Buscamos ser un catalizador para el
                    cambio, inspirando acciones que conduzcan a un futuro más
                    equitativo y respetuoso con la vida.
                  </Text>
                </div>
              </div>

              {/* Indicador central para Misión */}
              <div className="flex-shrink-0 w-full lg:w-2/12 flex justify-center mb-8 lg:mb-0">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#B29A64",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: "#A3B18A" }}
                    ></div>
                  </div>
                  <div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "#B29A64", color: "#FFFFFF" }}
                  >
                    Paso 1
                  </div>
                </div>
              </div>

              {/* Espacio vacío lado derecho para Misión */}
              <div className="w-full lg:w-5/12"></div>
            </div>
          </div>

          {/* Visión - Lado derecho */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Espacio vacío lado izquierdo para Visión */}
              <div className="w-full lg:w-5/12"></div>

              {/* Indicador central para Visión */}
              <div className="flex-shrink-0 w-full lg:w-2/12 flex justify-center mb-8 lg:mb-0">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#B29A64",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: "#284B63" }}
                    ></div>
                  </div>
                  <div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "#B29A64", color: "#FFFFFF" }}
                  >
                    Paso 2
                  </div>
                </div>
              </div>

              {/* Contenido Visión */}
              <div className="w-full lg:w-5/12 lg:pl-8">
                <div
                  className="p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                      style={{ backgroundColor: "#284B63" }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: "#FFFFFF" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-3xl font-bold"
                      style={{ color: "#152E3A" }}
                    >
                      Nuestra Visión
                    </h3>
                  </div>
                  <Text
                    className="text-lg leading-relaxed"
                    style={{ color: "#284B63" }}
                  >
                    Ser la{" "}
                    <strong className="text-primary">
                      referencia global en soluciones innovadoras y sostenibles
                    </strong>{" "}
                    que empoderen a las personas para construir un mundo donde
                    el desarrollo humano coexista en equilibrio con la salud del
                    planeta. Visualizamos un futuro donde cada decisión, grande
                    o pequeña, contribuya a una sociedad más justa, resiliente y
                    próspera para todas las generaciones.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento decorativo inferior */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full"
            style={{ backgroundColor: "#C9DDF0" }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#B29A64" }}
            ></div>
            <span className="text-sm font-medium" style={{ color: "#152E3A" }}>
              Lapsi Web
            </span>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#B29A64" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};