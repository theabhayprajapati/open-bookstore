import BottomNavigation from '../components/BottomNavigation'
import PageHeader from '../components/PageHeader'

const Account = () => {
  return (
    <div>
      <div className="p-5">
        <PageHeader title={"Account"} />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Account