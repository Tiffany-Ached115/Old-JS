
 // Сохраняем адрес API
  var api = 'https://swapi.dev/api/';
  var apiPeople = api + 'people/';
  // Формируем полный адрес запроса:
    var button = document.querySelector('button');
    var search = ''; 
    var request = '';
    var people = [];
    var i = 0;
    button.addEventListener ('click', function (ev){
      ev.preventDefault();
      search = document.querySelector('#person_search_input').value;
      while (i <= 100){
        fetch(apiPeople + i)
          .then (function(response){
            if (response.status !== 200) {
               alert(
               "Произошла ошибка при получении ответа от сервера:\n\n" +
                   response.message
                 );
                  return;
            }
            return response.json();
          })
          .then (function(response){
            compare = response.name;
            if (compare.includes(search) === true){
              people.push (compare);  
              var newLi = document.createElement('LI');
              newLi.className = 'search_form';
              url = response.url;
              newLi.innerHTML = compare;
              newLi.id = url.replace(/[^0-9]+/g, "");
              document.querySelector('.search_result').appendChild(newLi);
            }
          })
        .catch(function(error) {
        console.log(error);
        });
      i++;
    }
    if (people.length == 0) {
      alert ('По вашему запросу ничего не найдено');
    }
    })
    document.querySelector('.search_result').addEventListener ('click', function (ev){
      ev.preventDefault();
      var id = ev.target.id;
      fetch (apiPeople + id+'/')
          .then (function (response){
            return response.json();  
          })
          .then (function (response){
            document.querySelector ('#name').innerHTML = response.name;
            document.querySelector ('#height').innerHTML = response.height;
            document.querySelector ('#mass').innerHTML = response.mass;
            document.querySelector ('#birth_year').innerHTML = response.birth_year;
            document.querySelector ('#films_count').innerHTML = response.films.length;  
          return response;
          })
      })
    
