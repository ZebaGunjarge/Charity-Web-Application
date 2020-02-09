var Task = require('../Model/appmodel.js');





exports.list_all_donations = function (req, res) {
  Task.getAllDonation(function (err, task) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', task);
    res.send(task);
  });
};



exports.create_a_donation = function(req, res) {

  var new_task = new Task(req.body);
  console.log(req.body);
  /*{
    this.idDonation = req.params.idDonation;
    this.FIrstName = req.params.FIrstName;
    this.LastName = req.params.LastName;
    this.DonationCategory = req.params.DonationCategory;
    this.Amount = req.params.Amount;
  };*/

Task.createDonation(new_task, function(err, task) {

if (err)
res.send(err);
res.json(task);
//res.end();
});

};


/*exports.create_a_donation = function (req, res)  {

  const idDonation = req.body.idDonation;
    const FIrstName = req.body.FIrstName;
    const LastName = req.body.LastName;
    const DonationCategory = req.body.DonationCategory;
    const Amount = req.body.Amount;

    console.log("idDonation");
  sql.query("INSERT INTO donation", [idDonation, FIrstName, LastName, DonationCategory, Amount], function (err, result, fields) {

    if (err) {
      console.log("error: ", err)
     //res(err, null)
    }
    else {
      console.log(result.insertId);
      res(null, result.insertId);
    }
    res.end();
  })

  res.end();

};*/


exports.read_a_donation = function (req, res) {
  Task.getDonationById(req.params.Id, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_donation = function (req, res) {
  Task.updateById(req.params.Id, new Task(req.body), function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_donation = function (req, res) {


  Task.remove(req.params.Id, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Donation successfully deleted' });
  });
};