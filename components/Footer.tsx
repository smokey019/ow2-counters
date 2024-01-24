function Footer() {
    return (
        <div className='w-full lg:w-1/2 mx-auto lg:flex justify-between mt-7'>
            <h1 className='font-bold text-xl text-gray-400 text-center'>
                OW2<span className='text-white/50 font-normal ml-1'>Counters</span>
            </h1>
            <div className='w-full lg:w-fit flex justify-center items-center my-4 lg:my-0'>
                <h5 className='text-sm text-gray-400 text-center'>
                    A project by <a href="https://twitter.com/smokey_tv" target="_blank" rel="noopener" className='text-white hover:underline'>Smokey</a>
                </h5>
            </div>
        </div>
    )
}

export default Footer