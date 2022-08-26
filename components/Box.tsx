
// type: name bg color 
interface BoxProps {
    name: string;
    bgColor: string;
}

const Box: React.FC<BoxProps> = ({ name, bgColor }) => {
    return (
        <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{
                    backgroundColor: bgColor
                }} />
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
                    <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
                </div>
            </div>
        </div>

    )
}

export default Box