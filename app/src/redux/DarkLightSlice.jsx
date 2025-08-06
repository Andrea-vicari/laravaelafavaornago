import { createSlice } from '@reduxjs/toolkit'

export const DarkLightSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "ligth",
  },
  reducers: {
    dark: (state) => {
      state.value = "dark"
    },
    ligth: (state) => {
      state.value = "ligth"
    }
  },
})


export const { dark, ligth } = DarkSlice.actions

export default DarkLightSlice.reducer
