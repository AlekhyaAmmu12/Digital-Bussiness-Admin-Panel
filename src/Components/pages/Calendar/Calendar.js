import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayDridPlugin from  '@fullcalendar/daygrid';
import interactionPlugin from  '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import './Calendar.css';
import useCalendar from '../../store/Calendar';
import { createEventId } from '../../Data/data';
/* eslint-disable no-restricted-globals*/ 


const Calendar = () => {
  const {currentEvents,setCurrentEvents}=useCalendar();


  const handleEvents=async(events)=>{
    await Promise.resolve(setCurrentEvents(events));

  };

  const handleDataSelect=(selectInfo)=>{
    let title=prompt('Please enter the title for the event');
    let calendarApi=selectInfo.view.calendar;
    calendarApi.unselect();
    if(title){
      calendarApi.addEvent({
        id:createEventId(),
        title,
        start:selectInfo.start,
        end:selectInfo.end,
        allDay:selectInfo.allDay,
      })
    }
    


  };
  const handleEventClick=(clickinfo)=>{
    if(confirm("Are you sure you want to delete it?")){
      clickinfo.event.remove();
    }
  }


  return (
    <div className="calendar-container">
      <div>
   <FullCalendar

   plugins={[dayDridPlugin,interactionPlugin,timeGridPlugin]}
    headerToolbar={{
    left:'prev,next today',
    center:"title",
    right:"dayGridMonth ,timeGridWeek,timeGridDay"   }}

allDaySlot={false}
initialView='timeGridWeek'
slotDuration={"01:00:00"}
editable={true}
selectable={true}
selectMirror={true}
dayMaxEvents={true}
weekends={true}
nowIndicator={true}
initialEvents={currentEvents}
eventsSet={
  handleEvents
}
select={handleDataSelect}
eventClick={handleEventClick}   
   />
   </div>
   </div>
  )
}

export default Calendar
