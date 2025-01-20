import axios from "axios";
import { useState } from "react";

const PrayTimer = () => {
  const [fajr, setFajr] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [dhuhr, setDhuhr] = useState("");
  const [asr, setAsr] = useState("");
  const [maghrib, setMaghrib] = useState("");
  const [isha, setIsha] = useState("");
  const [city, setCity] = useState("Mansoura");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");
  const getData = async () => {
    const res = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`
    );
    console.log(res.data.data);
    const fajrTime = res.data.data.timings.Fajr;
    setFajr(fajrTime);
    const sunriseTime = res.data.data.timings.Sunrise;
    setSunrise(sunriseTime);
    const dhuhrTime = res.data.data.timings.Dhuhr;
    setDhuhr(dhuhrTime);
    const asrTime = res.data.data.timings.Asr;
    setAsr(asrTime);
    const maghribTime = res.data.data.timings.Maghrib;
    setMaghrib(maghribTime);
    const ishaTime = res.data.data.timings.Isha;
    setIsha(ishaTime);
    const dayTime = res.data.data.date.readable;
    setDay(dayTime);
    const monthTime = res.data.data.date.gregorian.month.en;
    setMonth(monthTime);
    const weekTime = res.data.data.date.gregorian.weekday.en;
    setWeek(weekTime);
  };
  const choose = (e) => {
    setCity(e.target.value);
  };

  getData();

  const card = [
    { id: 1, name: "Al Fajr", time: fajr },
    { id: 2, name: "Al Shrouq", time: sunrise },
    { id: 3, name: "Al Dhuhr", time: dhuhr },
    { id: 4, name: "Al Asr", time: asr },
    { id: 5, name: "Al Maghrib", time: maghrib },
    { id: 6, name: "Al Isha", time: isha },
  ];
  const cardArr = card.map((item) => {
    return (
      <div
        key={item.id}
        className="w-[200px] h-[200px] bg-red-500 mt-4 rounded-md "
      >
        <div className="w-[200px] h-[50px] bg-indigo-800 text-white rounded-t-md flex items-center justify-center">
          {item.name}
        </div>
        <div className="flex items-center justify-center mt-12 text-white">
          {item.time}
        </div>
      </div>
    );
  });

  const cityArr = [
    {
      id: 1,
      name: "Mansoura",
    },
    {
      id: 2,
      name: "Alexandria",
    },
    {
      id: 3,
      name: "Giza",
    },
    {
      id: 4,
      name: "Luxor",
    },
    {
      id: 5,
      name: "Damietta",
    },
  ];

  const cArr = cityArr.map((item) => {
    return (
      <option value={item.name} key={item.id}>
        {item.name}
      </option>
    );
  });

  return (
    <>
      <div className="flex justify-center flex-col gap-1">
        <div className="w-[1250px] h-[250px] bg-slate-500 flex flex-col items-center justify-center">
          <div className=" text-white">{city}</div>
          <div className="flex flex-col text-yellow-500">
            {" "}
            <div>{day}</div>
            <div>{week}</div>
            <div>{month}</div>
          </div>
        </div>
        <div className="w-[1250px] h-[250px] bg-slate-500 flex justify-evenly">
          {cardArr}
        </div>
        <div className="w-[1250px] h-[200px] bg-slate-500">
          <select value={city} onChange={choose}>
            {cArr}
          </select>
        </div>
      </div>
    </>
  );
};

export default PrayTimer;
