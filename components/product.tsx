import { IProduct } from "@/lib/types";
import Image from "next/image";
import { FC } from "react";

export const Product: FC<IProduct> = ({name, price, discount, sold, image, url}) => {
    return (
        <div className="rounded-xl overflow-hidden w-full bg-zinc-800">
            <Image src={image} alt="product icon" width={0} height={0} className="w-full"/>
            <div className="flex flex-col bg-stone-700 px-3">
                <span className="text-gray-300">{name}</span>
                <span className="text-red-400">s&#36;${price.toFixed(2)}</span>
                <div>
                    <span className="bg-[#4C3034] text-red-400 p-1]">{discount}&#x25;&nbsp;off</span>
                </div>
                <span className="font-light text-gray-400">{sold}&nbsp;sold</span>
            </div>
        </div>
    )
}