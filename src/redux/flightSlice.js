import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./action";

const initialState = {
  flights: [],
  isLoading: false,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // cevap beklerken
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      // istegin basarili oldugu durum api den cevabin geldigi durum
      //olumlu cevap geldiginde
      .addCase(getFlights.fulfilled, (state, action) => {
        console.log("burasi flightslice ", action.payload);
        state.isLoading = false;
        state.flights = action.payload;
      })
      // olumsuz cevap geldiginde
      //istegin basarisiz olma durumu herhangi bir cevap gelmeme
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Ucus verilerini alirken bir hata olustu";
      });
  },
});

export default flightSlice.reducer;

/* 


// cevap beklerken 

[getFlights.pending]: (state) => {
state.isLoading = false;
},
// istegin basarili oldugu durum api den cevabin geldigi durum
//olumlu cevap geldiginde  
[getFlights.fulfilled]: (state, action) => {
state.isLoading = false; 
state.isError = false; 
state.flights = action.payload;
},
// olumsuz cevap geldiginde 
//istegin basarisiz olma durumu herhangi bir cevap gelmeme
[getFlights.rejected]: (state, action) => {
state.isLoading = false;
state.isError = 'ucus verilerini alirken bir hata olustu';
},

*/
