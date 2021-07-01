<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['boomname'];
$phone = $_POST['boomtel'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP

$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'adm.vtb@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'boom1234'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('adm.vtb@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('henrykopanev@gmail.com');     // Кому будет уходить письмо 
// $mail->addAddress('nickita_yushenko@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта: Заявка на открытие счета';
$mail->Body    = 'Контактный телефон: ' .$phone . '<br> Ваши имя и фамилия: ' . $name. '<br> Подтверждаю согласие с условиями обработки персональных данных: yes <br> Источник: Интернет <br> Продукт: Горячий Расчетно-кассовое обслуживание <br> utm_source: marketplace_boomstarter <br> Номер заявки: 1234567890 '; 
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>




