import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uuidv4 } from 'uuid';

// describe type
type Type = {
   id: string,
   title: string,
   completed: boolean,
};

// describe state
type TypeState = {
   list: Type[],
};

// describe initial state
const initialState: TypeState = {
   list: [],
};

const exampleSlice = createSlice({
   name: 'name',
   initialState,
   reducers: {
      someFunctionOne(state, action: PayloadAction<any>) {
         state.list.push({
            id: uuidv4(),
            title: action.payload,
            completed: false,
         })
      },
      someFunctionTwo(state, action: PayloadAction<any>) {
         const finded = state.list.find(someValue => someValue.id === action.payload)
         if (finded) {
            finded.completed = !finded.completed;
         }
      },
      someFunctionThree(state, action: PayloadAction<any>) {
         state.list = state.list.filter(someValue => someValue.id !== action.payload)
      }
   }

});

export const { someFunctionOne, someFunctionTwo, someFunctionThree } = exampleSlice.actions;
export default exampleSlice.reducer;
