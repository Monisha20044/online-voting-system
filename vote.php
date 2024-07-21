<?php
include 'db.php';

$candidate = $_POST['candidate'];
$username = 'current_logged_in_user'; // This should be retrieved from session or authentication context

$sql = "INSERT INTO votes (username, candidate) VALUES ('$username', '$candidate')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
