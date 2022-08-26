
// type: name bg color 
interface BoxProps {
    name: string;
    bgColor: string;
}

const Box: React.FC<BoxProps> = ({ name, bgColor }) => {
    return (
        <div className="py-1  cursor-pointer 
        transition duration-200 ease-in-out transform hover:scale-105
        ">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{
                    backgroundColor: bgColor
                }} >
                    <h1 className="text-gray-900 absolute font-bold text-2xl m-2">{name}</h1>
                </div>
                <div className="w-2/3 p-4" style={{
                    backgroundColor: bgColor
                }}>
                    <p className="mt-2 text-gray-600 text-sm" style={{
                        visibility: 'hidden'
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
                </div>
            </div>
        </div>

    )
}

export default Box