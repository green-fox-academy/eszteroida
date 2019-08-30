'use strict';

    // 1)  Fill every paragraph with the last one's content.
    let allElements = document.querySelectorAll('p');
    let lastContent = document.querySelector('.animals').textContent;
    allElements.forEach(function (element) {
      element.textContent = lastContent;
    });

    // 2)  Do the same again, but you should keep the cat strong.
    let allElements2 = document.querySelectorAll('p');
    let lastContent2 = document.querySelector('.animals').innerHTML ;
    allElements2.forEach(function (element) {
      element.innerHTML = lastContent2;
    });