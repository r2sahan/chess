export class Time {
  static getCurrentDate() {
    return new Date();
  }

  static fromTime(time: number) {
    return new Date(time).toUTCString();
  }
}
