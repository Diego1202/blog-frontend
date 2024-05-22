import { useState, useEffect } from 'react'

import blogService from './services/blogs'
import Blog from './Components/Blog'
import authService from './services/auth'
import Forms from './Components/Forms'
import NewBlog from './Components/NewBlog'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [register, setRegister] = useState(false)
	const [message, setMessage] = useState(null)
	const [user, setUser] = useState(null)
	const [view, setView] = useState(false)
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [url, setUrl] = useState('')

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('logedInUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			blogService.setToken(user.token)
		}
	}, [])

	useEffect(() => {
		blogService.getAll().then(blogs => {
			console.log(blogs)
			setBlogs(blogs)
		}
		)
	}, [user])

	async function handleLogin(event) {
		event.preventDefault()
		console.log('Se está ejecutando el login')
		try {
			const user = await authService.login({ username, password })
			if (user) {
				setUser(user)
				blogService.setToken(user.token)
				window.localStorage.setItem('logedInUser', JSON.stringify(user))
				setUsername('')
				setPassword('')
			}
		} catch (error) {
			console.log(error)
			if (error.response) {
				setMessage(error.response.data.error)
				setUser(null)
				setTimeout(() => {
					setMessage(null)
				}, 5000)
			}
		}
	}

	function handleLogout() {
		window.localStorage.removeItem('logedInUser')
		setUser(null)
		blogService.setToken(null)
		setMessage(null)
		setBlogs([])
		setUsername('')
		setPassword('')
	}

	async function handleRegister(event) {
		event.preventDefault()
		try {
			await authService.register({ name, username, password })
			setName('')
			setUsername('')
			setPassword('')
			setRegister(false)
		} catch (error) {
			console.log(error)
			if (error.response) {
				setMessage(error.response.data.error)
				setUser(null)
				setTimeout(() => {
					setMessage(null)
				}, 5000)
			}
		}
	}

	async function handleBlogAdd(event) {
		event.preventDefault()
		try {
			const newBlog = await blogService.create({ title, author, url })
			setBlogs(blogs.concat(newBlog))
console.log(newBlog)
			setView(!view)
			setTitle('')
			setAuthor('')
			setUrl('')
		} catch (error) {
			console.log(error)
			if (error.response) {
				setMessage(error.response.data.error)
				setUser(null)
				setTimeout(() => {
					setMessage(null)
				}, 5000)
			}
		}
	}

	function blogList() {
		return (
			<section className='flex p-4 py-10 w-2/3 mx-auto mt-8 flex-col transition-border ease-out duration-150 gap-5 border-2 rounded-md bg-slate-200'>
				<header className='flex justify-around'>
					<h2 className='text-3xl font-bold'>Blogs</h2>
					<h3>{user.name}&nbsp;
						<button className='text-red-600 font-bold transition-colors ease-out delay-300 hover:underline rounded' onClick={handleLogout}>Logout</button>
					</h3>
				</header>
				<button className='text-red-600 font-bold transition-colors ease-out delay-300 hover:underline rounded' onClick={() => setView(!view)}>{ view ? 'Cancelar' : 'Agregar nuevo blog'}</button>
				<article>
					<NewBlog 
						title={title} author={author} url={url} setTitle={setTitle} setAuthor={setAuthor} setUrl={setUrl} handleBlogAdd={handleBlogAdd} show={view}/>
				</article>
				<article>
				{
				blogs.length === 0 ? <h1 className='text-xl font-bold mx-auto p-4'>No hay blogs</h1> :
				blogs.map(blog => <Blog key={blog._id} blog={blog} />)}
				</article>
			</section>
		)
	}

	function Notification() {
		return (
			<div className="text-center w-80 text-red-600 text-sm">
				{message}
			</div>
		)
	}
	return (
		<div>
			{message !== null ? Notification() : null}
			{user !== null ?
				blogList() :
				<Forms
					handleLogin={handleLogin}
					name={name}
					setName={setName}
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					handleRegister={handleRegister}
					register={register}
					setRegister={setRegister}
				/>
			}


		</div>
	)
}

export default App