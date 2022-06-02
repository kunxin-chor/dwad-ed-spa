document.querySelector('#btn-page1').addEventListener('click', function(){
    // hide all the existing pages
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 1
    let page1 = document.querySelector('#page-1');
    page1.classList.add('show');
    page1.classList.remove('hidden');
})

document.querySelector('#btn-page2').addEventListener('click', function(){
    // hide all the existing pages
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 2
    let page2 = document.querySelector('#page-2');
    page2.classList.add('show');
    page2.classList.remove('hidden');
})

document.querySelector('#btn-page3').addEventListener('click', function(){
    // hide all the existing pages
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 3
    let page3 = document.querySelector('#page-3');
    page3.classList.add('show');
    page3.classList.remove('hidden');
})