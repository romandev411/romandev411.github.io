<?php
if(!empty($_POST['telephone'] ))
{
$to = "почта@.ru";
$from = 'почта@.ru';
$subject = "Проверка почты";
$message = 'Телефон: '.$_POST['telephone'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <почта@.ru>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p class='orle1'>Cообщение успешно отправленно.</p>";
    }
    else{
        echo "<p class='orle'>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }
}
else {
echo "<p class='orle'>Обязательные поля не заполнены. </p>";
}
?>
