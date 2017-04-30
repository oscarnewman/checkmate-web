$('#input-form').one('submit',function(e){
      var name = encodeURIComponent($('#name-field').val());
      var email = encodeURIComponent($('#email-field').val());
      var message = encodeURIComponent($('#message-field').val());
      var q1ID = "entry.1860871364";
      var q2ID = "entry.1700225353";
      var q3ID = "entry.85375458";
      var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScBVqEbREDPvtafxR63gjnaP_-d34tfyQKXnjbXY5j85zZuQQ/formResponse?';
      var submitRef = '&submit=Submit';
      var submitURL = (baseURL + q1ID + "=" + name + "&" + q2ID + "=" + email + "&" + q3ID + "=" + message + submitRef);
      console.log(submitURL);
      $(this)[0].action=submitURL;
    //   $.get('submitURL');
    //   $('#input-feedback').html('Thanks!');
  });
