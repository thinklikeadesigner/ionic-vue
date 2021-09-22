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
  get catchPhrase() {
    return this.data["catch-phrase"];
  }

  get image() {
    return this.data["image_uri"];
  }

  /**
   * name data comes from api in ugly format, ie "sea_cucumber"
   * this getter removes the underscore => "sea cucumber"
   * and returns the title case string => "Sea Cucumber"
   */
  get name() {
    let formattedName = this.data["file-name"].split("_").join(" ");
    return this.toTitleCase(formattedName);
  }

  /**
   *
   * formatting function used in get name()
   */
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
