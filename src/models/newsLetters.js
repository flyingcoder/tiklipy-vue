import { db } from "../plugins/firebase";
import dayjs from "dayjs";
import { collection, addDoc } from "firebase/firestore";

class AddNewsletterModel {
    constructor() {
      this.collectionName = 'addNewletter';
      this.collectionRef = collection(db, this.collectionName );
    }
  
    async addNewsletter(rawData) {
      try {
        let data = {
          email: rawData,
          dateCreated: dayjs().format(),
        }
        await addDoc(this.collectionRef, data);
        console.log('Resource is added successfully.');
      } catch (error) {
        console.log('Error adding resources to firebase:', error);
      }
    }
  }
  
  export default AddNewsletterModel;