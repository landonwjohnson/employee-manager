export default class Employee {
  // constructor
  constructor(id, name, phone, title, location) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
    this.location = location;
  }
  // updateName
  updateName(name) {
    this.name = name;
  }
  // updatePhone
  updatePhone(phone) {
    this.phone = phone;
  }
  // updateTitle
  updateTitle(title) {
    this.title = title;
  }
  //updateLocation
  updateLocation(location) {
    this.location = location;
  }
}