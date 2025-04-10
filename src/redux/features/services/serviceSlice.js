// src/redux/features/service/serviceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  selectedService: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { openModal, closeModal, setSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;
