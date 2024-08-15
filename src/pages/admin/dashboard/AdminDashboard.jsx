import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminDashboard = () => {

  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Overview')
  }, [])

  return (
    <>
      <h1 className='lg:hidden font-semibold text-2xl pb-4'>Overview</h1>
      <div>AdminDashboard</div>
    </>

  )
}

export default AdminDashboard