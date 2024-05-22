export default function Blog({ blog }) {
	return (
		<div className="flex flex-col bg-background rounded-md px-6 py-4 w-90 mt-3 ">
			<h2 className='text-xl font-bold'>{blog.title}</h2>
			<p className='text-sm text-gray-500 italic font-sans ps-5'>{blog.author}</p>
		</div>
	)
}