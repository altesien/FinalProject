<?php
	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$dbname = 'mydb';

	try {

		$conn = new PDO("msql:host=$host;dbname=$dbname",$user,$pass);

		$statement = $conn->prepare("INSERT INTO finaldb(Gender, Birthdate, Texty) values (:gender, :bdat, :tex)");
		$statement->bindValue(":gender", $_POST['gender']);
		$statement->bindValue(":Birthdate", $_POST['bdat']);
		$statement->bindValue(":Texty", $_POST['tex']);
		$statement->execute();
		$numRowsAffected = $statement->rowCount();
		$insertedPrimaryKey = $conn->lastInsertID();

		$conn = null;

	(header("Location: index.php"));
	}catch(PDOException $e) {  
     echo $e->getMessage();  
  }

?>