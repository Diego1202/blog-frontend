export default function Blog({ blog, handleBlogDelete }) {
	return (
		<article>
			<header>
				<h2 className='text-xl font-bold'>{blog.title}</h2>
			</header>
			<main className="flex justify-between p-2 px-4">
				<div>
					<p className='text-sm text-gray-500 italic font-sans ps-5'> <strong>Autor: </strong>{blog.author}</p>
					<p className='text-sm text-gray-500 italic font-sans'> <strong>Total de likes:</strong> {blog.likes}</p>
				</div>
				<button type="button" onClick={()=>handleBlogDelete(blog._id)}>Delete</button>
			</main>
		</article>

	)
}