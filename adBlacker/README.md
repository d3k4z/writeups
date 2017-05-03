# Да видим какво се крие в безплатните anti-adblocker(JS Deobfuscation)

Сайтът [blockadblock.com](https://blockadblock.com/) ни предоставя безплатно да си приложим следния обфускиран [JavaScript код](files/obfuscated.js).

В него едно от малкото неща които можем да различим и видим е най-често срещатана фукция за обфускиране - `eval()`. На много програмни езици, `eval()` изпълнява/компилира подаден код в raw формат.
Първо задължително проверяваме какво имаме в арсенала за деофускация на код - "не искаме да преоткриваме колелото" , попадението не закъсня. [Този](http://deobfuscatejavascript.com/#) сайт ми деофускира кода до това [състояние](files/deobfuscated.js).


Кой както иска може да процедира от тук нататък, на мен ми е най удобна python конзолата за бърза обработка на такива **arrays**. Особено към от base64 каквъто е енкодинга на информацията която са се опитали да укрият

Започваме със 143 ред:
```
    var a = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms=']

```


прехвърляме променливата в конзолата:

```
>>> for i in a:
...     base64.b64decode(i)... 
'ad-left','adBannerWrap','ad-frame','ad-header','ad-img','ad-inner','ad-label','ad-lb','ad-footer','ad-container','ad-container-1','ad-container-2','Ad300x145','Ad300x250','Ad728x90','AdArea','AdFrame1','AdFrame2','AdFrame3','AdFrame4','AdLayer1','AdLayer2','Ads_google_01','Ads_google_02','Ads_google_03','Ads_google_04','DivAd','DivAd1','DivAd2','DivAd3','DivAdA','DivAdB','DivAdC','AdImage','AdDiv','AdBox160','AdContainer','glinkswrapper','adTeaser','banner_ad','adBanner','adbanner','adAd','bannerad',' ad_box','ad_channel','adserver','bannerid','adslot','popupad','adsense','google_ad','outbrain-paid','sponsored_link'
```

следващите **b64** енкодирани стрингове са на редовете 195, 195 - i, r. Резултата от тях е:

```
'adn.ebay.com', 'ad.mail.ru', 'juicyads.com', 'ad.foxnetworks.com', 'partnerads.ysm.yahoo.com', 'a.livesportmedia.eu', 'agoda.net/banners', 'advertising.aol.com', 'cas.clickability.com', 'promote.pair.com', 'ads.yahoo.com', 'ads.zynga.com', 'adsatt.abcnews.starwave.com', 'adsatt.espn.starwave.com', 'as.inbox.com', 'partnerads.ysm.yahoo.com'
----
'favicon.ico','banner.jpg','468x60.jpg','720x90.jpg','skyscraper.jpg','1367_ad-clientID2464.jpg','adclient-002147-host1-banner-ad.jpg','CDN-334-109-137x-ad-banner','favicon.ico','ad-large.png','square-ad.png','favicon1.ico','banner_ad.gif','large_banner.gif','wide_skyscraper.jpg','advertisement-34323.jpg'
```

Вече започва да става интересно. Следват редове 278 и 283 - `ins.adsbygoogle` и `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`. Ред 296:

```
'//www.google.com/adsense/start/images/favicon.ico'
'//www.gstatic.com/adx/doubleclick.ico'
'//advertising.yahoo.com/favicon.ico'
'//ads.twitter.com/favicon.ico'
'//www.doubleclickbygoogle.com/favicon.ico'
```

Ред 345 - `//yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css`. И последно от ред 371 ето тази [снимка](files/what.png).

И така, след като деобфускирахме част от стринговете, сега ще се опитаме (да разгледаме и сорс-кода. Дебъгинг на JS код е най-удобно да се прави в JavaScript Debugger-ите на браузър(за Firefox - Ctrl+Shift+S).

Поставяме `Break Points`(BP) на всеки `return` зашото очакваме тази стойност да е сорс-кода в plain формат.

