import React, { useEffect } from 'react'

function Github() {
    
    const [data ,setData]=React.useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/praaathik')
        .then((response)=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-slate-600 text-red-500
    p-4 text-3xl'>Github followers: {data.followers}
    
    </div>
  )
}

export default Github