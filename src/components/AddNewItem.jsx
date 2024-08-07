import React from 'react'
import {useStateContext} from "../contexts/ContextProvider"

const AddNewItem = ({item}) => {
  const { showFormToAddUser,setShowFormToAddUser } = useStateContext();
  const handleSubmit = () => {
    // e.preventDefault();
    // Add new customer data to context
    setShowFormToAddUser(!showFormToAddUser)
  }
  
    
  return (
    <div className="text-2xl font-extrabold  text-slate-900  right-3 absolute top-5 " onClick ={handleSubmit}>
      <div className="relative w-full">
    <div className="absolute top-4 right-4">
      <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        {item}
      </button>
    </div>
    
  </div>
  
  </div>
  
  )
}

export default AddNewItem