<?php 

# Audio file from Discombobulator in webroot: discombobulated-audio-6-XyzE3N9YqKNH.mp3

# Code from http://thisinterestsme.com/receiving-json-post-data-via-php/
# Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    die("Request method must be POST\n");
}
	 
# Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    die("Content type must be: application/json\n");
}
	
# Grab the raw POST. Necessary for JSON in particular.
$content = file_get_contents("php://input");
$obj = json_decode($content, true);
	# If json_decode failed, the JSON is invalid.
if(!is_array($obj)){
    die("POST contains invalid JSON!\n");
}

# Process the JSON.
if ( ! isset( $obj['operation']) or (
	$obj['operation'] !== "WriteCrashDump" and
	$obj['operation'] !== "ReadCrashDump"))
	{
	die("Fatal error! JSON key 'operation' must be set to WriteCrashDump or ReadCrashDump.\n");
}
if ( isset($obj['data'])) {
	if ($obj['operation'] === "WriteCrashDump") {
		# Write a new crash dump to disk
		processCrashDump($obj['data']);
	}
	elseif ($obj['operation'] === "ReadCrashDump") {
		# Read a crash dump back from disk
		readCrashdump($obj['data']);
	}
}
else {
	# data key unset
	die("Fatal error! JSON key 'data' must be set.\n");
}
function processCrashdump($crashdump) {
	$basepath = "/var/www/html/docs/";
	$outputfilename = tempnam($basepath, "crashdump-");
	unlink($outputfilename);
	
	$outputfilename = $outputfilename . ".php";
	$basename = basename($outputfilename);
	
	$crashdump_encoded = "<?php print('" . json_encode($crashdump, JSON_PRETTY_PRINT) . "');";
	file_put_contents($outputfilename, $crashdump_encoded);
			
	print <<<END
{
	"success" : true,
	"folder" : "docs",
	"crashdump" : "$basename"
}

END;
}
function readCrashdump($requestedCrashdump) {
	$basepath = "/var/www/html/docs/";
	chdir($basepath);		
	
	if ( ! isset($requestedCrashdump['crashdump'])) {
		die("Fatal error! JSON key 'crashdump' must be set.\n");
	}

	if ( substr(strrchr($requestedCrashdump['crashdump'], "."), 1) === "php" ) {
		die("Fatal error! crashdump value duplicate '.php' extension detected.\n");
	}
	else {
		require($requestedCrashdump['crashdump'] . '.php');
	}	
}

?>
