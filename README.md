## Ionic View Code Challenge


[Live Site](https://afternoon-dusk-80030.herokuapp.com/)

username: red@email.com

password: password

-   Create an Ionic project in Vue ✅
-   Make use of different types of Ionic components ✅
-   Demonstrate moving between different pages ✅

<br />

![navigation pwa preview](https://media.giphy.com/media/AZYedLyfP2xm6pkdTn/giphy.gif?cid=790b761108e0908a43f66c56bf8c043f13fa51047fad2cfb&rid=giphy.gif&ct=g)

<br />

-   Make use of modal, alert, toast, action sheet, etc ✅

<br />   

  ![alert pwa preview](https://media.giphy.com/media/srpwJNlOg0y53x0TXN/giphy.gif?cid=790b7611040fb7aacc781f649f4b2d0ed286fc503466c05b&rid=giphy.gif&ct=g)
  
  <br />
  
-   Responsive scaling for large to small screens ✅

  <br />
  
-![responsive preview](https://media.giphy.com/media/Zueu31Q3AMd14M0APt/giphy.gif?cid=790b761197de02c5c0c68fffae1f0d389961c4bbe2401a57&rid=giphy.gif&ct=g)

 <br />
 
-   Custom branding following Ionic theme conventions ✅
Found Twitch's branding online and used their colors in variables.css because I like their color scheme

### Vue

-   Use of environment variables ✅
```javascript
const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_PROD_URL
    : process.env.VUE_APP_PROD_URL;
```
-   Use Vuex store to manage state ✅
```javascript
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
``` 
also used vuex-persist to persist the data from the store after screen refresh
-   Make API calls to fetch data ✅
```javascript
    getCreature({ commit }, id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/${id}`)
        .then(response => {
          // data filtered through model class for creature
          commit("SET_CREATURE", new CreatureModel(response.data));
        })
        .catch(function(error) {
          console.error(error);
        });
    }
 ```
Used Vuex actions to grab creatures from the Animal Crossing API, one of my favorite Nintendo games
-   Make use of model classes ✅

```javascript
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

```

Used a model class to process some of the API data before display
-   Create custom Vue components ✅
-   Login mechanism or remember the current user ✅
-   ![log in save user preview](https://media.giphy.com/media/9RnAVaeR3fjR3cpVcY/giphy.gif?cid=790b7611a9ce0ed6f24f987fb74a1a25d230cc9467c8a37c&rid=giphy.gif&ct=g)

I used local storage to save the token, and I protected the routes from unauthorized access.
**As a side note, I wanted the login to be functional, so I created a backend using mongodb and express and hosted that [on heroku](https://boiling-forest-75924.herokuapp.com) using MongoDB Atlas.** The repo for the API is [here](https://github.com/thinklikeadesigner/login-service)

## As a bonus, I added native camera functionality. If you are on your computer, you will be given the option to choose a file from your local file system

![camera pwa preview](https://media.giphy.com/media/bZQF7AtYCrByHewq4Q/giphy.gif?cid=790b7611b8f5fc481d69de0fadddd324b95a316f26a229f3&rid=giphy.gif&ct=g)

Note: I'm aware that there's an issue loading the images. This is due to me not knowing exactly how to encode and decode image blobs so that you can save them in local storage. If I had more time, I would either figure it out, or opt for AWS S3 bucket



