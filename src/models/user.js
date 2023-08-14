import { db } from '../plugins/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

class UserModel {
  constructor() {
    this.collectionRef = collection(db, 'customers');
  }

  async getUsers() {
    const querySnapshot = await getDocs(this.collectionRef);
    return querySnapshot.docs.map(doc => doc.data());
  }
}

export default UserModel;