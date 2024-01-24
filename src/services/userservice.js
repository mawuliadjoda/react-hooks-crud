import firebase from "../firebase";


const db = firebase.collection("/users");

class UserService {
  getAll() {
    return db;
  }

  create(user) {
    return db.add(user);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new UserService();