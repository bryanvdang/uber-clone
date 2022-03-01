import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //where are you right now?
  origin: null,
  //where do you want to go?
  destination: null,
  //how long will it take to get there
  travelTimeInformation: null,
};

//push data to the data layer
export const navSlice = createSlice({
  name: "nav",
  //initial state of the data layer
  initialState,
  //when pushing data to the data layer, it is called dispatching. Our 3 actions will be set origin, set destination, and set travelTimeInformation.
  //when you say your origin is chandler, the set origin will know 'Chandler' as the value and will push that to the data layer.
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    }, //action is the communication/action between the component and the data layer. 'state.origin is being passsed to the data layer.
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//expose our actions to the data layer
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions; //accessing navSlice actions and exporting those specific actions that way the app can tap into it

//when we push data to the data layer, we need to pull it back. We do that by using selectors
//good practice is that there is one selector for each initial state. Line 5,7,9

//get access to the state, and arrow function gives us a direct return, where we return the state in the navigation slice
//when i call/use this selector, it should go into this state.nav.origin, and grab the current value inside the data layer.
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;