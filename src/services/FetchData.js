//const URI = 'https://jsonplaceholder.typicode.com/users';

export default {
  async fetchUsers(URI) {
    try {
      let response = await fetch(URI);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
