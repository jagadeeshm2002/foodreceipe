import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'

export default function Home () {
  const{loading,recipesData,error} = useContext(GlobalContext);


  useEffect(()=>{
    
  },[recipesData])

  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10 ' > 
      {loading?<div>Please wait data fetching...</div>:null}
      {error?<div>Sorry unable to fetch...</div>:null}
      {recipesData && recipesData.length > 0?<div>your data</div>:<div>no data</div>}
    </div>
  )
}
