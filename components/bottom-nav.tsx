import { PlusButton } from "./plus-button"

export  const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 w-full">
            <ul className="flex justify-around items-center">
                <li>
                    <div>
                        <span>Home</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Shop</span>
                    </div>
                </li>
                <li>
                    <PlusButton />
                </li>
                <li>
                    <div>
                        <span>Inbox</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Profile</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}