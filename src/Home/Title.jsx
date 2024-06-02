
const Title=({heading,subheading,banner2})=>{
    const bannerStyle = {
        backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return(
        <div className="w-[96%] mx-auto min-h-[25vh] my-24 rounded-md" style={bannerStyle}>
                <div className='w-[90%] mx-auto mt-5'>
                <p className='text-3xl font-semibold text-black text-center'>{heading}</p>
                 <p className='font-medium bg-gray-50 opacity-65 p-2
                  rounded-md text-black text-center mt-5'>{subheading}</p>
                </div>
        </div>
    )
}
export default Title