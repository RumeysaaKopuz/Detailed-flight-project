import { useEffect, useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/action";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true); // ilk degeri true verdim ki once harita gozuksun
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  // ucuslari getirir
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  // haritayi acar ve detaylarini gosterecegimiz ucagin id sini alir
  const openDetail = (id) => {
    //detaylarini gosterecegimiz ucagin id sini alir
    setDetailId(id);
    // haritayi acar
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      {/* yan detay alani */}
      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}

      <div className="view-buttons">
        <button 
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Harita Gorunumu{" "}
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          Liste Gorunumu
        </button>
      </div>
      {/* hangi bilesenin ekrana basilacagina karar verme(bu kismin dinamik olmasini istiyorum)*/}
      {showMapView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
