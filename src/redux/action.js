import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constants";
import axios from "axios";

/* 
! createAsyncThunk
* Hem asenkron islemler yapabilen
* Hem de bunlarin sonucunu store a aktarabilen 
* asenkron aksiyonu olusturmamizi saglayan method
*/

// api a istek atma
export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);
  
  // bize gelen dizileri objelere cevirme
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  console.log('flight', newData)

  // veriyi slice a aktarma
return newData ;



});
