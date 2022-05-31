import Link from "next/link"

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href={'/post'}>
                    <img className="w-24 object-contain cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSuN8su74lRyEvfmcJoV2kpnuCffJtOk7FQ&usqp=CAU" alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-400 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-blue-600">
                <h3>Sing In</h3>
                <h3 className="border px-4 py-1 rounded-full border-blue-600">Get Started</h3>
            </div>
        </header>
    )
}

export default Header