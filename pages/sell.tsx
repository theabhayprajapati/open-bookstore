import BottomNavigation from "../components/BottomNavigation"
import PageHeader from "../components/PageHeader"
import Product from "../components/Product"

const Sell = () => {
    return (

        <div>
            <div className="p-5">
                <div className="top-0 sticky z-50 bg-black shadow-black h-10 flex flex-col self-start ">
                    <PageHeader title={"Sell"} type={"heading"} />
                </div>
                {/* Sell a new product */}
                {/* Your Proudcts */}
                <section className="flex flex-col lg:flex-row my-2">
                    <div className="flex-1">
                        <PageHeader title={"Sell a new product"} type={"subheading"} />
                        <section className="flex">
                            <button className="w-full">
                                <div className="flex flex-col items-center justify-center  h-20 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
                                    <div className="text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                        </svg>

                                    </div>
                                    <p className="mt-2 text-sm font-medium text-gray-400">Upload</p>
                                </div>
                            </button>
                        </section>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row my-2">
                    <div className="flex-1">
                        <PageHeader title={"Your Products"} type={"subheading"} />
                        {[...Array(10)].map((_, i) => (
                            <Product name='Backpack' image='https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia' location='New York' price={220} />
                        ))}
                    </div>
                </section>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default Sell