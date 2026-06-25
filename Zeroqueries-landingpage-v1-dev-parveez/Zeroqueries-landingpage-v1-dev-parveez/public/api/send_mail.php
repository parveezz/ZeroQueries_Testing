<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_type = isset($_POST['form_type']) ? $_POST['form_type'] : '';

    $to = "info@zeroqueries.com"; // Default for demo and newsletter
    $subject = "New Submission from ZeroQueries Landing Page";
    $message = "";

    // Parse data based on form type
    if ($form_type === 'newsletter') {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = "New Newsletter Subscription";
        $message = "A new user has subscribed to the newsletter.\n\nEmail: " . $email;

    } else if ($form_type === 'partner') {
        $to = "partners@zeroqueries.com";
        $subject = "New Partner Discussion Request";
        $companyName = htmlspecialchars($_POST['companyName'] ?? '');
        $website = htmlspecialchars($_POST['website'] ?? '');
        $contactPerson = htmlspecialchars($_POST['contactPerson'] ?? '');
        $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
        $country = htmlspecialchars($_POST['country'] ?? '');
        $services = htmlspecialchars($_POST['services'] ?? '');
        $customersCount = htmlspecialchars($_POST['customersCount'] ?? '');
        $industries = htmlspecialchars($_POST['industries'] ?? '');
        $source = htmlspecialchars($_POST['source'] ?? '');
        $prefDate = htmlspecialchars($_POST['prefDate'] ?? '');
        $prefTime = htmlspecialchars($_POST['prefTime'] ?? '');

        $message = "You have received a new Partner Discussion Request.\n\n";
        $message .= "Company Name: $companyName\n";
        $message .= "Website: $website\n";
        $message .= "Contact Person: $contactPerson\n";
        $message .= "Email: $email\n";
        $message .= "Country: $country\n";
        $message .= "Primary Services: $services\n";
        $message .= "Number of Clients: $customersCount\n";
        $message .= "Industries Served: $industries\n";
        $message .= "How did they hear about us?: $source\n";
        $message .= "Preferred Date: $prefDate\n";
        $message .= "Preferred Time: $prefTime\n";

    } else {
        // Default to demo request (form feed)
        $subject = "New Demo Request";
        $name = htmlspecialchars($_POST['name'] ?? '');
        $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
        $organization = htmlspecialchars($_POST['organization'] ?? '');
        $role = htmlspecialchars($_POST['role'] ?? '');
        $environment = htmlspecialchars($_POST['environment'] ?? '');

        $message = "You have received a new Demo Request.\n\n";
        $message .= "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Organization: $organization\n";
        $message .= "Role: $role\n";
        $message .= "Environment: $environment\n";
    }

    $headers = "From: noreply@zeroqueries.com\r\n";
    $headers .= "Reply-To: " . (isset($email) ? $email : "noreply@zeroqueries.com") . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "success" => true, "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "success" => false, "message" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
