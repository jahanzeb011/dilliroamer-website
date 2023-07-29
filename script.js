document.addEventListener('DOMContentLoaded', function () {
  var userInput = document.getElementById('user-input');
  var chatHistory = document.getElementById('chat-history');
  var sendButton = document.getElementById('sendButton');
  var clickcount = 0;
  var userResponse;
  

  const utterance = new SpeechSynthesisUtterance("Hi, I am DilliRoamer. Select the following mode by typing one of them: Fooding,  Shopping, Travelling.");
  speechSynthesis.speak(utterance);

  userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      handleUserInput();
      clickcount++;
    }
  });

  sendButton.addEventListener('click', function () {

    handleUserInput();
    clickcount++;


  });

  function handleUserInput() {
    var message = userInput.value.trim();
    if (message !== '') {
      displayUserMessage(message);
      message = message.replace(/\s/g, "");
      console.log(message)
      message = message.toLowerCase();
      getBotResponse(message);
      userInput.value = '';

    }
    else{
      clickcount--;
    }
  }

  function displayUserMessage(message) {
    var messageElement = createMessageElement(message, 'user-message');
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function displayBotMessage(message) {
    var messageElement = createMessageElement(message, 'bot-message');
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function createMessageElement(message, className) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message', className);
    var messageText = document.createElement('span');
    messageText.classList.add('message-text');
    messageText.textContent = message;
    messageContainer.appendChild(messageText);
    return messageContainer;
  }
  function removePunctuation(inputString) {
    // Regular expression to match punctuations
    var punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    // Remove punctuations using the regex
    var cleanedString = inputString.replace(punctuationRegex, '');
    return cleanedString;

  }


  function getBotResponse(message) {
    var response;
    var speech = 'here\'s result for your response.';
    message = removePunctuation(message);
    if (clickcount > 0) {
      switch (message) {
        case "hello":
          response = 'Hello! How can I help you?';
          break;

        case "howareyou":
          response = 'I am a bot. I do not have feelings.';
          break;

        case "thankyou":
          response = 'You\'re welcome!';
          break;

        case "whocreatedyou":
          response = 'I was created by Jahanzeb on 3rd July, 2023.';
          break;

        case "whatsyourname":
        case "whatisyourname":
          response = 'My Name is Mr. Robot.';
          break;

        case "tellmethetime":
        case "whatsthetime":
        case "whatisthetime":

          // Create a Date object for the current time
          var currentTime = new Date();

          // Set the options for formatting the time
          var options = {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          };

          // Format the time in IST
          var istTime = currentTime.toLocaleString('en-IN', options);

          // Display the IST time
          console.log("Current time in IST: " + istTime);
          response = ('Current time in India is ' + istTime);
          break;

        case "tellmetodaysdate":
        case "whatstodaysdate":
        case "whatistodaysdate":

          // Get current date in India
          const currentDate = new Date().toLocaleDateString('en-IN');

          // Display current date
          console.log('Current date in India: ' + currentDate);
          response = 'Todays date is ' + currentDate;
          break;

        case "historicalmonument":
        case "monuments":
        case "historicalmonuments":
        case "monument":
          var response1 = `UNESCO WORLD HERITAGE SITES: 
          Qutub Minar, Red Fort (Lal Qila), Humayun's Tomb.`;

          var response2 = `MUGHAL ARCHITECTURE: 
          Jama Masjid, Safdarjung's Tomb, Purana Qila (Old Fort).`;

          var response3 = `BRITISH COLONIAL ERA: 
          India Gate, Rashtrapati Bhavan.`;

          var response4 = `SUFI SHRINES: 
          Nizamuddin Dargah, Chhota Imambara.`;

          response = `MODERN ARCHITECTURE: 
          Lotus Temple, Akshardham Temple.`;

          displayBotMessage(response1);
          displayBotMessage(response2);
          displayBotMessage(response3);
          displayBotMessage(response4);
          break;



        case "mensclothing":
        case "shirts":
        case "mensshirts":
        case "shirt":
        case "shirtsformen":
        case "shirtformens":
        case "shirtsformens":
        case "shirtformen":
        case "menshirt":
        case "menshirts":
        case "mensshirts":
        case "mensjeans":
        case "menjeans":
        case "jeansformens":
        case "jeansformen":
        case "trousers":
        case "jeans":
        case "trouser":
        case "lower":
        case "lowers":
        case "trousersformens":
        case "menstrouser":
        case "mentrousers":
        case "menslowers":
        case "menslower":
        case "trackpant":
        case "menstrackpant":
        case "trackpants":
        case "tshirts":
        case "normaltshirts":
        case "tshirt":
        case "menstshirt":
        case "menstshirts":
        case "tshirtsformen":
        case "tshirtsformens":
        case "mentshirts":
        case "mentshirt":
        case "tshirtmen":
        case "tshirtmens":
        case "shirtsmens":
        case "shirtmen":
        case "shirtsmen":
        case "tshirtsmen":
        case "tshirtsmens":
        case "pants":
        case "menspants":
        case "pantsformen":
        case "pantsmen":
        case "menpants":
        case "menspant":
        case "pantformen":
        case "pantsformens":
        case "baggytshirts":
        case "oversizedtshirts":
        case "oversizedtshirt":
        case "baggytshirt":
        case "cargo":
        case "menscargo":
        case "cargoformens":
        case "cargomens":
        case "cargosformen":
        case "cargos":
        case "cargomen":
        case "cargopants":
        case "cargopant":
        case "cargopantsformens":
        case "menscargopants":
        case "cargopantsformen":
        case "boyscargopants":

          var response1 = `BUDGET-FRIENDLY OPTIONS:

                      Janpath Market,
                      Sarojini Nagar Market,
                      Lajpat Nagar Market,
                      Kamla Nagar Market,
                      Palika Bazaar.`;

          var response2 = `MID-RANGE OPTIONS:
            
                      Connaught Place,
                      Karol Bagh,
                      South Extension,
                      Rajouri Garden Market,
                      Dilli Haat. `;

          response = `UPSCALE and LUXURY OPTIONS:
            
                      Khan Market,
                      DLF Emporio (Vasant Kunj),
                      Select Citywalk Mall (Saket),
                      Emporio Mall (Vasant Kunj),
                      Ambience Mall (Vasant Kunj/Gurugram).`;

                      displayBotMessage(response1);
                      displayBotMessage(response2);

          break;


        case "animetshirts":
        case "animetshirt":
        case "tshirtsanime":
        case "tshirtsanime":
        case "animeshirts":
        case "animeshirt":

          var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Janpath Market, Palika Bazaar.`;
          
         var response2 = `MID-RANGE OPTIONS:
          Kamla Nagar Market, Rajouri Garden Market, South Extension Market.`;
          
         response = `UPSCALE OPTIONS:
          Khan Market, DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket).`;

          displayBotMessage(response1);
          displayBotMessage(response2);

          break;

          case "animemerchs":
        case "animemerch":
        case "animemerchandise":
        case "animemerchandises":
        case "animeaccessories":
        case "animeaccessory":

       var response1 = `BUDGET-FRIENDLY OPTIONS:
         Sarojini Nagar Market, Janpath Market, Palika Bazaar, Kamla Nagar Market.`;
        
       var response2 = `MID-RANGE OPTIONS:
         Rajouri Garden Market, South Extension Market, Hudson Lane (Near Delhi University North Campus).`;
        
       response = `UPSCALE OPTIONS:
         Khan Market, DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket).`;

         displayBotMessage(response1);
         displayBotMessage(response2);

         break;


         case "shoes":
          case "menshoes":
          case "mensshoes":
          case "shoesformen":
          case "shoesformens":
          case "footwear":
          case "mensfootwear":
          case "footwearformen":
          case "footwearformens":
          case "menfootwear":
          case "footwearmens":
          case "footwearmen":
          case "shoesmens":
          case "shoesmen":
          case "shoe":
          case "formalshoes":
          case "formalshoe":
          case "mensformalshoes":
          case "formalshoesformen":
          case "formalshoesmen":
          case "formalshoesformens":
          case "formalshoesmens":
          case "boyssneakers":
          case "sneakers":
          case "sneaker":

         var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Palika Bazaar, Kamla Nagar Market, Lajpat Nagar Market.`;
         
         var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, Rajouri Garden Market, South Extension Market, Janpath Market.`;
         
         response = `UPSCALE OPTIONS:
          Khan Market, DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket), Ambience Mall (Vasant Kunj/Gurugram).`;

          displayBotMessage(response1);
          displayBotMessage(response2);
          break;

          case "mensaccessories":
          case "menaccessories":
          case "accessoriesformen":
          case "accessoriesformens":
          case "accessoriesmens":
          case "accessoriesmen":
          case "ringsformen":
          case "mensrings":
          case "menrings":
          case "mensring":
          case "braceletmens":
          case "braceletmen":
          case "braceletformens":
          case "braceletformen":
          case "wristband":
          case "locket":
          case "chain":
          case "chains":
          case "lockets":
          case "wristbands":
          case "bracelet":
          case "bracelets":
          case "ring":
          case "rings":
          case "braceletsmens":
          case "mensbracelet":
          case "mensbracelets":
          case "bracletsformen":
          case "hat":
          case "hats":
          case "caps":
          case "cap":
          case "wallet":
          case "menswallet":


         var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Palika Bazaar, Janpath Market, Lajpat Nagar Market.`;
         
        var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, Rajouri Garden Market, South Extension Market, Kamla Nagar Market.`;
         
        response = `UPSCALE OPTIONS:
          Khan Market, DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket), Ambience Mall (Vasant Kunj/Gurugram).`;

          displayBotMessage(response1);
          displayBotMessage(response2);

         break;

         case "jacket":
          case "jackets":
          case "jacketsformen":
          case "jacketformens":
          case "mensjacket":
          case "jacketformen":
          case "winterjacket":
          case "winterjackets":
          case "boysjacket":
          case "boysjackets":
          case "jacketsforboys":
          case "jacketboys":
          case "jacketsboys":
          case "boyshoodies":
          case "boyshoody":
          case "menshoody":
          case "menshoodies":
          case "hoodies":
          case "hoodiesformen":
          case "hoody":
          case "winterwear":
          case "winterwears":
          case "hoodiesmen":
          case "hoodymen":
          case "hoodymens":
          case "hoodiesmens":
          case "coat":
          case "blazer":
          case "blazers":
          case "coats":
          case "sweater":
          case "sweaters":
          case "boyssweater":
          case "menssweater":
          case "menssweaters":
          case "sweaterformens":
          case "sweatersformens":
          case "sweatersformen":
          case "sweaterforboys":
          case "sweatersforboys":
          case "menscoat":
          case "mensblazer":
          case "sweatshirts":
          case "sweatshirt":
          case "menssweatshirts":
          case "menssweatshirt":
          case "stole":
          case "stoles":
          case "ladiesstole":
          case "ladiesstoles":
          
         var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Palika Bazaar, Janpath Market.`;
         
         var response2 = `MID-RANGE OPTIONS:
          Lajpat Nagar Market, Kamla Nagar Market.`;
         
          response = `UPSCALE OPTIONS:
          DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket).`;

          displayBotMessage(response1);
          displayBotMessage(response2);

          break;

          case "traditionalwearmens":
          case "menstradionals":
          case "menstraditional":
          case "menstraditionalwear":
          case "traditionalwearformens":
          case "sherwani":
          case "sherwanis":
          case "kurta":
          case "kurtas":
          case "designerkurtas":
          case "menskurta":
          case "menskurtas":
          case "boyskurta":
          case "kurtapyjama":
          case "kurtapyjamas":
          case "nagra":
          case "naagra":
          case "naagrajoota":
          case "nagrajoota":
          case "naagrashoes":
          case "menssherwani":
          case "menssuits":
          case "menssuit":
          case "mensformals":
          case "mensformalsuit":
          
        var response1 =
         `BUDGET-FRIENDLY OPTIONS:
          Chandni Chowk, Lajpat Rai Market, Sunder Nagar Market.`;
          
         var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, South Extension Market, Dilli Haat.`;
          
          response = `UPSCALE OPTIONS:
          Khan Market, Meherchand Market, Designer Boutiques in Hauz Khas Village, Emporio Mall.`;

          displayBotMessage(response1);
          displayBotMessage(response2);

          break;

          case "skirt":
          case "skirts":
          case "croptop":
          case "croptops":
          case "plazo":
          case "plazos":
          case "girlstshirt":
          case "girlstshirts":
          case "girlsdress":
          case "girlsdresses":
          case "tops":
          case "girlstops":
          case "blouse":
          case "tanktops":
          case "girlsjeans":
          case "jeansforgirls":
          case "jeansgirls":
          case "girljeans":
          case "femalesjeans":
          case "femalejeans":
          case "womensjeans":
          case "jeansforwomen":
          case "jeanswomen":
          case "jeanswomen":
          case "legging":
          case "leggings":
          case "girlstrousers":
          case "womenstrousers":
          case "trouserforgirls":
          case "trousersforgirls":
          case "womenstrouser":
          case "trousersforwomen":
          case "trouserforwomen":
          case "trousersforwomens":
          case "pyjamas":
          case "pyjama":
          case "girlspyjamas":
          case "pyjamaforgirls":
          case "shrugs":
          case "shrug":
          case "shorts":
          case "shortforgirls":
          case "girlsshorts":
          case "girlsshirts":
          case "girlsshirt":
          case "shirtsforgirls":
          
         var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Janpath Market, Lajpat Nagar Market.`;
         
        var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, Kamla Nagar Market, South Extension Market.`;
         
         response = `UPSCALE OPTIONS:
         DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket), Emporio Mall.`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         break;


          case "traditionalweargirls":
          case "girlstradionals":
          case "girlstraditional":
          case "girlstraditionalwear":
          case "traditionalwearforgirls":
          case "traditionalsforwomen":
          case "traditionalwearforwomen":
          case "womenstraditionals":
          case "womenstraditionalwear":
          case "kurti":
          case "dupatta":
          case "dupattas":
          case "abaya":
          case "abayas":
          case "naqaab":
          case "burkha":
          case "burkhas":
          case "hijab":
          case "hijaab":
          case "hijaabs":
          case "scarf":
          case "scarfs":
          case "abaaya":
          case "kurtis":
          case "salwarkameez":
          case "salwaarkameez":
          case "lehenga":
          case "lehengacholi":
          case "anarkali":
          case "anarkalisuit":
          case "anaarkali":
          case "anaarkalisuit":
          case "saare":
          case "saarees":
          case "saree":
          case "sarees":
          case "ghaagra":
          case "ghaagracholi":
          case "ghagra":
          case "ghagracholi":
          case "girlskurta":
          case "girlskurtas":
          case "womenskurta":
          case "sharara":
          case "garara":
          case "shararaa":
          case "gararaa":
          case "gown":
          case "gaun":
          case "gawn":
          case "patialadress":
          case "patialasalwaarkameez":
          case "suit":
          case "suitforgirls":
          case "womenssuits":
          case "suits":
          case "girlssuits":
          case "girlssuit":
          case "churidarsuit":
          case "churidaarsuit":
          case "churidaarsuits":
          case "chooridarsuit":
          case "chooridarsuits":
          case "churidarsuits":

          var response1 = `BUDGET-FRIENDLY OPTIONS:
          Chandni Chowk, Lajpat Rai Market, Sarojini Nagar Market.`;
          
          var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, South Extension Market, Kamla Nagar Market.`;
          
          response = `UPSCALE OPTIONS:
          Khan Market, Meherchand Market, Dilli Haat, Emporio Mall.`;

          displayBotMessage(response1);
          displayBotMessage(response2);

          break;


          case "ladiesfootwear":
          case "ladiesfootwears":
          case "girlsfootwears":
          case "girlsfootwear":
          case "girlsshoes":
          case "ladiesshoes":
          case "womensfootwear":
          case "womensfootwears":
          case "ladiessandals":
          case "girlssandals":
          case "sandal":
          case "sandals":
          case "girlssandal":
          case "ladiessandal":
          case "jooti":
          case "jootis":
          case "ladiesjooti":
          case "ladiessneakers":
          case "sneakersforgirls":
          case "girlssneakers":
          case "heels":
          case "heel":
          case "heelsandals":
          case "heelssandals":
          case "heelsandal":
          case "kolhapurichappals":
          case "kolhapurichappal":
          case "jutti":
          case "punjabijutti":
          case "ladiesslippers":
          case "ladiesslipper":
          case "girlsslippers":
          case "girlsslipper":
          case "boots":
          case "ladiesboots":
          case "girlsboots":
          case "highheels":
          case "highheel":

         var response1 = `BUDGET-FRIENDLY OPTIONS:
          Sarojini Nagar Market, Janpath Market, PaharGanj Market.`;
         
         var response2 = `MID-RANGE OPTIONS:
          Karol Bagh Market, Kamla Nagar Market, Lajpat Nagar Market.`;
         
         response = `UPSCALE OPTIONS:
         DLF Emporio and DLF Promenade (Vasant Kunj), Select Citywalk Mall (Saket), Emporio Mall.`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         break;


         case "books":
         case "book":
         case "novel":
         case "novels":
         case "manga":
         case "maanga":
         case "maangas":
         case "mangas":
         case "storybook":
         case "storybooks":
         case "educationalbook":
         case "educationalbooks":
         case "childrensbook":
         case "childrensbooks":

         response = `Khan Market, Daryaganj Sunday Book Market, Connaught Place (CP), South Extension, Nai Sarak, Blossom Book House (in N Block, Greater Kailash 1), Modern Book Depot (in Paharganj), Midland Bookshop (Janpath), Bahrisons Booksellers (Saket).`;
         break;


         case "electronics":
         case "electronicaccessories":
         case "electronicsaccessories":
         case "mobile":
         case "mobiles":
         case "mobilephone":
         case "mobilephones":
         case "headphone":
         case "headphones":
         case "laptop":
         case "laptops":
         case "computeraccessories":
         case "computer":
         case "pc":
         case "computers":
         case "keyboard":
         case "keyboards":
         case "mouse":
         case "wirelessmouse":
         case "wirelesskeyboard":
         case "wirelesskeyboards":
         case "speakers":
         case "speaker":
         case "bluetooth":
         case "wirelessspeakers":
         case "bluetooths":
         case "bluetoothspeaker":
         case "mobiledisplay":
         case "displays":
         case "display":
         case "mobilesdisplay":
         case "laptopsdisplay":
         case "pcsdisplay":
         case "laptopdisplay":
         case "pcdisplay":
         case "computersdisplay":
         case "computersdisplay":
         case "earphone":
         case "earphones":
         case "earbuds":
         case "earpods":
         case "eardops":
         case "earpod":
         case "watch":
         case "watches":
         case "wristwatch":
         case "wristwatches":
         case "smartwatches":
         case "smartwatch":
         case "clock":
         case "clocks":
         case "electronicappliances":

        var response1 = `LOW TO MID-RANGE BUDGET:
         Nehru Place, Gaffar Market (Karol Bagh), Palika Bazaar (Connaught Place).`;
         
         response = `MID TO HIGH-RANGE BUDGET:
         Croma and Reliance Digital, Pacific Mall (Tagore Garden) and DLF Promenade (Vasant Kunj), Apple Premium Resellers.`;

         displayBotMessage(response1);
         
         break;

         case "bags":
         case "travelbags":
         case "bag":
         case "travelbag":
         case "schoolbag":
         case "schoolbags":
         case "suitcase":
         case "suitcases":
         case "collegebag":
         case "collegebags":
         case "officebag":
         case "officebags":
         case "handbag":
         case "handbags":

         var response1 = `BUDGET-FRIENDLY OPTIONS:
         Sarojini Nagar Market, Janpath Market.`;

         var response2 = `MID-RANGE OPTIONS: 
         Lajpat Nagar Central Market, Kamla Nagar Market.`;

         var response3 = `High-End Options:
         DLF Promenade Mall, Vasant Kunj, Select Citywalk Mall, Saket.`;

          response = `Specialized Stores: 
         Connaught Place, Dilli Haat,INA.`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         displayBotMessage(response3);

         break;

         case "cosmetics":
         case "ladiescosmetics":
         case "earrings":
         case "ladiesbracelet":
         case "ladiesbracelet":
         case "bangles":
         case "bangle":
         case "perfume":
         case "perfumes":
         case "ladiesperfumes":
         case "ladiesperfume":
         case "lipstick":
         case "lipsticks":
         case "makeupaccessories":
         case "ladiesaccessories":
         case "ladieswatch":
         case "necklace":
         case "headdband":
         case "lipgloss":
         case "mascara":
         case "kajal":
         case "clutch":
         case "purse":
         case "purse":
         case "ladieshandbag":
         case "ladieshandbags":
         case "ladiespurse":
         case "ladieswallet":

         var response1 = `BUDGET-FRIENDLY OPTIONS:
         Sarojini Nagar Market, Lajpat Nagar Central Market.`;

         var response2 = `MID-RANGE OPTIONS: 
         Janpath Market, Kamla Nagar Market.`;

         response = `High-End Options:
         DLF Emporio, DLF Promenade Mall(Vasant Kunj), Select Citywalk Mall, Saket, Khan Market.`;

         displayBotMessage(response1);
         displayBotMessage(response2);

         break;


         case "adventurous":
         case "adventurousplace":
         case "adventurousplaces":

         var response1 = `BUDGET-FRIENDLY ADVENTURE: 
         Indian Mountaineering Foundation (IMF), Adventure Island, Scary House(Kamla Nagar), Cycling Tours.`;

         var response2 = `MID-RANGE ADVENTURE: 
         Lazer Crazer(Hauz Khas), Go Karting(Gurugram), Paintball(Pacific Mall), Segway Tour, Delhi Eye (Kalindi Kunj Park), Museum Of Illusion(Connaught Place), Amusement Parks.`;

         response = `HIGHER BUDGET ADVENTURE: 
         Paragliding(Gururgram), Ziplining(Neemrana Palace), Bungee Jumping(Sainik Farm), Hot air balloon ride(Noida).`;

         displayBotMessage(response1);
         displayBotMessage(response2);

         break;

         case "parks":
         case "park":
         case "childrenspark":
         case "childrenpark":
         case "amusementpark":
         case "amusementparks": 

         var response1 = `FREE OR LOW-COST PARKS:
         India Gate Lawns, Nehru Park,  Dilli Haat.`;

         var response2 = `MID-RANGE PARKS: 
         Adventure Island(Rohini), Kalindi Kunj Park.`;

         response = `HIGH-END PARKS: 
         World of Wonder(Noida), Appu Ghar(Gurugram).`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         break;

         case "peacefulplaces":
         case "peacefulplace":
         case "peacefullplaces":
         case "peacefullplace":
         case "peacefullplaceswithniceview":
         case "peacefulplaceswithniceview":
         case "peacefulplaceswithniceviews":
         case "peacefullplacewithniceviews":
         case "peacefullplaceswithniceviews":
         case "peacefullplacewithniceview":
         case "peacefulplacewithniceview":
         
         response = `Lodhi Gardens, Garden of Five Senses, Deer Park(Hauz Khas), Nehru Park, Sanjay Van, Japanese Park(Rohini), Rose Garden(Chanakyapuri), Mughal Gardens(Seasonal).`;

         break;

         case "streetfood":
         case "streetfoods":

         var response1 = `LOW BUDGET: 
         Chandni Chowk, Paharganj, Connaught Place.`;

         var response2 = `MID-RANGE: 
         Rajinder Da Dhaba (Safdarjung Enclave), Jama Masjid area (Karim's, Al Jawahar), Saravana Bhavan (Connaught Place), Lajpat Nagar.`;

         var response3 = `MID TO HIGH RANGE: 
         Khan Market, Hauz Khas Village.`;

         response = `HIGH-END:
         Indian Accent (The Lodhi, Lodhi Road), Bukhara (ITC Maurya, Sardar Patel Marg), Wasabi by Morimoto (Taj Mahal Hotel, Mansingh Road), Dum Pukht (ITC Maurya, Sardar Patel Marg).`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         displayBotMessage(response3);
         break;

         case "restaurant":
         case "restaurants":
         case "restraunts":
         case "restraunt":

         var response1 = `LOW TO MID-RANGE BUDGET:
         Saravana Bhavan (Connaught Place), Kake Da Hotel (Connaught Place), Majnu ka Tilla Tibetan Colony, Rajinder Da Dhaba (Safdarjung Enclave).`;

         var response2 = `MID-RANGE BUDGET:
         Social, Farzi Cafe (Connaught Place and Cyber Hub), Dhaba by Claridges (Saket and Cyber Hub), SodaBottleOpenerWala (Khan Market and Cyber Hub).`;

         response = `HIGH-END BUDGET:
         Indian Accent (The Lodhi, Lodhi Road), Bukhara (ITC Maurya, Sardar Patel Marg), Wasabi by Morimoto (Taj Mahal Hotel, Mansingh Road), Dum Pukht (ITC Maurya, Sardar Patel Marg).`;

         displayBotMessage(response1);
         displayBotMessage(response2);

         break;

         case "cafesandbakery":
         case "cafesandbakeries":
         case "cafes":
         case "cafe":
         case "bakery":
         case "bakeries":
         case "bakeriesandcafes":
         case "bakeryandcafes":
         case "bakeryandcafe":
         case "bakeriesandcafes":
         case "cafeandbakery": 
         case "cafeandbakeries":

         var response1 = `LOW TO MID-RANGE BUDGET:
         The Big Chill Cafe (Multiple Locations), Elma's Bakery, Bar, and Kitchen (Hauz Khas Village), Diggin (Anand Lok and Chanakyapuri), Cha Bar (Connaught Place).`;

         var response2 = `MID-RANGE BUDGET: 
         Social (Multiple Locations), Cafe Lota (Pragati Maidan), Rose Cafe (Saket), Amour Bistro (Malcha Marg).`;

         response = `HIGH-END BUDGET:
         Lavaash by Saby (Mehrauli), Olive Bar & Kitchen (Mehrauli), Sakley's The Mountain Cafe (GK-1), Artusi Ristorante e Bar (Greater Kailash 2).`;

         displayBotMessage(response1);
         displayBotMessage(response2);
         break;

         case "delhispecial":
         case "delhispecials":
         case "delhispecialfooding":

         response = `Paranthe Wali Gali(Chandni Chowk), Karim's(Jama Masjid), Kuremal Mohan Lal Kulfi Wale, Pandara Road, Lajpat Nagar Central Market, Natraj Dahi Bhalla Corner(Chandni chowk), Old Famous Jalebi Wala(Chandni chowk).`;

         break;

         case 'shopping':
          response = 'Welcome to Shopping mode ,What do you wanna buy?';
        // var response1 = 'Welcome to Shopping mode ,What do you wanna buy?';
          break;

          case 'travelling':
        case 'traveling':
        var response1 = 'Welcome to Travelling mode. What kind of place you wanna visit: ';

        var response2 = "Adventurous Places";
        var response3 = "Monuments";
        var response3 = "Parks";
        response = "Peaceful places with nice views";

        displayBotMessage(response1);
        displayBotMessage(response2);
        displayBotMessage(response3);
          break;
         
          case 'fooding':
          case 'foodings':

        var response1 = 'Welcome to Fooding mode. Here\'s few options for you:';

        var response2 = 'Street food';
        var response3 = 'Restaurants';
        var response4 = 'Cafes and Bakeries';
        response = 'Delhi Special';

        displayBotMessage(response1);
        displayBotMessage(response2);
        displayBotMessage(response3);
        displayBotMessage(response4);
        break;

        default:
         response = 'I\'m sorry, I didn\'t understand that.';
         var speech = 'I\'m sorry, I didn\'t understand that.';


      }

      const utterance = new SpeechSynthesisUtterance(speech);
    speechSynthesis.speak(utterance);

    }

    else {
      switch (message) {
        case 'shopping':
          response = 'Welcome to Shopping mode ,What do you wanna buy?';
         var response1 = 'Welcome to Shopping mode ,What do you wanna buy?';
          break;

        case 'travelling':
        case 'traveling':
        var response1 = 'Welcome to Travelling mode. What kind of place you wanna visit: ';

        var response2 = "Adventurous Places";
        var response3 = "Monuments";
        var response3 = "Parks";
        response = "Peaceful places with nice views";

        displayBotMessage(response1);
        displayBotMessage(response2);
        displayBotMessage(response3);
          break;

        case 'fooding':
        case 'foodings':

        var response1 = 'Welcome to Fooding mode. Here\'s few options for you:';

        var response2 = 'Street food';
        var response3 = 'Restaurants';
        var response4 = 'Cafes and Bakeries';
        response = 'Delhi Special';

        displayBotMessage(response1);
        displayBotMessage(response2);
        displayBotMessage(response3);
        displayBotMessage(response4);
        break;

        default:
         response = 'Please select the following mode by typing one of them: Fooding, Shopping, Travelling';
         var response1 = 'Please select the following mode by typing one of them: Fooding, Shopping, Travelling';
          clickcount--;
      }
      const utterance = new SpeechSynthesisUtterance(response1);
      speechSynthesis.speak(utterance);

    }
    displayBotMessage(response);
   // const utterance = new SpeechSynthesisUtterance(response);
   // speechSynthesis.speak(utterance);
  }

});
