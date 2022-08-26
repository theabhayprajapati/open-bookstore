
// props
// title, type: enum {'heading', 'subheading'}
interface PageHeaderProps {
    title: string;
    type: 'heading' | 'subheading';
}

const PageHeader = ({ title, type }: PageHeaderProps) => {
    return (
        <div className={
            `
            "lg:flex lg:items-center justify-between first-letter:uppercase "
            `
        }>
            <div className="flex-1 min-w-0 justify-between">
                <h2 className={
                    `text-${type === 'heading' ? '2xl' : 'xl'} font-bold leading-tight text-${type === 'heading' ? 'text-white' : 'text-white'}`
                }> {
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