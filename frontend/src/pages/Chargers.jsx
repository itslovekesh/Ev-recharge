import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Chargers = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { chargers } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(chargers.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(chargers)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [chargers, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Charging Station</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === '120 Volts' ? navigate('/chargers') : navigate('/chargers/120 Volts')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === '120 Volts' ? 'bg-[#E2E5FF] text-black ' : ''}`}>120 Volts</p>
          <p onClick={() => speciality === '240 Volts' ? navigate('/chargers') : navigate('/chargers/240 Volts')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === '240 Volts' ? 'bg-[#E2E5FF] text-black ' : ''}`}>240 Volts</p>
          
          <p onClick={() => speciality === '2 Wheeler' ? navigate('/chargers') : navigate('/chargers/2 Wheeler')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === '2 Wheeler' ? 'bg-[#E2E5FF] text-black ' : ''}`}>2 Wheeler</p>
          <p onClick={() => speciality === '3 Wheeler' ? navigate('/chargers') : navigate('/chargers/3 Wheeler')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === '3 Wheeler' ? 'bg-[#E2E5FF] text-black ' : ''}`}>3 Wheeler</p>
          <p onClick={() => speciality === 'Van' ? navigate('/chargers') : navigate('/chargers/Van')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Van' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Van</p>
          <p onClick={() => speciality === 'DC Fast Charging' ? navigate('/chargers') : navigate('/chargers/DC Fast Charging')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'DC Fast Charging' ? 'bg-[#E2E5FF] text-black ' : ''}`}>DC Fast Charging</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                {/* <p className=''></p>  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chargers