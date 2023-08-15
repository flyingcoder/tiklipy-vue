import { db } from "../plugins/firebase"
import dayjs from "dayjs";
import { collection, addDoc } from "firebase/firestore";
import { useAuthStore } from "../stores/auth";

class generatedResourceModel {
    constructor() {
      this.collectionName = 'generatedResources';
      this.collectionRef = collection(db, this.collectionName );
      this.authStore = new useAuthStore();
    }

    async getGeneratedDoc(docId) {
      try {
          const docRef = doc(db, this.collectionName, docId);
          const snap = await getDoc(docRef);
          if(snap.exists()) return snap.data();
          else return false;
      } catch (error) {
          console.log(error);
          return false;
      }
    }
  
    async addGeneratedResource(rawData, type) {
      try {
        let data = {
          content: rawData,
          dateCreated: dayjs().format(),
          type: type,
          teacherId: this.authStore.user.uid
        }
        console.log(this.collectionRef);
        await addDoc(this.collectionRef, data);
        console.log('Lesson plan added successfully.');
      } catch (error) {
        console.log('Error adding lesson plan:', error);
      }
    }
  }
  
  export default generatedResourceModel;