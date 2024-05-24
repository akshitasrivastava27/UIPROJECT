document.addEventListener('DOMContentLoaded', function() {
    var myCarouselElement = document.querySelector('#carouselExampleAutoplaying');
    var carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      wrap: true,
      touch: true
    });
  });

  function HomePage() {
    window.location.href = 'events.html';
  }

  function LoginPage(){
    window.location.href="login.html";
  }

  function bookEvent(){
    window.location.href="booking.html";
  }
  function ConfirmationPage(){
    window.location.href="confirmation.html";
  }

  function IndexPage(){
    window.location.href="index.html";
  }
// BOOKING PAGE
  function validateForm() {
    var firstName = document.getElementById("fullname").value;
    var lastName = document.getElementById("email").value;
    var numOfPeople = document.getElementById("number").value;

    if (firstName === "" || lastName === "" || numOfPeople === '0') {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  }

  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    document.getElementById('number').value = value + 1;
  }

  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      document.getElementById('number').value = value - 1;
    }
  }
