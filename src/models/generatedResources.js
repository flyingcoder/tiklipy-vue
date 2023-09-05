import dayjs from "dayjs";
import { useFormStore } from "../stores/form";
import { auth } from "../plugins/firebase";
import axios from "axios";

class GeneratedResourceModel {

    async getGeneratedResources() {
      try {
        axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
        return axios.get('/api/v1/resources');
      } catch (error) {
          console.log(error);
          return [];
      }
    }

    async getGeneratedDoc(docId) {
      try {
          axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
          return axios.get('/api/v1/resources/doc/'+docId);
      } catch (error) {
          console.log(error);
          return false;
      }
    }

    parseTitle(rawData) {
      const choice = rawData?.choice;
      const firstLine = choice?.message?.content?.split('\n');
      if(firstLine?.length > 0)
        return firstLine[0];
      else
        return message?.content?.split(/(?<=[.!?])\s+/)[0];
    }
  
    async addGeneratedResource(rawData) {
      try {
        const formStore = useFormStore();
        const parseTitle = this.parseTitle(rawData);
        let data = {
          content: rawData,
          dateCreated: dayjs().format(),
          type: formStore.type,
          title: parseTitle,
          icon: formStore.icon,
          formInput: formStore.inputs,
          teacherId: auth?.currentUser?.uid,
          usage: rawData.usage,
        }
        axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
        await axios.post('/api/v1/resources', data);
        return true;
      } catch (error) {
        console.error('Error adding resources to firebase:', error);
        return false;
      }
    }
  }
  
  export default GeneratedResourceModel;