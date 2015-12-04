<?php
	header('Access-Control-Allow-Origin: *'); 
	if(!empty($_SESSION['hassub'])) {
    echo $_SESSION["hassub"];
}
?>