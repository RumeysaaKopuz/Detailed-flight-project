import { useEffect, useState } from "react";
import { detailOpt, options } from "../helpers/constants";
import axios from "axios";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [d, setDetail] = useState(null);
  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOpt
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);
  console.log(d);
  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          <span>X</span>
        </p>
        {!d ? (
          <p className="load">Yükleniyor...</p>
        ) : (
          <>
            <h2>{d.aircraft.model?.text}</h2>
            <h2>{d.aircraft.model?.code}</h2>
            <p>Kuyruk No: {d.aircraft?.registration}</p>
            <img src={d.aircraft?.images?.large[0]?.src} />
            <p>Sirket: {d.airline?.short}</p>
            <p>
              Kalkis:{" "}
              <a href={d.airport.origin?.website}>{d.airport.origin?.name}</a>
            </p>
            <p>
              Hedef:{" "}
              <a href={d.airport.destination?.website}>
                {d.airport.destination?.name}
              </a>
            </p>
            <p>
              Durum{""}
              <span className="status" style={{ background: d.status.icon }}>
                {d.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
