import Image from 'next/image'

const Product = ( product ) => {
    return (
        <div key={product.id} className='p-4 hover:scale-105 hover:border-black border space-y-2 border-black/20 transition transform'>
            <h3 className='text-xl font-semibold space-y-2'>{product.name}</h3>
            <p className='truncate'>{product.description}</p>
            <div className='aspect-video relative'>
                <Image
                    layout='fill'
                    objectFit="cover"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <p>
                <span className='text-gray-600'>${product.price}</span>
            </p>
            <div className='lg:space-x-2 lg:space-y-0 space-y-2 flex-col flex lg:flex-row w-full'>
                <button className='py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white border-black text-white rounded'>
                    <div>Buy now</div>
                </button>
                <button className='py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white border-black text-white rounded'>
                    <div>Add to cart</div>
                </button>
            </div>
        </div>
    )
}

export default Product