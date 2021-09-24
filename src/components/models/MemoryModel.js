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

  get image() {
    //  return this.base64ToImage(this.data.image)

    return this.data.image;
  }

  get title() {
    this.data.title;
    return this.data.title;
  }
  /**
   *
   * @param {*} b64 the base64 string from the pwa camera
   * @returns a data uri
   */
  base64ToImage(b64) {
    return `data:image/png;base64,${b64}`;
  }
}
