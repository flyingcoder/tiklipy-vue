import { db } from "../plugins/firebase"
import { collection, getDocs, getDoc, addDoc, where, query, doc} from "firebase/firestore";
import generatedResourceModel from "./generatedResources";

class LessonPlanModel {
    constructor() {
        this.collectionName = 'lessonPlans';
        this.collectionRef = collection(db, this.collectionName);
        this.resourceModel = new generatedResourceModel();
    }

    async getLessonPlansByTeacher(teacherId) {
        try {
            const queryRef = query(
                this.collectionRef,
                where('teacherId', '==', teacherId)
            );
        
            const querySnapshot = await getDocs(queryRef);
            
            return querySnapshot.docs.map((doc) => doc.data());
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async getLessonPlan(docId) {
        try {
            const docRef = doc(db, this.collectionName, docId);
            const snap = await getDoc(docRef);
            if(snap.exists()) {
                const snapData = snap.data();
                this.resourceModel.getGeneratedDoc(snapData.uid)
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
  
    async getLessonPlans() {
      const querySnapshot = await getDocs(this.collectionRef);
      return querySnapshot.docs.map(doc => doc.data());
    }
  
    async addLessonPlan(lessonPlanData) {
      try {
        await addDoc(this.collectionRef, lessonPlanData);
        console.log('Lesson plan added successfully.');
      } catch (error) {
        console.error('Error adding lesson plan:', error);
      }
    }
  }
  
  export default LessonPlanModel;