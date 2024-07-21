<?php
include 'db.php';

$sql = "SELECT candidate, COUNT(*) as votes FROM votes GROUP BY candidate";
$result = $conn->query($sql);

$results = [];
while ($row = $result->fetch_assoc()) {
    $results[] = $row;
}

echo json_encode($results);

$conn->close();
?>
