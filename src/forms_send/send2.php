<?php
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
	header('Allow: POST');
	header('HTTP/1.1 405 Method Not Allowed');
	header('Content-Type: text/plain');
	exit;
}

$to = 'vova@giveandget.ru'; //адрес, админа сайта
$from = "robot@".($_SERVER["HTTP_HOST"]); //адрес, от которого придёт уведомление

function gf($s) {
    $s = substr((htmlspecialchars($_POST[$s])), 0 , 500);
    if (strlen($s) > 1) {
        return $s;
    }
}

if($_POST["name_"] && $_POST["phone_"]){
	$name = gf("name_");
    $phone = gf("phone_");

	$title = "VSignal.ru - Заявка с сайта";
	$mess .= "Вам поступило сообщение из формы 'Заявка на расчёт' с сайта VSignal.ru<br><br>";
	$mess .= "<b>Имя</b>: ".$name."<br>";
    $mess .= "<b>Телефон</b>: ".$phone."<br>";

	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: <".$from.">\r\n";

	//Отправка на почту
	@mail($to, $title, $mess, $headers);
}

$message = "<p>Спасибо, Ваша сообщение принято!</p>"; //сообщение об отправке
?>
{
    "message": "<?=$message?>"
}
