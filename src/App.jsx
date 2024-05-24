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
			setBlogs(blogs)
		}
		).catch(error => {
			if (error.response.data.error === 'jwt expired'){
				console.log(error.response.data.error)
				handleLogout();
			}
			
		})
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


	async function onLikeBlogs(id){
		try {
			const updateLike = blogs.find(b => b._id === id)

			if (updateLike){
			const updatedBlog = {
				...updateLike,
				likes: updateLike.likes + 1
			};
			await blogService.edit(id, updatedBlog)
			setBlogs(blogs.map(b => b._id === id? updatedBlog : b))
		} else{
			console.log('blog 404')
		}
		} catch (error) {
			console.log(error);
			if (error.response){
				setMessage(error.response.data.error);
				setUser(null);
				setTimeout(() => {
					setMessage(null);
				}, 5000);
			}
			
		}
	}

	

	  
	  

	async function handleBlogDelete(id) {
		try {
			await blogService.remove(id)
			setBlogs(blogs.filter(b => b._id !== id))
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

	const AddFrom = () => {

		return (
			<div className='flex justify-center items-center gap-3'>
				<p>Agregar blog</p>
				<img src="../public/add_box_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
			</div>

		)
	}

	const CancelForm = () => {
		return (
			<div className='flex justify-center items-center gap-3'>
				<p>Cancelar</p>
				<img src="../public/cancel_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
			</div>
		)
	}

	function blogList() {
		return (
			<section className='flex flex-col bg-secondary rounded-md w-[55%] h-2/6 p-5 m-7'>
				<header className='flex max-md:flex-col max-md:gap-5 justify-between border-2 border-tertiary bg-tertiary p-5 rounded-md shadow-lg'>
					<h2 className='text-3xl font-bold'>Blogs</h2>
					<nav className='flex justify-center items-center max-md:flex-col gap-3'>
						<span className='w-auto max-md:hidden'>{user.username}</span>
						<img className='w-7 max-md:hidden' src="../public/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
						<button className=' flex justify-center items-center text-black font-bold bg-primary p-1 rounded-md shadow-lg gap-1 h-[80%] w-[55%] pr-3 pl-3 transition-transform hover:scale-105' onClick={handleLogout}>Logout
							<img className='w-7' src="../public/logout_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
						</button>
					</nav>
				</header>
				<button className='bg-primary p-1 rounded-md shadow-lg w-[40%] h-[55%] m-4 py-2 px-3 font-bold transition-transform hover:scale-105' onClick={() => setView(!view)}>{view ? CancelForm() : AddFrom()}</button>
				<article>
					<NewBlog
						title={title} author={author} url={url} setTitle={setTitle} setAuthor={setAuthor} setUrl={setUrl} handleBlogAdd={handleBlogAdd} show={view} />
				</article>
				<section className='flex flex-col gap-5'>
					{
						blogs.length === 0 ? <h1 className='text-xl font-bold mx-auto p-4'>No hay blogs...</h1> :
							blogs.map(blog => <Blog key={blog._id} blog={blog} handleBlogDelete={handleBlogDelete} handleStartBlogAdd={onLikeBlogs}/>)}
				</section>
			</section>
		)
	}

	function Notification() {
		return (
			<div className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded-md fixed top-4 right-4">
				{message}
			</div>
		)
	}
	return (
		<div className='bg-background min-h-screen flex flex-col justify-center items-center '>
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
