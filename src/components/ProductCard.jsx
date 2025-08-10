import Image from "./Image";

export default function ProductCard() {
    return (
        <div className="border rounded-md p-2 flex flex-col">
            <Image 
                imgURL="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt='Product Name'
                className="rounded-md mb-2" />

            <h3>Nike Shoes</h3>

            <p>As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.</p>
            
            <div className="flex items-center space-x-3 my-4">
                <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>
                <span className="w-5 h-5 bg-yellow-600 rounded-full"></span>
                <span className="w-5 h-5 bg-red-600 rounded-full"></span>
                <span className="w-5 h-5 bg-black rounded-full"></span>
            </div>

            <div className="flex items-center justify-between">
                <span>$350</span>
                <Image 
                    imgURL="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
                    alt="Category Name" 
                    className="w-10 h-10 rounded-full object-center" />
            </div>

            <div className="flex items-center justify-between space-x-2 mt-5">
                <button className="bg-indigo-700 p-2 w-full rounded-md text-white">Edit</button>
                <button className="bg-red-700 p-2 w-full rounded-md text-white">Destroy</button>
            </div>
        </div>
    )
}