import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="font-fira code overflow-hidden shadow-elements border-2 border-[#8eff8b] h-[540px]">
      <header className="h-[302px]  relative">
        <img
          className="h-full w-full object-cover"
          src={residentInfo?.image}
          alt=""
        />
        <div className="flex justify-center items-center gap-2 p-2 absolute left-[90px] bottom-6 bg-black/70 w-[108px] h-[40px] border-2 border-[#8eff8b]">
          <div
            className={`h-[10px] aspect-square rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className="py-10 p-2 text-lg text-white grid gap-4 ">
        <h3 className="font-semibold text-[32px]">{residentInfo?.name}</h3>
        <hr />
        <ul>
          <li>
            {" "}
            <span className="font-normal text-[#938686]">Species: </span>
            {residentInfo?.species}
          </li>
          <li>
            {" "}
            <span className="text-[#938686] font-normal">Origin:</span>{" "}
            {residentInfo?.origin.name}{" "}
          </li>
          <li>
            {" "}
            <span className="text-[#938686] font-normal">
              Time appear:{" "}
            </span>{" "}
            {residentInfo?.episode.length} time
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
