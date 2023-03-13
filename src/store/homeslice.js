import { createSlice } from '@reduxjs/toolkit'



export const homeslice = createSlice({
  name: 'home',
  initialState:{

    url: {},
    genres:{},
  },
  reducers: {
    getapiconiguration : (state, action) => {
          state.url = action.payload;
    },

    getGenres: (state, action) => {
         state.genres = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const {getapiconiguration, getGenres } = homeslice.actions

export default homeslice.reducer