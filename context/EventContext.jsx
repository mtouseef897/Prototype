import React, { createContext, useState, useContext } from 'react';

// Define the initial state
const initialState = {
  participant_count: 0,
  roomsetup: '',
  equipment: [],
  nightstay: false,
  banquetoption: '',
  baroption: '',
  eventtype:''
};

// Create a Context for the state
const EventContext = createContext();

// Create a Provider component
export const EventProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Update specific state values
  const updateParticipantCount = (count) => setState((prev) => ({ ...prev, participant_count: count }));
  const updateRoomSetup = (setup) => setState((prev) => ({ ...prev, roomsetup: setup }));
  const updateEquipment = (equipment) => setState((prev) => ({ ...prev, equipment }));
  const updateNightStay = (nightstay) => setState((prev) => ({ ...prev, nightstay }));
  const updateBanquetOption = (option) => setState((prev) => ({ ...prev, banquetoption: option }));
  const updateBarOption = (option) => setState((prev) => ({ ...prev, baroption: option }));
  const updateEventType = (option) => setState((prev) => ({ ...prev, eventtype: option }));

  return (
    <EventContext.Provider value={{
      state,
      updateParticipantCount,
      updateRoomSetup,
      updateEquipment,
      updateNightStay,
      updateBanquetOption,
      updateBarOption,
      updateEventType
    }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the context
export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
