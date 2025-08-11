import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

export default function ProductCard({ product }) {
    return (
        <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
            <Image 
                imgURL={ product.imageURL }
                alt={ product.title }
                className="rounded-md h-52 w-full mb-2 lg:object-cover" />

            <h3>{ product.title }</h3>

            <p>{ textSlicer(product.description) }</p>
            
            <div className="flex items-center space-x-3 my-4">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
            </div>

            <div className="flex items-center justify-between">
                <span>${ product.price }</span>
                <Image 
                    imgURL={ product.category.imageURL }
                    alt={ product.category.name }
                    className="w-10 h-10 rounded-full object-bottom" />
            </div>

            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className="bg-indigo-700" width={'w-full'} onClick={() => { alert('hi from edit!') }}>Edit</Button>
                <Button className="bg-red-700" width={'w-full'} onClick={() => { alert('hi from delete!') }}>Destroy</Button>
            </div>
        </div>
    )
}