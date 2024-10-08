<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // You can process or store this data in a database, or send an email.
    
    echo "Thank you for contacting us, $name. We will get back to you at $email.";
}
?>
