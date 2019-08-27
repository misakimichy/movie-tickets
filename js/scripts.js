// Business Logic

function Ticket (title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age
}

Ticket

function Discout (isNew, timeZone, ageType) {
  this.isNew = isNew,
  this.timeZone = timeZone,
  thie.ageType =  ageType
}
// ToDo: Add parameter
Discout.prototype.titleDiscout = function() {
  if (isNew === "lion-king") {
    return 2;
  } else {
    return 0;
  }
}
// ToDo: Add parameter
Discout.prototype.timeDiscout = function() {
  if (this.time === "early" || this.time==="late"){
    return -1;
  } else {
    return 0;
  }
}

Discout.prototype.ageDiscout = function() {
  if(this.ageType === "kids") {
    return -3;
  } else if (this.ageType === "senior") {
    return -1;
  } else {
    return 0;
  }
}

Ticket.prototype.getPrice = function() {
  return 5 + his.titleDiscout + this.timeDiscout + this.ageDiscout;
}

// User Interface Logid
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const inputtedTitle = $("select#title :selected").val();
    const inputtedTime = $("select#time :selected").val();
    const inputtedAge = $("select#age :selected").val();

    let newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);
    console.log(newTicket);
  });
});
