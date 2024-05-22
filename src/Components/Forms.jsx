

export default function Forms({ register, setRegister, name, setName, username, setUsername, password, setPassword, handleLogin, handleRegister }) {

	function loginForm() {
		return (
			<form onSubmit={handleLogin} className="flex p-4 py-16 flex-col transition-transform ease-out duration-150 gap-5 border-2 rounded-md bg-slate-200">
				<h3 className="mx-auto font-bold text-2xl mb-5">Login</h3>
				<label htmlFor="username">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						value={username}
						id='username'
						onChange={({ target }) => setUsername(target.value)}
						placeholder="username" />
				</label>
				<label htmlFor="password">
					<input type="password"
						className="block h-9 w-2/3 md:w-2/4 mx-auto py-1  px-4 text-sm rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						value={password}
						id='password'
						onChange={({ target }) => setPassword(target.value)}
						placeholder="Password" />
				</label>
				<div className="flex flex-col justify-center w-9/12 gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold bg-gradient-to-r from-cyan-400 to-green-600 text-white border transition-colors ease-out duration-300 hover:bg-cyan-700 bg-cyan-400 active:bg-slate-300 active:border-cyan-600 rounded-md">Iniciar Sesion</button>
					<span>No tienes una cuenta? Registrate
						<a onClick={() => { setRegister(true) }}
							className="text-center font-semibold text-gray-500 border transition-colors ease-out delay-300 hover:text-cyan-500 "> aquí</a>
					</span>
				</div>
			</form>
		)
	}

	function registerForm() {
		return (
			<form onSubmit={handleRegister} className="flex p-4 py-10 flex-col transition-border ease-out duration-150 gap-5 border-2 rounded-md bg-slate-200">
				<h3 className="mx-auto font-bold text-2xl mb-5">Register</h3>
				<label htmlFor="username">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						value={username}
						id='username'
						onChange={({ target }) => setUsername(target.value)}
						placeholder="username" />
				</label>
				<label htmlFor="name">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						value={name}
						id='name'
						onChange={({ target }) => setName(target.value)}
						placeholder="name" />
				</label>
				<label htmlFor="password">
					<input type="password"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						value={password}
						id='password'
						onChange={({ target }) => setPassword(target.value)}
						placeholder="Password" />
				</label>
				<div className="flex flex-col w-9/12 gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold bg-gradient-to-r from-cyan-400 to-green-600 text-white border transition-colors ease-out duration-300 hover:bg-cyan-700 bg-cyan-400 active:bg-slate-300 active:border-cyan-600 rounded-md">Registrarse</button>
					<span>Ya tienes una cuenta?
						<a onClick={() => { setRegister(false) }}
							className="text-center font-semibold text-gray-500 border transition-colors ease-out delay-300 hover:text-cyan-500 "> Iniciar Sesion</a>
					</span>
				</div>
			</form>
		)
	}

	return (
		<div className="flex my-10 justify-center mx-auto w-8/12 xl:w-2/4 p-4 flex-col transition-border ease-out duration-150 gap-2">
			{register ?
				registerForm() :
				loginForm()}
		</div>
	)
}