import { configureStore } from '@reduxjs/toolkit'
import darkLightReducer from './DarkLightSlice'


export default configureStore({
  reducer: {
    dark: darkLightReducer
  },
})
