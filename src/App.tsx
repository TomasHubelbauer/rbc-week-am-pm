import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

type AppProps = {};

type AppState = {
  events: CalendarEvent[];
};

type CalendarEvent = { start: Date, end: Date };

export default class App extends React.Component<AppProps, AppState> {
  public readonly state: AppState = {
    events: [],
  };

  private readonly localizer = BigCalendar.momentLocalizer(moment);

  public render() {
    const min = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toDate();
    const max = moment().set({ hour: 12, minute: 0, second: 0, millisecond: 0 }).toDate();
    console.log({ min, max });
    return (
      <div className="App">
        <BigCalendar<CalendarEvent>
          localizer={this.localizer}
          events={this.state.events}
          view="week"
          min={min}
          max={max}
        />
      </div>
    );
  }
}
