
const PageHeader = ({ title }: any) => {
    return (
        <div className="lg:flex lg:items-center justify-between">
            <div className="flex-1 min-w-0 justify-between">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate"> {
                    title
                }
                </h2>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
            </div>
        </div>
    )
}

export default PageHeader