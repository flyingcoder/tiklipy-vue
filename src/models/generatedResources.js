import { db } from "../plugins/firebase"
import { collection, addDoc } from "firebase/firestore";

class generatedResourceModel {
    constructor() {
      this.collectionName = 'generatedResources';
      this.collectionRef = collection(db, this.collectionName );
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
  
    async addGeneratedResource(data) {
      try {
        await addDoc(this.collectionRef, data);
        console.log('Lesson plan added successfully.');
      } catch (error) {
        console.error('Error adding lesson plan:', error);
      }
    }
  }
  
  export default generatedResourceModel;