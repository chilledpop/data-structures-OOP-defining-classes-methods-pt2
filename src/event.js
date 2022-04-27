// add following methods to Event class:
// durationMinutes(): the number of minutes that the event lasts
// conflict(): takes another instance of the Event class and returns True if the two events overlap


class Event {
  constructor(name, startTime, endTime, location, ) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  getStartHours() {
    return Number(this.startTime.split(":")[0]);
  }
  getStartMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  getEndHours() {
    return Number(this.endTime.split(":")[0]);
  }
  getEndMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
  durationMinutes() {
    if (this.getEndHours() === this.getStartHours()) {
      return this.getEndMinutes() - this.getStartMinutes();
    } else {
      return (
        ((this.getEndHours() - this.getStartHours()) * 60) +
        (this.getEndMinutes() - this.getStartMinutes())
      )
    }
  }
  conflict(other) {
    return (
      (this.getStartHours() <= other.getEndHours() &&
       other.getStartHours() <= this.getEndHours())
    )
  }
  isBefore(other) {
    return (
      this.getEndHours() < other.getStartHours() ||
      (this.getEndHours() === other.getStartHours() &&
        this.getEndMinutes() <= other.getStartMinutes())
    );
  }
}

module.exports = Event;
