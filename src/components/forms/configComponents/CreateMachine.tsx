const CreateMachine = () => {
  return (
    <div className="roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm">
      <form className="bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6">
        <h2 className="text-2xl font-semibold text-center">Crear maquina</h2>

        {/* Date Field */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-2 rounded  border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Machine Abbreviation Field */}
        <div>
          <label
            htmlFor="abbreviation"
            className="block text-sm font-medium mb-1"
          >
            Abreviacion de maquina
          </label>
          <input
            type="text"
            id="abbreviation"
            name="abbreviation"
            placeholder="e.g., F1315"
            className="w-full px-4 py-2 rounded  border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Machine Name Field */}
        <div>
          <label
            htmlFor="machineName"
            className="block text-sm font-medium mb-1"
          >
            Nombre de maquina
          </label>
          <input
            type="text"
            id="machineName"
            name="machineName"
            placeholder="e.g., Cutter Alpha"
            className="w-full px-4 py-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Efficiency Field */}
        <div>
          <label
            htmlFor="efficiency"
            className="block text-sm font-medium mb-1"
          >
            Eficiencia(%)
          </label>
          <input
            type="number"
            id="efficiency"
            name="efficiency"
            min="0"
            max="100"
            placeholder="e.g., 92"
            className="w-full px-4 py-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold"
        >
          Crear maquina
        </button>
      </form>
    </div>
  );
};

export default CreateMachine;
