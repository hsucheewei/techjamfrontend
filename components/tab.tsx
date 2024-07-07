export const Tab = () => {
    return (
        <nav>
            <ul className="flex justify-around py-3 fixed top-0 w-full bg-black">
                <li><span className="text-gray-400 py-2">TikTok Shop</span></li>
                <li><span className="font-bold py-2 relative before:content-[''] before:w-2/3 before:h-1 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:translate-y-full before:bg-white">For You Shop</span></li>
            </ul>
        </nav>
    )
}