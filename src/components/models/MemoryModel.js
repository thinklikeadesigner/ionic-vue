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
    // this is where I would convert the base64 back to a uri,
    // the problem I'm running into is the uri is too long so the request fails
    // If I had more time I would use this class to encode and decode the image so I could save it in local storage
    // another solution would be using an amazon S3 bucket

    return this.data.image;
  }

  get title() {
    this.data.title;
    return this.data.title;
  }
  /**
   * to convert b64 image string back to uri
   *
   * @param {*} b64 the base64 string from the pwa camera
   * @returns a data uri
   */
  base64ToImage(b64) {
    return `data:image/png;base64,${b64}`;
  }
}
