<?php
if(isset($_POST['submit']) && !empty($_POST['submit'])) {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $phone = trim($_POST["phone"]);
  $msg = trim($_POST["message"]);

  $to = 'mituls@navines.com';
  $subject = 'Website Customer Contact';
  $headers = "From: Contact Form <". strip_tags($_POST['email']) . ">\r\n";
  $headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  $message = '<html><body>';
  $message .= '<table width="500" style="margin:0px auto;" bordercolor="#9c9c9c" rules="all" border="1" cellpadding="8" cellspacing="0">';
  $message .= '<tr><td colspan="2"><img src="https://www.neoboard.app/app/img/neoboard-logo.png" width="200" alt="Website Logo"></td></tr>';
  $message .= "<tr><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
  $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
  $message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
  $message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
  $message .= '<tr><td colspan="2">All rights reserved to the Butterfly website owners.</td></tr>';
  $message .= "</table>";
  $message .= "</body></html>";	
  mail($to, $subject, $message, $headers);
  //header('Location: thank-you.html');
}
?>
