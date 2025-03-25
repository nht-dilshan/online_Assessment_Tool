<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow CORS from the frontend origin
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database connection parameters
$host = 'localhost';
$db   = 'online-assessment';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

// Check database connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

// Get data from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check required fields
if (!isset($data['fullName'], $data['email'], $data['phoneNumber'], $data['skillsScore'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Escape input to prevent SQL injection
$fullName = $conn->real_escape_string($data['fullName']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phoneNumber']);
$workplace = isset($data['workplace']) ? $conn->real_escape_string($data['workplace']) : null;
$jobRole = isset($data['jobRole']) ? $conn->real_escape_string($data['jobRole']) : null;
$skillsScore = floatval($data['skillsScore']);

// Insert user data into the database
$sql = "INSERT INTO users (full_name, email, phone_number, workplace, job_role, skills_score) 
        VALUES ('$fullName', '$email', '$phone', '$workplace', '$jobRole', $skillsScore)";

// Execute query
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'User saved successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
}


$conn->close();
?>