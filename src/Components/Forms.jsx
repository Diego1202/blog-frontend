

export default function Forms({ register, setRegister, name, setName, username, setUsername, password, setPassword, handleLogin, handleRegister }) {

	function loginForm() {
		return (
			<form onSubmit={handleLogin} className="  flex p-4 py-16 flex-col transition-transform ease-out duration-150 gap-5  rounded-md bg-secondary shadow-lg">
				<h3 className="mx-auto font-bold text-5xl mb-5 bg-tertiary py-3 px-5 rounded-md shadow-lg">Blogs</h3>
				<h5 className="mx-auto font-bold text-2xl">Ingrese sus datos</h5>
				
				<label htmlFor="username">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						value={username}
						id='username'
						onChange={({ target }) => setUsername(target.value)}
						placeholder="username" />
				</label>
				<label htmlFor="password">
					<input type="password"
						className="block h-9 w-2/3 md:w-2/4 mx-auto py-1  px-4 text-sm  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						value={password}
						id='password'
						onChange={({ target }) => setPassword(target.value)}
						placeholder="Password" />
				</label>
				<div className="flex flex-col justify-center items-center w-[80%] gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold   text-black bg-primary rounded-md transition-transform hover:scale-105">Iniciar Sesion</button>
					<span className="pt-5">No tienes una cuenta?
						<a onClick={() => { setRegister(true) }}
							className="text-center font-bold text-black px-2 rounded-md  hover:underline pointer">Registrate</a>
					</span>
				</div>
			</form>
		)
	}

	function registerForm() {
		return (
			<form onSubmit={handleRegister} className="flex p-4 py-16 flex-col transition-transform ease-out duration-150 gap-5  rounded-md bg-secondary shadow-lg">
				<h3 className="mx-auto font-bold text-5xl mb-5 bg-tertiary py-3 px-5 rounded-md shadow-lg">Blogs</h3>
				<h5 className="mx-auto font-bold text-2xl">Ingrese sus datos</h5>

				<label htmlFor="username">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						value={username}
						id='username'
						onChange={({ target }) => setUsername(target.value)}
						placeholder="username" />
				</label>
				<label htmlFor="name">
					<input type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						value={name}
						id='name'
						onChange={({ target }) => setName(target.value)}
						placeholder="name" />
				</label>
				<label htmlFor="password">
					<input type="password"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						value={password}
						id='password'
						onChange={({ target }) => setPassword(target.value)}
						placeholder="Password" />
				</label>
				<div className="flex flex-col justify-center items-center w-[80%] gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold   text-black bg-primary rounded-md transition-transform hover:scale-105">Registrarse</button>
					<span className="pt-5">Ya tienes una cuenta?
						<a onClick={() => { setRegister(false) }}
							className="text-center font-bold text-black px-2 rounded-md  hover:underline pointer"> Iniciar Sesion</a>
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