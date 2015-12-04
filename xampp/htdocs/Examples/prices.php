<?php
header('Access-Control-Allow-Origin: *');
$xml = new DomDocument("1.0","UTF-8");

$arr1 = array('Acer Aspire V7','Dell Inspiron',
             'Lenovo Yoga 2', 'MacBook Pro Retina',
             'MacBook Air','Sony VAIO Pro 13');
$arr2 = array('$700','$600','$1100','$1400','$900','$1400');

$container = $xml->createElement("prices");
$xml->appendChild($container);

#$laptop = $xml->createElement("laptop");
#$name = $xml->createAttribute("name");
#$price = $xml->createAttribute("price");

$count = 6;
for($i = 0; $i < $count; $i++) {
    
    $laptop = $xml->createElement("laptop");
    $name = $xml->createAttribute("name");
    $price = $xml->createAttribute("price");
    
    $tname = $xml->createTextNode($arr1[$i]);
    $tprice = $xml->createTextNode($arr2[$i]);
    $name->appendChild($tname);
    $price->appendChild($tprice);

    $laptop->appendChild($name);
    $laptop->appendChild($price);

    $container->appendChild($laptop);
}


$xml->FormatOutput = true;
$string_value = $xml->saveXML();
echo $string_value;
?>

