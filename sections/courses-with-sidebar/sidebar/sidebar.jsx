const Sidebar = () => {
    return (
        <div className='p-5 bg-slate-100'>
            <h3 className='text-2xl font-bold text-gray-900'>Sort By</h3>
            <div className='border-b border-gray-500 my-5' />
            <div>
                <div className='flex items-center gap-2 my-5'>
                    <input type="checkbox" id='newest' className='h-4 w-4' />
                    <label htmlFor="newest" className='text-sm font-semibold text-gray-700'>Newest</label>
                </div>
                <div className='flex items-center gap-2 my-5'>
                    <input type="checkbox" id='oldest' className='h-4 w-4' />
                    <label htmlFor="oldest" className='text-sm font-semibold text-gray-700'>Oldest</label>
                </div>
                <div className='flex items-center gap-2 my-5'>
                    <input type="checkbox" id='popular' className='h-4 w-4' />
                    <label htmlFor="popular" className='text-sm font-semibold text-gray-700'>Popular</label>
                </div>
                <div className='flex items-center gap-2 my-5'>
                    <input type="checkbox" id='featured' className='h-4 w-4' />
                    <label htmlFor="featured" className='text-sm font-semibold text-gray-700'>Featured</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;