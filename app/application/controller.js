import Ember from 'ember';

export default Ember.Controller.extend({

  modalShowing: false,

  actions: {
    openModal() {
      this.set('modalShowing', true);
      $('body').addClass('centered-modal-showing');
    },

    closeModal() {
      this.set('modalShowing', false);
      $('body').removeClass('centered-modal-showing');
    }
  }

});
