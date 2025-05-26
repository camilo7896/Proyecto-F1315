const CreateUser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center rounded-2xl backgroundForm">
      <form className="p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4">
        <h2 className="text-2xl font-semibold text-center">Crear usurio</h2>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            Nombres
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Apellidos
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="code" className="block text-sm font-medium mb-1">
            Codigo
          </label>
          <input
            type="text"
            id="code"
            name="code"
            className="w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="section" className="block text-sm font-medium mb-1">
            Seccion
          </label>
          <input
            type="text"
            id="section"
            name="section"
            className="w-full p-2 rounded  border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
