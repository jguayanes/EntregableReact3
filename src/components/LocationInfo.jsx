

const LocationInfo = ({location}) => {
  return (
    <section className="flex flex-col gap-3 p-3 text-lg text-slate-500 items-center">
        <h2>{location?.name}</h2>
        <ul>
            <li>Type:{location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?.residents.length}</li>
        </ul>
        <h1 className="grid justify-center text-[#82ff8b] text-[20px]">¡Wellcome to the crazy universe!</h1>
    </section>
    
  )
}

export default LocationInfo