// Business Logic

function Ticket (title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age
}

// ToDo: Add parameter
Ticket.prototype.titleDiscout = function() {
  if (this.title === "Lion-king") {
    return 2;
  } else {
    return 0;
  }
}
// ToDo: Add parameter
Ticket.prototype.timeDiscout = function() {
  if (this.time === "early" || this.time==="late"){
    return -1;
  } else {
    return 0;
  }
}

Ticket.prototype.ageDiscout = function() {
  if(this.ageType === "children") {
    return -3;
  } else if (this.ageType === "senior") {
    return -1;
  } else {
    return 0;
  }
}

Ticket.prototype.getPrice = function() {
  const calcPrice = 7 + this.titleDiscout() + this.timeDiscout() + this.ageDiscout();
  $("#price").append(`<p>$${calcPrice}</p>`);
}

// User Interface Logid
Ticket.prototype.showTicket = function() {
  $("#ticket").append(`<p>Movie Name: ${this.title}</p>`);
  $("#ticket").append(`<p>Time Zone: ${this.time}</p>`);
  $("#ticket").append(`<p>Age: ${this.age}</p>`);
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const inputtedTitle = $("select#title :selected").val();
    const inputtedTime = $("select#time :selected").val();
    const inputtedAge = $("select#age :selected").val();


    const newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);
    const showTicket = newTicket.showTicket();
    const ticketPrice = newTicket.getPrice();
    $("#result").show();
  });
});
