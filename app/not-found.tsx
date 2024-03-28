    import Link from 'next/link'
    
    export default function NotFound() {
    return (
        <div className="min-h-[100vh]">
            <div className="grid h-[100vh] text-white items-center justify-center text-center">
                <div className='grid gap-y-10'>
                    <h2 className="text-4xl font-bold">404 Not Found</h2>
                    <p className="">Could not find requested resource</p>
                    <Link href="/">Return <span className='text-blue-700 hover:text-blue-500'>Home</span></Link>
                </div>
            </div>
        </div>
    )
    }