function createContent(item){
     const data = {
         'first', 'This is the first item',
         'second', 'This is the second item',
         'third', 'This is the third item'
     }
     if (document.querySelector('.content') == null) {
         document.querySelector(`.${item}`).innerHTML += `<p class="content">${data[item]}</p>`
     }
     else {
         let el = document.querySelector('.content');
         el.remove()
     }
 }

    function Create(item){
        const data = {
            'first', 'This is the first item',
            'second', 'This is the second item',
            'third', 'This is the third item'
        }
        if (document.querySelector('.content') == null) {
            document.querySelector(`.${item}`).innerHTML += `<p class="content">${data[item]}</p>`
        }
        else {
            let el = document.querySelector('.content');
            el.remove()
        }
    }

    function create(item){
        const data = {
            'first', 'This is the first item',
            'second', 'This is the second item',
            'third', 'This is the third item'
        }
        if (document.querySelector('.content') == null) {
            document.querySelector(`.${item}`).innerHTML += `<p class="content">${data[item]}</p>`
        }
        else {
            let el = document.querySelector('.content');
            el.remove()
        }
    }

        function Content(item){
        const data = {
            'first', 'This is the first item',
            'second', 'This is the second item',
            'third', 'This is the third item'
        }
        if (document.querySelector('.content') == null) {
            document.querySelector(`.${item}`).innerHTML += `<p class="content">${data[item]}</p>`
        }
        else {
            let el = document.querySelector('.content');
            el.remove()
        }
    }

    function makeContent(item){
        const data = {
            'first', 'This is the first item',
            'second', 'This is the second item',
            'third', 'This is the third item'
        }
        if (document.querySelector('.content') == null) {
            document.querySelector(`.${item}`).innerHTML += `<p class="content">${data[item]}</p>`
        }
        else {
            let el = document.querySelector('.content');
            el.remove()
        }
    }
