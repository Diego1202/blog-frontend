export default function Blog({ blog, handleBlogDelete, handleStartBlogAdd }) {
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
				<div className="flex h-[%50] w-[50%] gap-2 justify-end">
				<button type="button" onClick={() => handleStartBlogAdd(blog._id)}
					className="bg-primary text-sm p-1 rounded-md shadow-lg w-auto h-auto py-1 px-6 font-bold transition-transform hover:scale-105">
					<div className='flex justify-center items-center gap-3'>
						<img src="/kid_star_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
					</div>
				</button>

				<button type="button" onClick={() => handleBlogDelete(blog._id)}
					className="bg-primary text-sm  rounded-md shadow-lg w-auto h-auto  py-1 px-6 font-bold transition-transform hover:scale-105">
					<div className='flex justify-center items-center gap-3'>
						<img src="/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
					</div>
				</button>

				</div>
				
			</main>
		</article>

	)
}
