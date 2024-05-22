
export default function NewBlog({ show, handleBlogAdd, title, setTitle, author, setAuthor, url, setUrl }) {

	if (!show) return null

	return (
		<div className="flex flex-col jus bg-background rounded-md px-6 py-4 w-[90%] mx-auto mb-4">
			<h2 className="text-xl font-bold ">Nuevo blog</h2>
			<form onSubmit={handleBlogAdd} className="flex p-4 py-10 flex-col gap-5">
				<label htmlFor="title">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4   placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						id="title"
						value={title}
						onChange={({ target }) => setTitle(target.value)}
						placeholder="title"
					/>
				</label>
				<label htmlFor="author">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4   placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						id="author"
						value={author}
						onChange={({ target }) => setAuthor(target.value)}
						placeholder="author"
					/>
				</label>
				<label htmlFor="url">
					<input
						type="text"
						className="block h-9 w-2/3 md:w-2/4  mx-auto py-1 px-4  placeholder:text-gray-400 focus-visible:outline-1 focus-visible:outline-tertiary border-2 border-b-black"
						id="url"
						value={url}
						onChange={({ target }) => setUrl(target.value)}
						placeholder="url"
					/>
				</label>
				<div className="flex flex-col w-9/12 gap-2 mx-auto">
					<button className="py-2 w-100 px-4 w-2/3 md:w-2/4 mx-auto font-bold 00 text-black border     bg-tertiary   rounded-md transition-transform hover:scale-105">Guardar</button>
				</div>
			</form>
		</div>
	)
}
