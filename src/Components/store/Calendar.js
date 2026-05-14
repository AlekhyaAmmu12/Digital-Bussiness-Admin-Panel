import {create} from 'zustand';
import {groupNumber,INITIAL_EVENTS,boardData,userData} from '../Data/data';

const useCalendar=create((set)=>({
    currentEvents:INITIAL_EVENTS,
    setCurrentEvents:(events)=>set({currentEvents:events})

}))
export default useCalendar
