const F1315 = () => {
  return (
    <>
      <div className="flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm">
        <form className="w-full max-w-lg text-white">
          {/* Tus campos existentes */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Fecha
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Codigo de operario
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                type="number"
                placeholder="000"
              />
            </div>
          </div>
          {/* Otros campos */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Codigo de operario
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border  border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                type="number"
                placeholder="000"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Horas asignadas
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                type="text"
                placeholder="0"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Paradas mayores
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                type="text"
                placeholder="0"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Total horas
              </label>
              <input
                className="appearance-none block w-full text-blue-950 bg-gray-200 text-red-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                type="text"
                placeholder="0"
                readOnly
                value={0.0}
              />
            </div>
          </div>
          {/* Otros campos */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Horometro inicial
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="HourStart"
                type="number"
                placeholder="00000000"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="machine"
              >
                Maquina
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-blue-950 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="machine"
                >
                  <option>Punt 1</option>
                  <option>Punt 2</option>
                  <option>Punt 2</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Horometro final
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="hourEnd"
                type="number"
                placeholder="00000000"
              />
            </div>

            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="code"
              >
                Observaciones
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="code"
                placeholder="..."
              />
            </div>
          </div>
          {/* Botón de enviar */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default F1315;
