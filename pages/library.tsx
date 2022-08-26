import BottomNavigation from "../components/BottomNavigation"
import Box from "../components/Box"
import PageHeader from "../components/PageHeader"

const Library = () => {
    const bookcategories = [
        'Fiction',
        'Non-Fiction',
        'Children',
        'Cookbooks',
        'Biographies',
        'Business',
        'Universities',
        'Schools',
        'Religion',
        'Math',
        'Science',
        'History',
        'Politics',
        'Health',
        'Psychology',
        'Medicine',
        'Microbiology',
        'Physics',
        'Chemistry',
        'Biology',
        'Astronomy',
        'Geography',
        'Economics',
        'Accounting',
        'Business',
        'Computer Science',
        'Mathematics',
        'Statistics',
        'Programming',
        'Web Development',
        'Web Design',
        'Social Skills',
    ]
    const giveRandomColor = () => {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div>
            <div className="p-5 mb-5">
                <div className="top-0 sticky z-50 bg-black shadow-black h-15 pt-5 flex flex-col self-start ">
                    <PageHeader title={"Library"} type={"heading"} />
                </div>
                {/* Recommended: */}
                <section className="my-2">
                    <div className="">
                        <PageHeader title={"Recommended"} type={"subheading"} />
                        <div>
                            {
                                bookcategories.slice(0, 3).map((category, index) => (
                                    <Box key={index} name={category} bgColor={giveRandomColor()} />
                                ))

                            }
                        </div>
                    </div>
                </section>
                {/* Browse All */}
                <section className="my-2">
                    <div className="">
                        <PageHeader title={"Browse All"} type={"subheading"} />
                    </div>
                    {
                        bookcategories.slice(3, bookcategories.length).map((category, index) => (
                            <Box key={index} name={category} bgColor={giveRandomColor()} />
                        ))

                    }
                </section>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default Library