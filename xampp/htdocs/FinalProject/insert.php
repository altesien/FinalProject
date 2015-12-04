<?php
  $host = 'localhost';
  $user = 'cs3210';
  $pass = 'cs3210';
  $dbname = 'examples';
  try {
     # MySQL with PDO_MYSQL  
     $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass); 
	 
     $statement = $conn->prepare("INSERT INTO Customers (FirstName, LastName, Balance) values (:fname, :lname, :bal)");
     $statement->bindValue(":fname", $_POST['firstName']);
     $statement->bindValue(":lname", $_POST['lastName']);
     $statement->bindValue(":bal", $_POST['balance']);
     $statement->execute();
     $numRowsAffected = $statement->rowCount();
     $insertedPrimaryKey = $conn->lastInsertId();

	 $conn = null; 

	 header("Location: query.php");
  } catch(PDOException $e) {  
     echo $e->getMessage();  
  }
?>
