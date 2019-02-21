# React Big Calendar Week with 12 Hour Clock

This is an exploratory repository where I try to set up the React Big Calendar
component to display a twelve hour clock in the week view.

You can view the compiled app at [GitHub Pages](https://tomashubelbauer.github.io/rbc-week-am-pm-clock).
It is served from the `docs` directory which is just the `build` directory from
CRA's `npm run build` renamed so that it works with GitHub Pages without having
to have the artifacts in the repository directory root.

This being an exploratory repository, success is not guaranteed, I am putting
down my notes as I go about figuring this out. If you care only for the outcome,
scroll all the way down/

To install RBC, do:

```powershell
npm install react-big-calendar moment --save
npm install @types/react-big-calendar --save-dev
```

Next step is to pull the calendar stylesheet, set up the Moment localizer and 
the calendar.

Using the `min` and `max` properties it seems to be possible to cap the start
and end time of all of the calendar days at once. The calendar seems to only
care about the time portion and doesn't care about the date. Initially I set it
up so that the `min` date was the first day in the week view and the `max` date
was the last day in the week view, but that proved unnecessary.

This of course means that we cannot, as far as the current RBC API goes, have a
week calendar starting at Monday noon and ending at Sunday noon. That would
collapse the calendar to nothing as the difference between noon and noon only
time-wise is zero.

Now is the point where I realize I misunderstood the requirements, it was not
about trimming the calendar to a less than 24 hour range, but about flipping
between a 12 and 24 hour clock display in the clock column and ensuring the
calendar scrolls and doesn't cause its parent container height to grow to
accomodate all of its height.

This repository will thus serve as an example of trimming the RBC timegrid range
in the week view no one asked for on needs probably.
