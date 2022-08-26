import BottomNavigation from "../components/BottomNavigation"
import PageHeader from "../components/PageHeader"

const Sell = () => {
    return (

        <div>
            <div className="p-5 border">
                <PageHeader title={"Sell"} type={"heading"} />
                {/* Sell a new product */}
                {/* Your Proudcts */}
                <section className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <PageHeader title={"Sell a new product"} type={"subheading"} />
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <PageHeader title={"Your Products"} type={"subheading"} />
                    </div>
                </section>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default Sell