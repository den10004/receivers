<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "examples23@yandex.ru";
    $subject = "weqw";
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    echo "Данные успешно получены! Имя: $name, Email: $email";
    if (mail($to, $subject, $name . $tel)) {
        echo "Письмо успешно отправлено!";
    }
} else {
    http_response_code(400);
    echo "Ошибка при отправке письма.";
}
