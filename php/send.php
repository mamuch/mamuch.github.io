<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "mamuchj@outlook.com";
$subject = "Contact Request";
$body = "This is an automated message. Please don't Reply. \n\n $request";

mail ($to,$subject,$body);

echo "Message sent! <a href="index.html">click here</a> to explore the site more";
?>