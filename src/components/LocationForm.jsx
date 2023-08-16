

const LocationForm = ({handleSubmit}) => {
  return (
    <form className="flex justify-center sm:grid grid-flow-col sm:justify-center max-w-[1000px] mx-auto" onSubmit={handleSubmit}>
        <input id="newLocation" className="text-white outline-none bg-black border-2 border-[#8eff8b] w-[240px] h-[60px] sm:w-[390px] " min={1} max={126} placeholder="   Type a location id..." type="number" />
        <div className="grid gap-2 grid-flow-col items-center justify-center text-2xl bg-[#8eff8b]/40 p-1 border-2 hover:bg-[#82ff8b] hover:text-black border-[#8eff8b] h-[60px] w-[80px]">
        <button className="">
        <i className="text-dark-gray text-lg" class='bx bx-search-alt-2'></i>
        </button>
        </div>
    </form>
  )
}

export default LocationForm