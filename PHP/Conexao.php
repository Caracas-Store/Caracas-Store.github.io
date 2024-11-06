<?php
$host = "autorack.proxy.rlwy.net";
$usuario = "root";
$senha = "unWwngPvGInAtnbJwOhawfMQHJZQAvoJ";
$banco = "railway";

// Conexão
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

?>