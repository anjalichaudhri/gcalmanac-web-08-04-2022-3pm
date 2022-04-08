import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!\
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import _ from "lodash";
import "./GaCalendar.css";
import newGroupedEvents from "./groupedEvents";

function GaCalendar() {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                timeZone={"UTC"}
                initialView="dayGridMonth"
                // set height of calendar
                height={"500px"}
                eventColor={"#b6d7a8"}
                eventBorderColor={"#000000"}
                eventDisplay={"auto"}
                events={newGroupedEvents}
                eventContent={(arg) => {
                    let italicEl = document.createElement("b");
                    for (var index in newGroupedEvents) {
                        if (arg.event.id === newGroupedEvents[index].id) {
                            italicEl.innerHTML = newGroupedEvents[index].title;
                            if (newGroupedEvents[index].event.length > 1) {
                                italicEl.innerHTML += " +";
                                italicEl.innerHTML +=
                                    newGroupedEvents[index].event.length - 1;
                            }
                        }
                    }

                    let arrayOfDomNodes = [italicEl];
                    return { domNodes: arrayOfDomNodes };
                }}
                eventMouseEnter={function (info: any) {
                    console.log(info);
                    let italicEl = document.createElement("b");
                    for (
                        let index = 0;
                        index < newGroupedEvents.length;
                        index++
                    ) {
                        if (
                            info.event.id === newGroupedEvents[index].id &&
                            newGroupedEvents[index].event.length > 1
                        ) {
                            for (
                                let eventIndex = 1;
                                eventIndex <
                                newGroupedEvents[index].event.length;
                                eventIndex++
                            ) {
                                italicEl.innerHTML +=
                                    newGroupedEvents[index].event[
                                        eventIndex
                                    ].title;
                            }
                        }
                    }
                }}
                // to show five days a week calendar
                weekends={true}
                // Determines if week numbers should be displayed on the calendar.
                weekNumbers={false}
                // Determines the number of weeks displayed in a month view.
                fixedWeekCount={false}
                // In month view, whether dates in the previous or next month should be rendered at all.
                showNonCurrentDates={true}
                // to remove scrollbar from calendar
                // contentHeight = {'900px'}
                // to make it responsive
                handleWindowResize={true}
            />
        </div>
    );
}

export default GaCalendar;
