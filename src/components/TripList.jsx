import { useState} from "react"
import './TripList.css'
import {useFetch} from '../hooks/useFetch'
export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data : trips, isPending, error } = useFetch(url)
    return (
        <div className="trip-list">
          <h2>Trip List</h2>
          {error && (<div> {error} </div>)}
          {isPending && (<div> Loading... </div>)}
          <ul>
            {trips && trips.map(trip => (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
          </ul>
          <div className="filters">
          <button onClick={()=> setUrl('http://localhost:3000/trips')}>
                All
            </button>
            <button onClick={()=> setUrl('http://localhost:3000/trips?loc=europe')}>
                Europe
            </button>
            <button onClick={()=> setUrl('http://localhost:3000/trips?loc=north_america')}>
                North America
            </button>
          </div>
        </div>
      )
}
