export default class SeaModel {
  constructor(data) {
    this.data = data;
  }
  id() {
    return this.data.id;
  }

  speed() {
    return this.data.speed;
  }

  image() {
    return this.data["image_uri"];
  }
  name() {
    return this.data["file-name"];
  }

  // and so on, put other methods here
}
