import { db } from "../plugins/firebase";
import dayjs from "dayjs";
import { collection, addDoc } from "firebase/firestore";
import { useAuthStore } from "../stores/auth";

class AddNewsletterModel {
    constructor() {
      this.collectionName = 'addNewletter';
      this.collectionRef = collection(db, this.collectionName );
      this.authStore = new useAuthStore();
    }
  
    async addNewsletter(rawData) {
      try {
        let data = {
          email: rawData,
          dateCreated: dayjs().format(),
        }
        console.log(data)
        await addDoc(this.collectionRef, data);
        console.log('Resource is added successfully.');
      } catch (error) {
        console.log('Error adding resources to firebase:', error);
      }
    }
  }
  
  export default AddNewsletterModel;