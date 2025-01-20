import axios from "axios";
import { useState } from "react";
const Tessssssst = () => {
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");
  const [month, setMonth] = useState("");
  const [cities, setCities] = useState("Mansoura");
  const [fajr, setFajr] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [dhuhr, setDhuhr] = useState("");
  const [asr, setAsr] = useState("");
  const [maghrib, setMaghrib] = useState("");
  const [isha, setIsha] = useState("");
  const getData = async () => {
    const res = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=EG&city=${cities}`
    );
    console.log(res.data.data);
    const dayTime = res.data.data.date.readable;
    setDay(dayTime);
    const weekTime = res.data.data.date.gregorian.weekday.en;
    setWeek(weekTime);
    const monthTime = res.data.data.date.gregorian.month.en;
    setMonth(monthTime);
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
  };

  getData();

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

  const city = cityArr.map((item) => {
    return (
      <option value={item.name} key={item.id}>
        {item.name}
      </option>
    );
  });

  const citySelect = (e) => {
    setCities(e.target.value);
  };

  const prayTime = [
    { id: 1, name: "fajr", time: fajr },
    { id: 2, name: "sunrise", time: sunrise },
    { id: 3, name: "dhuhr", time: dhuhr },
    { id: 4, name: "asr", time: asr },
    { id: 5, name: "maghrib", time: maghrib },
    { id: 6, name: "isha", time: isha },
  ];

  const cardArr = prayTime.map((item) => {
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
  return (
    <div className="flex justify-center flex-col gap-1">
      <div className="w-[1250px] h-[250px] bg-slate-500 flex flex-col items-center justify-center">
        <div className=" text-white">{cities}</div>
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
        <select value={cities} onChange={citySelect}>
          {city}
        </select>
      </div>
    </div>
  );
};

export default Tessssssst;
