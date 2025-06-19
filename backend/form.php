<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $meuEmail = "lucas.tas@live.com";
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    
    $to = $meuEmail;
    $subject = "Contato - portfolio";
    $body = "
    Nome: $nome\r\n
    Email: $email\r\n
    Mensagem: $mensagem";
    $header = "From:$meuEmail\r\nReply-To:$email\r\nX-Mailer:PHP/".phpversion();

    if (mail($to, $subject, $body, $header)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Houve um erro ao enviar o email.";
    }
}


?>