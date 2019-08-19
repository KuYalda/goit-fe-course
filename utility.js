/* Установить на сайте красную рамку для всех html-тегов(нужно выполнить в консоли)
 */
Array.from(document.querySelectorAll('*'),
            elem => elem.style.cssText
            = 'outline: 1px solid red;'
            );