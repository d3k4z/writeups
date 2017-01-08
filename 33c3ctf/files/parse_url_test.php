<?php
// pwning by d3k4
// testing parse_url() - `parsing` function

$url_parts = parse_url("http://u:p@127.0.0.1:80@d3k4.com/reeeaally/reallyy/c00l/and_aw3sme_flag");

echo "initial: http://u:p@127.0.0.1:80@d3k4.com/reeeaally/reallyy/c00l/and_aw3sme_flag \n";
echo "H=", $url_parts["host"] , "\n";
echo "u=", $url_parts["user"] , "\n";
echo "pass=", $url_parts["pass"] , "\n";
echo "path=", $url_parts["path"] , "\n";
# echo $url_parts[""];

?>
