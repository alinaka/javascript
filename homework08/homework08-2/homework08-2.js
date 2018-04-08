let good1 ={
    image: "1018898722.jpg",
    name: "Убить пересмешника",
    author: "Харпер Ли",
    artNo:  "140824650",
    description: `Харпер Ли — «гений одной книги», роман «Убить пересмешника» — ее единственное известное произведение. 
                    Но за эту книгу, переведенную едва ли не на все языки мира, писательница была удостоена Пулитцеровской
                    премии. Книга была признана лучшим американским романом ХХ века по версии «Library Journal»,
                    а затем принесла автору высшую гражданскую награду США — медаль Свободы.`,  
    price: '235',
    
    info: fillInfo,
};

let good2 ={
    image: "1019462187.jpg",
    name: "Властелин Колец",
    author: "Джон Толкин",
    artNo:  "141369307",
    description: `Джон Рональд Руэл Толкин - писатель, поэт, филолог, профессор Оксфордского университета, родоначальник 
                современной фэнтези. В 1937 году был написан "Хоббит", а в середине 1950-х годов увидели свет три книги 
                "Властелина колец", повествующие о Средиземье - мире, населенном представителями волшебных рас со сложной 
                культурой, историей и мифологией. Существует свыше десятка переводов трилогии на русский язык. В данное издание 
                вошел перевод В.Каррика, М.Каменкович.`,  
    price: '1055',
    info: fillInfo,
};
    
function fillInfo(goodId) {
        let goodItem = document.getElementById(goodId);    
        
        let img = document.createElement('img');
        img.setAttribute("src", this.image);
        img.style.height =  '500px';

        
        let divInfo = document.createElement('div');
        divInfo.style.display = 'flex';
        divInfo.style.margin = '40px 70px';
        divInfo.style.fontFamily = 'Playfair Display';
        
        let name = document.createElement('h2');
        name.innerHTML = this.name;
        
        
        let author = document.createElement('h3');
        author.innerHTML = this.author;
        
        
        let divText = document.createElement('div');
        divText.style.width = '70%';
        divText.style.margin = '15px 35px'
        
        let par = document.createElement('p');
        par.innerHTML ='арт. номер ' + this.artNo + '<p>' + this.description + '</p>';
        par.style.fontSize = '1rem';
    
        let price = document.createElement('p');
        price.innerHTML = this.price + ' руб.';
        price.style.fontSize = '1.7rem';
        price.style.fontWeight = 'bold';
            
        let button = document.createElement('button');
        button.innerHTML = 'в корзину';
        button.style.boxShadow = 'inset 0px 0px 10px rgba(0, 0, 0, 0.2)';
        button.style.padding = '15px';
        button.style.textTransform = 'uppercase';
        button.style.fontFamily = 'Playfair Display';
        button.style.fontWeight = 'bold';
        button.style.fontSize = '0.9rem';

        goodItem.appendChild(divInfo);
        divInfo.appendChild(img);
        divInfo.appendChild(divText);
        divText.appendChild(name);
        divText.appendChild(author);
        divText.appendChild(par);
        divText.appendChild(price);
        divText.appendChild(button);
    };