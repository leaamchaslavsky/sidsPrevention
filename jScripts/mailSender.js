function sendMail() {
    Email.send({
        SecureToken: "3994bdfe-3295-4e40-a4f3-4059a96d58ec",
        To: 'sidsprotect@gmail.com',
        From: $('#Email')[0].value,
        Subject: 'פניה חדשה הגיעה',
        Body: $('#Message')[0].value + '\n מספר הטלפון של השולח:\n' + $('#phone')[0].value
    }).then(
  message => {
      if (message == 'OK') {
          $('#sendButton')[0].innerText = "ההודעה נשלחה בהצלחה";
          $('#sendButton')[0].disabled = true;
      }
      else {
          $('#sendButton')[0].innerText = "חלה שגיאה בשליחת המייל, אנא נסו שנית";
          $('#sendButton')[0].disabled = false;
          //alert('חלה שגיאה בשליחת המייל, אנא נסו שנית');
      }
  }
);
}