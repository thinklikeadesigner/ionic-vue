/**
 * model for convenient data access and to format some strings ahead of time
 *
 */
export default class CreatureModel {
  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }
  get description() {
    return this.data.id;
  }

  /**
   * converts image from base64 to uri
   */
  get image() {
    return this.data.image;
  }

  get title() {
    this.data.title;
    return this.data.title;
  }
}
