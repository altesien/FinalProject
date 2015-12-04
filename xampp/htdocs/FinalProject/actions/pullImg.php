<?php
	header('Access-Control-Allow-Origin: *');
	$xml = new DomDocument("1.0","UTF-8");

	$container = $xml->createElement("holder");
	$xml->appendChild($container);

	$html=file_get_contents('http://imgur.com/t/pizza');
	$tidy = new tidy();
	$html = $tidy->repairString($html);

	$d = new DomDocument();
	$d->loadHtml($html);

	$p = new DomXPath($d);
	$images = array();


	foreach($p->query('img') as $i){ 
		$images[]=$i;
		$container->appendChild($xml->createTextNode($i));
	}

	foreach($images as $i){
		echo $out;
	}
/*
	for($i=1; $i<10;$i++){
		$hold = $xml->createElement("image");
		$src = $xml->createAttribute("src");
		$tsrc = $xml->createTextNode($images[$i]);

		$src->appendChild($tsrc);
		$hold->appendChild($src);
		$container->appendChild($hold);

	}
	*/

	$xml->FormatOutput = true;
	$string_value = $xml->saveXML();
	echo $string_value;

?>