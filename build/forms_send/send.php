<?php
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
	header('Allow: POST');
	header('HTTP/1.1 405 Method Not Allowed');
	header('Content-Type: text/plain');
	exit;
}

$to = 'victor.provotorov@gmail.com'; //адрес, админа сайта
$from = "robot@".($_SERVER["HTTP_HOST"]); //адрес, от которого придёт уведомление

function gf($s) {
    $s = substr((htmlspecialchars($_POST[$s])), 0 , 500);
    if (strlen($s) > 1) {
        return $s;
    }
}

if($_POST["name"] && $_POST["phone"] && $_POST["comment"]){
	$name = gf("name");
    $phone = gf("phone");
    $comment = gf("comment");

	$title = "VSignal.ru - Заявка с сайта";
	$mess .= "Вам поступило сообщение из формы обратной связи с сайта VSignal.ru<br><br>";
	$mess .= "<b>Имя</b>: ".$name."<br>";
    $mess .= "<b>Телефон</b>: ".$phone."<br>";
    $mess .= "<b>Сообщение</b>: ".$comment."<br>";

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