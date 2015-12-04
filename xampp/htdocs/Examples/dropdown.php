<?php
header('Access-Control-Allow-Origin: *');
$xml = new DomDocument("1.0","UTF-8");


$container = $xml->createElement("select");

$xml->appendChild($container);

$name = $xml->createAttribute("name");
$tname = $xml->createTextNode("dom");
$name->appendChild($tname);
$container->appendChild($name);

$arr1 = array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");

for ($i=0; $i <12; $i++) { 
	$option = $xml->createElement("option2");
	$month = $xml->createAttribute("month");
	$tmonth = $xml->createTextNode($arr1[$i]);

	$month->appendChild($tmonth);
	$option->appendChild($month);
	$container->appendChild($option);
}


for ($i=1; $i < 32 ; $i++) { 
	$option = $xml->createElement("option");
	$day = $xml->createAttribute("day");
	$tday = $xml->createTextNode($i);

	$day->appendChild($tday);

	$option->appendChild($day);
	
	$container->appendChild($option);
}

$xml->FormatOutput = true;
$string_value = $xml->saveXML();
echo $string_value;

?>