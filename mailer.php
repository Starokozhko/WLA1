<?php

if($_POST['newQuestion']) {

mail('mail@gmail.com', 'New Questions', "First name $_POST['first_name'] <br /> Last name $_POST['first_name']<br /> Email $_POST['email']<br /> Question $_POST['question']");

}