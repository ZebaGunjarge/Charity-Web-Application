var sql = require('../database.js');
//const bodyParser = require('body-parser');

var Task = function(task){
    this.idDonation = task.idDonation;
    this.FIrstName = task.FIrstName;
    this.LastName = task.LastName;
    this.DonationCategory = task.DonationCategory;
    this.Amount = task.Amount;

};

Task.createDonation = function (requestdata, result) 
{    

        console.log(requestdata.idDonation, requestdata.FIrstName, requestdata.LastName, requestdata.DonationCategory, requestdata.Amount);
        sql.query("INSERT INTO donation(idDonation ,FIrstName, LastName, DonationCategory, Amount) VALUES(?,?,?,?,?)", [requestdata.idDonation, requestdata.FIrstName, requestdata.LastName, requestdata.DonationCategory, requestdata.Amount], function (err, res) 
        {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else
                {
                    console.log(res.insertId);
                    result(null, res.insertId);
                    
                }
            });          
};

Task.getDonationById = function (id, result) {
    sql.query("Select * from donation where idDonation=?", [id],  function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
                //console.log('Donations : ', res);
          
            }
        });   
};

Task.getAllDonation= function (result) {
    sql.query("Select * from donation", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('Donations : ', res);  

             result(null, res);
            }
        });   
};

Task.updateById = function(id, requestdata, result){
    
    //console.log(id , requestdata.FIrstName, requestdata.LastName, requestdata.DonationCategory, requestdata.Amount);
    sql.query("UPDATE donation SET FIrstName=? ,LastName = ?, DonationCategory=? , Amount=? WHERE idDonation = ?", [requestdata.FIrstName, requestdata.LastName, requestdata.DonationCategory, requestdata.Amount, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };


  Task.remove = function(id, result){
    sql.query("DELETE FROM donation WHERE idDonation = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};

module.exports= Task;