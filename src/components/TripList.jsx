import { useState } from "react"

export default function TripList() {
    const [trips,setTrips] = useState([])

fetch('http://localhost:3000/trips')
.then( response => response.json())
.then( json => setTrips(json))
.catch(err=>console.log(err))
  return (
    <div>
      <h2> Trip List</h2>
    </div>
  )
}
