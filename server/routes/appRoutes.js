module.exports = function(app) {

    var donations = require('../Controller/appcontroller');

    

    app.route('/api/donations')
      .get(donations.list_all_donations);

      app.route('/api/donations')
      .post(donations.create_a_donation);
     
     app.route('/api/donations/:Id')
      .get(donations.read_a_donation)
      .put(donations.update_a_donation)
     .delete(donations.delete_a_donation);
      };