// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

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
        "./src/images/insomnia.png",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/20245402_1591355694249367_1827142236156729797_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1chSnV9MDUwAX-u51uD&_nc_ht=scontent-sea1-1.xx&oh=c7294f1ca3a73cfeded97a2968c83452&oe=612C1985",

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
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

