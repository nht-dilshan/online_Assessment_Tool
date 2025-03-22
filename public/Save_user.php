<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow requests from any origin (for development only)
header("Access-Control-Allow-Origin: *");
// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");
// Set response content type to JSON
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return empty response for preflight request
    http_response_code(204);
    exit;
}

// Database connection parameters
$host = 'localhost';
$db   = 'online-assessment';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

// Check if the connection was successful
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

// Get the JSON data from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check if the required fields are present in the data
if (!isset($data['fullName'], $data['email'], $data['phoneNumber'], $data['skillsScore'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Escape the input data to prevent SQL injection
$fullName = $conn->real_escape_string($data['fullName']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phoneNumber']);
$workplace = isset($data['workplace']) ? $conn->real_escape_string($data['workplace']) : null;
$jobRole = isset($data['jobRole']) ? $conn->real_escape_string($data['jobRole']) : null;
$skillsScore = floatval($data['skillsScore']);

// SQL query to insert the user data into the database
$sql = "INSERT INTO users (full_name, email, phone_number, workplace, job_role, skills_score) 
        VALUES ('$fullName', '$email', '$phone', '$workplace', '$jobRole', $skillsScore)";

// Execute the query and check if it was successful
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'User saved successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
}

// Close the database connection
$conn->close();
?>