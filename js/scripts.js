function myForm() {
    var Name = document.forms["commentForm"]["entername"].value;
  if (Name== "") {
    alert("Name must be filled out");
    return false
  };
  var Email = document.forms["commentForm"]["enteremail"].value;
  if(Email== ""){
      alert("Email must be filled out");
      return false
  };
  var Com = document.forms['commentForm']['entercomment'].value;
  if(Com == ""){
      alert("Please type in your comments");
      return false
  }
  else {
    alert("Hi "+ Name +' Thank you for writing to us.We value your feedback')
  };
};
