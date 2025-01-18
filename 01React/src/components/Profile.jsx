import React from 'react'

function Profile({data}) {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

  return (
    <div>
        {data.map((item)=>(
            <div key={item.id}>
            <h1>Name:{item.firstname}</h1>
            <p>Address:{item.username}</p>
        </div>
        ))}
    </div>
  )
}

export default Profile