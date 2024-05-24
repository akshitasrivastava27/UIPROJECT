$(document).ready(function() {
    // LOGIN PAGE
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
      var $this = $(this),
          label = $this.prev('label');
      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if($this.val() === '') {
          label.removeClass('active highlight'); 
        } else {
          label.removeClass('highlight');   
        }   
      } else if (e.type === 'focus') {
        if($this.val() === '') {
          label.removeClass('highlight'); 
        } else if($this.val() !== '') {
          label.addClass('highlight');
        }
      }
    });

    $('.tab a').on('click', function (e) {
      e.preventDefault();
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      var target = $(this).attr('href');
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    });

    $('#signup-form').submit(function(event) {
      event.preventDefault(); 
      $('.tab-group li').removeClass('active');
      $('.tab-group li:eq(1)').addClass('active'); 
      $('.tab-content > div').hide();
    //   $('#login').show(); 
       // Redirect to events.html
       window.location.href = 'events.html';
    });

    // Event listener for "Already a member?" link
    $('#already-member-link').click(function(event) {
      event.preventDefault(); // Prevent the default link behavior
      $('.tab-group li').removeClass('active');
      $('.tab-group li:eq(1)').addClass('active'); // Activate the login tab
      $('.tab-content > div').hide();
      $('#login').show(); // Show the login form
    });
  });
  