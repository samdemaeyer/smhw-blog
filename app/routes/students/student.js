import Ember from 'ember';

export default Ember.Route.extend({
  model({ student_id }) {
    return this.store.findRecord('student', student_id);
  },

  afterModel(student) {
    return student.get('homeworks');
  }
});
