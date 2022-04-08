import * as _ from "lodash";

interface IEvent {
    id: string;
    start: string;
    end: string;
    title: string;
    allDay: boolean;
    keyHash: string;
}

let events: IEvent[] = [
    {
        id: "1",
        start: "2022-04-03",
        end: "2022-04-05",
        title: "sahil",
        allDay: true,
        keyHash: "2022-04-02+2",
    },
    {
        id: "2",
        start: "2022-04-04",
        end: "2022-04-04",
        title: "lovepreet",
        allDay: true,
        keyHash: "2022-04-04+0",
    },
    {
        id: "3",
        start: "2022-04-04",
        end: "2022-04-04",
        title: "sagar",
        allDay: true,
        keyHash: "2022-04-04+0",
    },
    {
        id: "4",
        start: "2022-04-04",
        end: "2022-04-04",
        title: "hemnat",
        allDay: true,
        keyHash: "2022-04-04+0",
    },
    //{id:"5", start: "2022-04-04", end: "2022-04-04", title: "hardik", allDay: true, keyHash:"2022-04-04+0"},
];

//TODO: Add type here
let groupedEvents: any = [];

groupedEvents = _.groupBy(events, "keyHash");

let newGroupedEvents: any = [];

for (let event in groupedEvents) {
    const eventDetail = {
        start: groupedEvents[event][0].start,
        end: groupedEvents[event][0].end,
        title: groupedEvents[event][0].title,
        id: groupedEvents[event][0].id,
        event: groupedEvents[event],
    };
    newGroupedEvents.push(eventDetail);
}

export default newGroupedEvents;
