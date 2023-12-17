const allImages = [
    {
        title: "Acropolis Museum, Athens",
        image: "img/Acropolis Museum Athens.jpg",
        Location: 'Greece',
    },
    {
        title: "Apartheid Museum, Johannesburg South",
        image: "img/Apartheid Museum.jpg",
        Location: 'SouthAfrica',
    },
    {
        title: "Artipelag Museum, Stockholm",
        image: "img/Artipelag Museum Stockholm.jpg",
        Location: 'Sweden',
    },
    {
        title: "Art Science Museum, Singapore",
        image: "img/ARTSCIENCE MUSEUM singapore.jpg",
        Location: 'Singapore',
    },
    {
        title: "Austrian Gallery Belvedere, Vienna",
        image: "img/Austrian Gallery Belvedere.jpg",
        Location: 'Austria',
    },
    {
        title: "Basilica di San Lorenzo, Florence",
        image: "img/Basilica di San Lorenzo Florence.jpg",
        Location: 'Italy',
    },
    {
        title: "Basilica of Santa Maria Novella, Florence",
        image: "img/Basilica of Santa Maria Novella Florence.jpg",
        Location: 'Italy',
    },
    {
        title: "Beiveaere Museum, Vienna",
        image: "img/Beiveaere Museum Austria.jpg",
        Location: 'Austria',
    },   
    {
        title: "Magritte Museum, Brussels",
        image: "img/Belgium Magritte Museum.jpg",
        Location: 'Belgium',
    },   
    {
        title: "British Museum, London",
        image: "img/British Museum London.jpg",
        Location: 'England',
    },
    {
        title: "Caixa Forum, Barcelona",
        image: "img/CaixaForum Barcelona.jpg",
        Location: 'Spain',
    },    
    {
        title: "Can Framis Museum, Barcelona",
        image: "img/Can Framis Museum barcelona.jpg",
        Location: 'Spain',
    },    
    {
        title: "Cappelle Medicee, Florence",
        image: "img/Cappelle Medicee Florence.jpg",
        Location: 'Italy',
    },    
    {
        title: "Castel Sant’Angelo, Rome",
        image: "img/Castel Sant Angelo Rome.jpg",
        Location: 'Italy',
    },    
    {
        title: "Centre Pompidou, Paris",
        image: "img/Centre Pompidou Paris.jpg",
        Location: 'France',
    },
    {
        title: "Changi Chapel and Museum, Singapore",
        image: "img/Changi Chapel and Museum Singapore.jpg",
        Location: 'Singapore',
    },
    {
        title: "Chengdu Art Museum, ChengDu",
        image: "img/chengdu art museum.jpg",
        Location: 'China',
    },
    {
        title: "Chichu Art Museum Naoshima, Naoshima",
        image: "img/Chichu Art Museum Naoshima.jpg",
        Location: 'Japan',
    },
    {
        title: "China art museum, Shanghai",
        image: "img/China art museum.jpg",
        Location: 'China',
    },
    {
        title: "China Comic & Animation Museum, Hangzhou",
        image: "img/China Comic & Animation Museum.jpg",
        Location: 'China',
    },
    {
        title: "Edo Tokyo Museum, Tokyo",
        image: "img/edo tokyo museum.jpg",
        Location: 'Japan',
    },
    {
        title: "Everson Museum of Art, New York",
        image: "img/Everson Museum of Art in NY.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Tianjin Exploratorium Museum, Tianjin",
        image: "img/exploratorium-museum-tianjin.jpg",
        Location: 'China',
    },
    {
        title: "Field Museum of Natural History Chicago, Chicago",
        image: "img/Field Museum of Natural History Chicago.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Fondation Louis Vuitton, Paris",
        image: "img/Fondation Louis Vuitton Paris.jpg",
        Location: 'France',
    },
    {
        title: "Gaudí House Museum, Barcelona",
        image: "img/Gaudí House Museum Barcelona.jpg",
        Location: 'France',
    },
    {
        title: "Guggenheim Museum, Boston",
        image: "img/Guggenheim.JPG",
        Location: 'UnitedStates',
    },
    {
        title: "Hamburger Kunsthalle, Hamburg",
        image: "img/Hamburger Kunsthalle Germany.jpg",
        Location: 'Germany',
    },
    {
        title: "History of Natural Museum, New York",
        image: "img/History of Natural Museum.JPG",
        Location: 'UnitedStates',
    },
    {
        title: "Institute of Contemporary Art, Boston",
        image: "img/Institute of Contemporary Art in Boston.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Isabella Stewart Gardner Museum, Boston",
        image: "img/Isabella Stewart Gardner Museum in Boston.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Joan Miró Foundation, Barcelona",
        image: "img/Joan Miró Foundation Barcelona.jpg",
        Location: 'Spain',
    },
    {
        title: "Kofukuji National Museum, Nara",
        image: "img/Kofukuji National Museum.jpg",
        Location: 'Japan',
    },
    {
        title: "Kyushu National museums, Dazaifu",
        image: "img/Kyushu National museums.jpg",
        Location: 'Japan',
    },
    {
        title: "Louvre Museum, Paris",
        image: "img/Louvre.jpg",
        Location: 'France',
    },
    {
        title: "Lucas Museum, Chicago",
        image: "img/lucas-museum-chicago.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Magazzino Italian Art, New York",
        image: "img/Magazzino Italian Art.JPG",
        Location: 'UnitedStates',
    },
    {
        title: "Menil Collection Museum, Houston",
        image: "img/Menil Collection Museum.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "MET, The Metropolitan Museum of Art, New York",
        image: "img/MET.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Miho Museum, Koka",
        image: "img/MIHO MUSEUM in japan.jpg",
        Location: 'Japan',
    },
    {
        title: "Mogrgan Library, New York",
        image: "img/Mogrgan Library.JPG",
        Location: 'UnitedStates',
    },    
    {
        title: "Mozart’s Birthplace Museum, Salzburg",
        image: "img/Mozart’s Birthplace Museum Austria.jpg",
        Location: 'Austria',
    },    
    {
        title: "Museo de' Medici, Florence",
        image: "img/Museo de' MediciFlorence.jpg",
        Location: 'Italy',
    },    
    {
        title: "Museo Nazionale Romano, Rome",
        image: "img/Museo Nazionale Romano Rome.jpg",
        Location: 'Italy',
    },
    {
        title: "Museu Nacional d'Art de Catalunya, Madrid",
        image: "img/Museo Reina Sofia in Madrid.jpg",
        Location: 'Spain',
    },
    {
        title: "Museu Nacional d'Art de Catalunya, Barcelona",
        image: "img/Museu Nacional d'Art de Catalunya Barcelona.jpg",
        Location: 'Spain',
    },
    {
        title: "Museum of Natural Sciences, Barcelona",
        image: "img/Museum of Natural Sciences of Barcelona.jpg",
        Location: 'Spain',
    },
    {
        title: "Royal Tombs Of Sipan Museum, Lambayeque,",
        image: "img/Museum of the Royal Tombs of Sipán in Chiclayo.jpg",
        Location: 'Peru',
    },
    {
        title: "Musée d'Orsay, Paris",
        image: "img/Musée d'Orsay Paris.jpg",
        Location: 'France',
    },
    {
        title: "Musée de l'Orangerie, Paris",
        image: "img/Musée de l'Orangerie Paris.jpg",
        Location: 'France',
    },
    {
        title: "Musée Marmottan Monet, Paris",
        image: "img/Musée Marmottan Monet Paris.jpg",
        Location: 'France',
    },
    {
        title: "Musée Rodin, Paris",
        image: "img/Musée Rodin Paris.jpg",
        Location: 'France',
    },
    {
        title: "National Etruscan Museum of Villa Giulia, Rome",
        image: "img/National Etruscan Museum of Villa Giulia Rome.jpg",
        Location: 'Italy',
    },
    {
        title: "National Folk Museum, Seoul",
        image: "img/National Folk Museum of Korea .jpg",
        Location: 'Korea',
    },
    {
        title: "National Gallery, London",
        image: "img/National Gallery London.jpg",
        Location: 'England',
    },
    {
        title: "National Maritime Museum, Tianjin",
        image: "img/National Maritime Museum in Tianjin, China.jpg",
        Location: 'China',
    },
    {
        title: "National Museum, Stockholm",
        image: "img/National Museum in Sweden.jpg",
        Location: 'Sweden',
    },
    {
        title: "National Museum of 21st Century Art, Rome",
        image: "img/National Museum of 21st Century Art in Rome.jpg",
        Location: 'Italy',
    },
    {
        title: "National Museum of Singapore, Singapore",
        image: "img/National Museum of Singapore.jpg",
        Location: 'Singapore',
    },
    {
        title: "National Museum of African American History and Culture, Washington D.C.",
        image: "img/National Museum of African American History and Culture DC.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "National Museum of Korea, Seoul",
        image: "img/National Museum of Korea.jpg",
        Location: 'Korea',
    },
    {
        title: "National Museum of Singapore, Singapore",
        image: "img/National Museum of Singapore.jpg",
        Location: 'Singapore',
    },
    {
        title: "National Museum of the American Indian, Washington D.C.",
        image: "img/National Museum of the American Indian DC.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "National Palace Museum of Korea, Seoul",
        image: "img/National Palace Museum of Korea.jpg",
        Location: 'Korea',
    },
    {
        title: "Natural History Museum, London",
        image: "img/Natural History Museum England.jpg",
        Location: 'England',
    },
    {
        title: "New Museum, New York",
        image: "img/New Museum in NYC.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Nezu Museum, Tokyo",
        image: "img/Nezu Museum.jpg",
        Location: 'Japan',
    },
    {
        title: "Nordic Museum,  Stockholm",
        image: "img/Nordic Museum Sweden.jpg",
        Location: 'Sweden',
    },
    {
        title: "Omiya Bonsai Museum, Saitama",
        image: "img/Omiya-Bonsai-Museum.jpg",
        Location: 'Japan',
    },
    {
        title: "Ordos Museum, Inner Mongolia",
        image: "img/Ordos Museum in China.jpg",
        Location: 'China',
    },
    {
        title: "Palais de Tokyo, Paris",
        image: "img/Palais de Tokyo Paris.jpg",
        Location: 'France',
    },
    {
        title: "Palazzo Vecchio, Florence",
        image: "img/Palazzo Vecchio Florence.jpg",
        Location: 'Italy',
    },
    {
        title: "Perez Art Museum, Florida",
        image: "img/Perez Art Museum.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Petit Palais, Paris",
        image: "img/Petit Palais Paris.jpg",
        Location: 'France',
    },
    {
        title: "Pitti Palace, Florence",
        image: "img/Pitti Palace Florence.jpg",
        Location: 'Italy',
    },
    {
        title: "Prado National Museum, Madrid",
        image: "img/Prado National Museum Madrid.jpg",
        Location: 'Spain',
    },
    {
        title: "Red Dot Design Museum, Singapore",
        image: "img/RED DOT DESIGN MUSEUM SINGAPORE.jpg",
        Location: 'Singapore',
    },
    {
        title: "Rijks Museum, Amsterdam",
        image: "img/Rijksmuseum Amsterdam.jpg",
        Location: 'Netherlands',
    },
    {
        title: "Ringling Museum, Florida",
        image: "img/Ringling Museum.jpg",
        Location: 'UnitedStates',
    },
    {
        title: "Science Center, Macau",
        image: "img/Science-Center-Macau.jpg",
        Location: 'China',
    },
    {
        title: "Shanghai Museum, Shanghai",
        image: "img/Shanghai_Museum_exterior_1.jpg",
        Location: 'China',
    },
    {
        title: "Sigmund Freud Museum, Vienna",
        image: "img/Sigmund Freud Museum Vienna.jpg",
        Location: 'Austria',
    },
    {
        title: "Stedelijk Museum, Amsterdam",
        image: "img/Stedelijk Museum Amsterdam.jpg",
        Location: 'Netherlands',
    },
    {
        title: "Sumida Hokusai Museum, Tokyo",
        image: "img/Sumida Hokusai Museum, Tokyo.jpg",
        Location: 'Japan',
    },
    {
        title: "Sun Yat Sen Nanyang Memorial Hall, Singapore",
        image: "img/Sun Yat Sen Nanyang Memorial Hall Singapore.jpg",
        Location: 'Singapore',
    },
    {
        title: "Suzhou Museum, Suzhou",
        image: "img/Suzhou Museum.jpg",
        Location: 'China',
    },
    {
        title: "Tate Britain, London",
        image: "img/Tate Britain London.jpg",
        Location: 'England',
    },
    {
        title: "The Museu de Arte de São Paulo, São Paulo",
        image: "img/The Museu de Arte de São Paulo.jpg",
        Location: 'Brazil',
    },
    {
        title: "The National Art Center in Tokyo, Tokyo",
        image: "img/The National Art Center in Tokyo.jpg",
        Location: 'Japan',
    },
    {
        title: "The National Maritime Museum, London",
        image: "img/The National Maritime Museum London.jpg",
        Location: 'England',
    },    
    {
        title: "The Palace Museum in the Forbidden City, Beijing",
        image: "img/The Palace Museum in the Forbidden City, Beijing.jpg",
        Location: 'China',
    },
    {
        title: "The Otsuka Museum of Art, Naruto",
        image: "img/The_Otsuka_Museum_of_Art Japan.jpg",
        Location: 'Japan',
    },
    {
        title: "Toyota Municipal Museum of Art, Toyota",
        image: "img/Toyota Municipal Museum of Art, Aichi.jpg",
        Location: 'Japan',
    },
    {
        title: "Uffizi Gallery, Florence",
        image: "img/Uffizi Gallery Florence.jpg",
        Location: 'Italy',
    },
    {
        title: "Va Gogh Museum, Amsterdam",
        image: "img/Va Gogh Museum Amsterdam.jpg",
        Location: 'Netherlands',
    },
    {
        title: "Vasa Museum, Stockholm",
        image: "img/vasa-museum-Stockholm, Sweden.jpg",
        Location: 'Sweden',
    },
    {
        title: "Victoria and Albert Museum, London",
        image: "img/Victoria and Albert Museum london.jpg",
        Location: 'England',
    },
    {
        title: "Villa Farnesina, Rome",
        image: "img/Villa Farnesina Rome.jpg",
        Location: 'Italy',
    },
    {
        title: "Vintage Camera Museum,Singapore",
        image: "img/Vintage Camera Museum.jpg",
        Location: 'Singapore',
    },
    {
        title: "Wien Museum Beethoven Museum, Vienna",
        image: "img/Wien Museum Beethoven Museum-Austria.jpg",
        Location: 'Austria',
    },
];

function filteredCategory (category) {
let imagesToHTML = '';

allImages.forEach(
    function (imgObj, index) {
        if (!category || imgObj.Location === category) {
            imagesToHTML = imagesToHTML + 
          `
          <figure class="item item--${index}">
            <img class="clip-square" src="${imgObj.image}">
            <figcaption><h4><p>${imgObj.title}</p></h4></figcaption> 
          </figure>
        `;
        }
    }
  );
  
  document.querySelectorAll(`.category li`).forEach(function (el) {
    el.classList.remove('active');
  });
 
  if(category){
    document.querySelector(`.M-${category}`).classList.add('active');
  }

  console.log(imagesToHTML);
  
  document.querySelector('.grid-container').innerHTML = imagesToHTML;
}  

filteredCategory();
  
