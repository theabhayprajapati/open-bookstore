import BottomNavigation from '../components/BottomNavigation'
import PageHeader from '../components/PageHeader'

const Account = () => {
  const imageUrl = 'https://i.imgur.com/8Km9tLL.png'
  return (
    <div>
      <div className="p-5">
        <PageHeader title={"Account"} type={"heading"} />
        <div className='w-full h-full flex items-center'>
          <div className='w-1/2'>
            <img src={imageUrl} alt="profile" className='w-1/2 rounded-full ' /></div>
          <div >
            <h1 className='text-2xl font-bold'>John Doe</h1>
          </div>
        </div>
        <section className='w-full h-[50px] '>

          <div className='flex items-center justify-between text-2xl my-5'>
            <h3>
              Your Orders
            </h3>
            <span>
              {">"}
            </span>
          </div>
          <div className='flex items-center justify-between text-2xl my-5'>
            <h3>
              Logout
            </h3>
            <span>
              {">"}
            </span>
          </div>
        </section>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Account