<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Classwork 10 Task 2</title>
	<meta name="author" content="OrakomoRi">
	<link rel="icon" href="https://i.imgur.com/wIbsb0z.png">
</head>
<body>
	<?php
		if (isset($_POST['form_submitted'])): 
	?>
		<h2>Thank You,
			<?php
				echo $_POST['name'];
			?>
		</h2>
		<p>You provided:
			<?php
				echo $_POST['name'] . ' ' . $_POST['surname'] . ' ' . $_POST['date'];
			?>
		</p>
		<p>Go <a href="form.php">BACK</a> to the form</p>
	<?php
		else:
	?>
		<div class="contact_form">
			<form action="form.php" method="POST">
				<h3>The form</h3>
				<div>
					<input name="name" placeholder="Your name..." type="text" tabindex="1" required>
				</div>
				<div>
					<input name="surname" placeholder="Your surname..." type="text" tabindex="2" required>
				</div>
				<div>
					<input name="date" placeholder="Your date of birth..." type="date" tabindex="3" required>
				</div>
				<input type="hidden" name="form_submitted" value="1">
				<button type="submit" tabindex="5">Submit</button>
			</form>
		</div>
	<?php
		endif;
	?>
</body>
</html>