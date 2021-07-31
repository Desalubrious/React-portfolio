// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
//import codepenIcon from "./images/codepen.svg"
//import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.png"

export default {

  //   Header Details ---------------------
  name: "Evan Mora",
  headerTagline: [
    //Line 1 For Header
    "Developing your ideas,",
    //Line 2 For Header
    " beautiful webpages,",
    //Line 3 For Header
    "growing brands",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a Wyoming based Full Stack Developer, out of the University of Denver",

  //Contact Email
  contactEmail: "evanrmora@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "National Park Fun Finder", 
      para:
        "The best app to plan your next getaway into the wild.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/Desalubrious/NP-fun-finder/raw/main/assets/np-finder.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Desalubrious/NP-fun-finder",
    },
    {
      title: "NHL Bracket Builder", 
      para:
        "Our take on the march-madness format for the NHL.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/Desalubrious/NHL-Playoff-Bracket/blob/master/Assets/screenshot2.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Desalubrious/NHL-Playoff-Bracket",
    },
    {
      title: "Ecommerce Backend", //Project Title - Add Your Project Title Here
      para:
        "This ecommerce backend is easily deployable for quick inventory management.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/Desalubrious/React-portfolio/blob/main/src/images/insomnia.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Desalubrious/ORM-e-commerce",
    },
    // 

    /*
    Future Projects template
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a proud Colorado Native, but I moved to Wyoming to study Computer Science at the University of Wyoming",
  aboutParaTwo:
    "I currently am completing coursework in Full Stack Engineering with the University of Denver, expected completion, July 2021.",
  aboutParaThree:
    "I love to meet and connect with new people, so I am eager to get to know you on an individual level.",
  aboutImage:
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/17757592_1482273645157573_4046463666911590902_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=iNbsnqjptSEAX9Dwm_7&_nc_ht=scontent-sea1-1.xx&oh=e0a954c164a0df7a3c934e6d0f9632cf&oe=6129DD99",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Modern HTML",
    },
    {
      img: cssIcon,
      para:
        "Stylish CSS",
    },
    {
      img: jsIcon,
      para:
        "Powerful JavaScript",
    },
    {
      img: reactIcon,
      para:
        "Responsive React Apps",
    },
    {
      img: designIcon,
      para:
        "Application planning",
    },
    {
      img: codeIcon,
      para:
        "Experienced in: C++, C#, Java, JS, Jquery, Node, SQL Databases, and many more.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "I have the knowledge and ability to help you with your next website redesign, as well as any high level full stack engineering.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/desalubrious" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/evan-mora-59a330206/" },
    //{
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/evanrmora",
    },
  ],

  // End Contact Section ---------------
}

