import { db } from "../plugins/firebase"
import dayjs from "dayjs";
import { collection, addDoc } from "firebase/firestore";
import { useAuthStore } from "../stores/auth";
import { useFormStore } from "../stores/form";

class GeneratedResourceModel {
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

    parseTitle(rawData) {
      const message = rawData?.choices.pop();
      const firstLine = message?.content?.split('\n');
      if(firstLine.length)
        return firstLine[0];
      else
        return message?.content?.split(/(?<=[.!?])\s+/)[0];
    }
  
    async addGeneratedResource(rawData) {
      try {
        const formStore = useFormStore();
        const parseTitle = parseTitle(rawData);
        let data = {
          content: rawData,
          dateCreated: dayjs().format(),
          type: formStore.type,
          title: parseTitle,
          formInput: formStore.inputs,
          teacherId: this.authStore.user.uid,
          ussage: rawData.ussage,
        }
        console.log(data);
        //await addDoc(this.collectionRef, data);
        console.log('Resource is added successfully.');
      } catch (error) {
        console.log('Error adding resources to firebase:', error);
      }
    }
  }
  
  export default GeneratedResourceModel;