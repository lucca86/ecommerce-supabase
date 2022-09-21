import { useRouter } from "next/router"


const Layout = ({ children }) => {

    const router = useRouter();

    return (
        <div className='w-full h-full flex flex-col'>
            <header className="w-full h-32 flex items-center bg-gray-300 justify-end space-x-4 px-4" >
                <h1 className="mr-auto text-2xl font-light">Lucca's - Ecommerce</h1>
                <div>
                    <button className='px-4 py-2 text-lg bg bg-black hover:text-black hover:bg-white border-black text-white rounded'>
                        <div>Signup</div>
                    </button>
                </div>
                <div>
                    <button className='px-4 py-2 text-lg bg bg-black hover:text-black hover:bg-white border-black text-white rounded'>
                        <div>Login</div>
                    </button>
                </div>
                <div>
                    <button
                        className='px-4 py-2 text-lg bg bg-black hover:text-black hover:bg-white border-black text-white rounded'
                        onClick={() => router.push('/admin')}
                    >
                        <div>Admin</div>
                    </button>
                </div>
            </header>
            { children }
        </div>
    )
}

export default Layout