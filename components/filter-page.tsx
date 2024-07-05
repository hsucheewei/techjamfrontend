import React, { FC, useEffect, useState } from 'react';
interface Props {
    toggleFilter: (e: any) => void;
}

const FilterPage: FC<Props> = ({ toggleFilter }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white w-full max-w-md h-5/6 p-4 rounded-t-lg transition-transform transform ${isVisible ? 'translate-y-0' : 'translate-y-full'} overflow-y-auto pb-20`}>
                <button onClick={toggleFilter} className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md">
                    Close
                </button>
                <div className="w-full px-4 pb-4 bg-white flex flex-col gap-4">
                    <div className="text-slate-800 text-base font-bold">Filter :</div>
                    <div className="flex items-center bg-neutral-100 rounded-md border border-zinc-300">
                        <input type="text" placeholder="Search" className="w-full py-2 px-4 bg-neutral-100 rounded-md" />
                    </div>
                    <div className="text-xl font-bold text-black">Category</div>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm font-bold text-slate-800">Lifestyle</div>
                        <div className="text-neutral-500 text-sm">View All</div>
                        <div className="text-neutral-500 text-sm">Cooking</div>
                        <div className="text-neutral-500 text-sm">Outdoor Activities</div>
                        <div className="text-neutral-500 text-sm">Cosmetics</div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-sm font-bold text-slate-800">Family & Pets</div>
                        <div className="text-neutral-500 text-sm">View All</div>
                        <div className="text-neutral-500 text-sm">Product</div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-sm font-bold text-slate-800">Fashion & Apparel</div>
                        <div className="text-neutral-500 text-sm">View All</div>
                        <div className="text-neutral-500 text-sm">Features</div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-sm font-bold text-slate-800">Technology & Gadgets</div>
                        <div className="text-neutral-500 text-sm">View All</div>
                        <div className="text-neutral-500 text-sm">Features</div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-sm font-bold text-slate-800">Home & Living</div>
                        <div className="text-neutral-500 text-sm">View All</div>
                        <div className="text-neutral-500 text-sm">Features</div>
                    </div>
                    <div className="text-xl font-bold text-black mt-4">Filter By Price</div>
                    <div className="flex gap-4">
                        <input type="number" placeholder="Min" className="w-full py-2 px-4 bg-stone-50 rounded-md border border-neutral-200" />
                        <input type="number" placeholder="Max" className="w-full py-2 px-4 bg-stone-50 rounded-md border border-neutral-200" />
                    </div>
                    <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-md">Filter</button>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;
