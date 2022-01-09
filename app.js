const title = document.querySelector('#title'),
author = document.querySelector('#author'),
year = document.querySelector('#year'),
btn = document.querySelector('.btn'),
book_list = document.querySelector('#book-list')
btn.addEventListener('click',function(event){
    event.preventDefault();
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please input your information')
    }else{
        const newRow = document.createElement('tr')
        const NewTitle = document.createElement('th')
        NewTitle.innerHTML = title.value
        newRow.appendChild(NewTitle)

        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)

        const dataYear = document.createElement('th')
        dataYear.innerHTML = year.value
        newRow.appendChild(dataYear)
        book_list.appendChild(newRow)

        title.value = ''
        author.value = ''
        year.value = ''
    }
})