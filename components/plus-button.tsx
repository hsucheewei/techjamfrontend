export const PlusButton = () => {
    return (
        <button>
            <div className="bg-white relative text-black px-4 py-1 rounded-lg font-bold text-4xl 
            before:content-[''] before:bg-green-300 before:w-1/2 before:h-full before:absolute before:-z-10 
            before:left-0 before:top-0 before:-translate-x-1/4 before:rounded-lg 
            after:content-[''] after:bg-red-400 after:w-1/2 after:h-full after:absolute after:-z-10 
            after:right-0 after:top-0 after:translate-x-1/4 after:rounded-lg">&#43;</div>
        </button>
    )
}