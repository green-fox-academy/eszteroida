'use strict';

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true); // Also try http://444.hu/feed
httpRequest.send(null);

