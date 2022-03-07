<?php

$name = "Tashii";

if(isset($_POST['name,'])){
    $name = $_POST['name'];
}

$message = "<p>Hi!</p>";
$message .= "<p>$name</p>";

$to_email = 'TashiiDesign@gmail.com';
$subject = 'Website Enquiry';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: <noreply@tashii.com>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>
