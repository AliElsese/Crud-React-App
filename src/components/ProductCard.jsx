import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

export default function ProductCard({ product }) {
    return (
        <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col space-y-3">
            <Image 
                imgURL={ product.imageURL }
                alt={ product.title }
                className="rounded-md h-52 w-full mb-2 lg:object-cover" />

            <h3 className="text-lg font-semibold">{ textSlicer(product.title, 25) }</h3>

            <p className="text-sm text-gray-500 break-words">{ textSlicer(product.description) }</p>
            
            <div className="flex items-center flex-wrap space-x-1">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-lg text-indigo-600 font-semibold">${ product.price }</span>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold">{ product.category.name }</span>
                    <Image
                        imgURL={ product.category.imageURL }
                        alt={ product.category.name }
                        className="w-10 h-10 rounded-full object-bottom" />
                </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={() => { alert('hi from edit!') }}>Edit</Button>
                <Button className="bg-[#c2344d] hover:bg-red-800" onClick={() => { alert('hi from delete!') }}>Destroy</Button>
            </div>
        </div>
    )
}