const Login = () => {
  return (
    <div className="flex p-6 flex-col items-center justify-center h-screen">
      <div className="absolute text-2xl left-6 top-6 font-bold arrow">
        {"<"}
      </div>

      <div className="text-left">
        <h2 className="font-semibold text-3xl">Welcome Back</h2>
        <p className="text-base text-gray-600 mt-4">
          Log In to your Placoo account to explore your dream place to live
          across the whole world!
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold">
            Username
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full py-2 pl-10 border rounded-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-key"></i>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-2 pl-10 border rounded-full"
            />
          </div>
        </div>

        {/* Botón para iniciar sesión */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-full">
          Log In
        </button>

        {/* Separador o texto adicional */}
        <div className="mt-4 text-center">
          <span className="text-gray-500">Or log in with</span>
        </div>

        <div className="flex justify-center mt-4">
          <button className="mr-2 p-2 bg-red-500 text-white rounded-full">
            <i className="fab fa-google"></i>
          </button>
          <button className="p-2 bg-black text-white rounded-full">
            <i className="fab fa-apple"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
