<html>
<link rel="stylesheet" type="text/css" href="./html/style.css">

<head>
<meta charset="UTF-8">
<title>New Mexico CFP</title>
<link rel="icon" type="image/png" href="./images/title.png" />
<script src="./html/jquery-1.11.0.min.js"></script>
</head>

<body>
<iframe class="marquee" src="./html/marquee.html" seamless="yes" ></iframe>
<div class="banner"></div>

<?php
	include './html/nav.html';

	print '<div class="content">';

	$content = $_GET['content'];
	$found = 0;
	if ($content == "") $content = "home";

	# permanent fixtures
	if ($content == "home") {include './html/home.html'; $found = 1;}
	if ($content == "events") {include './html/events.html'; $found = 1;}
	if ($content == "issues") {include './html/issues.html'; $found = 1;}
	if ($content == "people") {include './html/people.html'; $found = 1;}
	if ($content == "contact") {include './html/contact.html'; $found = 1;}
	
	# events
	if ($content == "call") {include './html/call.html'; $found = 1;}
	if ($content == "dream") {include './html/dream.html'; $found = 1;}
	
	# misc temp
	if ($content == "message") {include './html/message.html'; $found = 1;}
	if ($content == "endorsement") {include './html/endorsement.html'; $found = 1;}
	
	if ($found == 0) {
		echo "<center>Error: page not found.</center>";
	}
	
	print "</div>";
?>

<footer>
<iframe class="rights" src="./html/rights.html" seamless="yes"></iframe>
</footer>
</body>
</html>