import {  useSelector } from "react-redux/es/hooks/useSelector";
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const ListView = () => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(0);



  //! SAYFALAMA DEĞERLERİ
  // sayfa başına eleman
  const itemsPerPage = 10;
  // gösterilecek son itemi tespit
  const endOffset = itemOffset + itemsPerPage;
  // belirli aralıktaki "3.sayfda için (20 - 30)" aralığı diziden alıyor
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  // toplam kaç sayfa olduğunu hesaplıyor
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);



 // Sayfalara tıklanınca çalışır
 const handlePageClick = (event) => {
  // > kaçıncı elemandan itibaren kesileceğini hesaplar
  const newOffset =
    (event.selected * itemsPerPage) % store?.flights.length;
  setItemOffset(newOffset);
};

// const handlePos = (konum) => {
//   console.log(konum);
// };

// navigator.geolocation.getCurrentPosition(handlePos);



  return (
    <div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th> id </th>
            <th> Kuyruk kodu </th>
            <th> Enlem </th>
            <th> Boylam </th>
            <th> Islemler </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
             currentItems.map((fly) => (
              <tr>
                <td> {fly.id} </td>
                <td> {fly.code} </td>
                <td> {fly.lat} </td>
                <td> {fly.lng} </td>
                <td> <button>Detay </button></td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;
