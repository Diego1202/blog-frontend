
export default function NewBlog({ show, handleBlogAdd, title, setTitle, author, setAuthor, url, setUrl }) {

	if (!show) return null

	return (
		<div className="flex flex-col bg-gray-50 rounded-md px-6 py-4 w-90 ">
			<h2 className="text-xl font-bold">Nuevo blog</h2>
			<form onSubmit={handleBlogAdd} className="flex p-4 py-10 flex-col gap-5">
				<label htmlFor="title">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						id="title"
						value={title}
						onChange={({ target }) => setTitle(target.value)}
						placeholder="title"
					/>
				</label>
				<label htmlFor="author">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						id="author"
						value={author}
						onChange={({ target }) => setAuthor(target.value)}
						placeholder="author"
					/>
				</label>
				<label htmlFor="url">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4 rounded-md border-0 placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-cyan-200"
						id="url"
						value={url}
						onChange={({ target }) => setUrl(target.value)}
						placeholder="url"
					/>
				</label>
				<div className="flex flex-col w-9/12 gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold bg-gradient-to-r from-cyan-400 to-green-600 text-white border transition-colors ease-out duration-300 hover:bg-cyan-700 bg-cyan-400 active:bg-slate-300 active:border-cyan-600 rounded-md">Guardar</button>
				</div>
			</form>
		</div>
	)
}
