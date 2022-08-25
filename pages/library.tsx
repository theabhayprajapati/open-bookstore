import BottomNavigation from "../components/BottomNavigation"
import PageHeader from "../components/PageHeader"

const Library = () => {
    return (
        <div>
            <div className="p-5">
                <PageHeader title={"Library"} />
            </div>
            <BottomNavigation
            />
        </div>
    )
}

export default Library