const projects = {
  all: [
    {
      id: 1,
      title: 'Cleanease',
      image: 'https://img.freepik.com/free-vector/male-janitor-cleaning-toilet_1308-26483.jpg?t=st=1724130039~exp=1724133639~hmac=7774d21abb6b9973441c130e84a4ecdece02980aaad6af4eeaa3e0f5818c0af2&w=900',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/CAPSTONE-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/CAPSTONE-BE',
      deployedFrontend: 'https://cleanease-capstone-fe.netlify.app/',
      deployedBackend: 'https://capstone-be-den4.onrender.com/',
      description: 'A full-stack application that allows users to book cleaning services, view their service history, and manage appointments.',
      type: 'fullstack'
    },
    {
      id: 2,
      title: 'Rock-Paper-Scissors',
      image: 'https://img.freepik.com/free-vector/rock-paper-scissors-cartoon-banners-with-hands_107791-10979.jpg?t=st=1728874310~exp=1728877910~hmac=c2d3076b20955f55abb97498771f47a55f5e21e704c244463017aa5d87c2388a&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/Rock-Paper-Scissors-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/Rock-Paper-Scissors-BE',
      deployedFrontend: 'https://rps-fe.netlify.app/',
      deployedBackend: 'https://rock-paper-scissors-be.onrender.com/',
      description: 'A game built using token-based authentication where users can play rock-paper-scissors online, with secure login and score tracking.',
      type: 'fullstack'
    },
    {
      id: 3,
      title: 'Expense Tracker',
      image: 'https://img.freepik.com/free-vector/smart-pill-boxes-abstract-concept-illustration_335657-2217.jpg?t=st=1728874190~exp=1728877790~hmac=413a98f4210908df7216fc7063bdb769df72b67fb41ad7483094f1d8afdf40de&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/expense-tracker-fe',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/expense-tracker-be',
      deployedFrontend: 'https://expense-tracker-client-fe.netlify.app/',
      deployedBackend: 'https://expense-tracker-be-hq67.onrender.com/',
      description: 'A full-stack expense management system with external API integrations, allowing users to track and categorize their expenses.',
      type: 'fullstack'
    },
    {
      id: 4,
      title: 'Authentication',
      image: 'https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5280.jpg?t=st=1724130324~exp=1724133924~hmac=89a3b1bafbebd0952c614f90ba84d0c4ecff9ef88258d21a00fca3fe6bdd2bab&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/forget-password-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/forget-password-BE',
      deployedFrontend: 'https://password-reset-flo-fe-harish.netlify.app/',
      deployedBackend: 'https://password-reset-flo-be-harish.herokuapp.com/',
      description: 'A mini project demonstrating a login, register, and password reset flow with secure JWT-based authentication.',
      type: 'miniprojects'
    },
    {
      id: 5,
      title: 'E-com',
      image: 'https://img.freepik.com/free-photo/shopping-cart-with-orange-wheel-it_1340-37316.jpg?t=st=1724130660~exp=1724134260~hmac=0dcbe7bee70090cb17a410460ef7cf31157a6a374a7c2825f521a7f574489d6c&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/ecom_fe',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/ecom_be',
      deployedFrontend: 'https://e-com-harsih.netlify.app/',
      deployedBackend: 'https://ecom-be-ux0n.onrender.com/',
      description: 'A mini e-commerce platform with a shopping cart, product listing, and user management, built using Redux for state management.',
      type: 'miniprojects'
    },
    {
      id: 6,
      title: 'Employee Management',
      image: 'https://img.freepik.com/free-vector/business-people-team-work-managment-structure-hierarchy-teamwork-company_1284-51556.jpg?t=st=1728874071~exp=1728877671~hmac=5dc02efeb726442a06c4a5e9b675657f01191844003264ff1c9e4d736caa0345&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/employee-manageent-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/Employee-mangament',
      deployedFrontend: 'https://emp-manage-fe.netlify.app/',
      deployedBackend: 'https://employee-mangament.onrender.com',
      description: 'An employee management system with CRUD functionality for adding, updating, and deleting employee records.',
      type: 'miniprojects'
    },
    {
      id: 7,
      title: 'Currency Converter',
      image: 'https://img.freepik.com/free-vector/indian-rupee-transaction_23-2147988274.jpg?t=st=1728874136~exp=1728877736~hmac=e659bc330735c221cc5bce5f5d560f4845b33100091f0a9ca5743971f00d79a8&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/currencycoverter',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/currencycoverter',
      deployedFrontend: 'https://currency-converter-daily.netlify.app/',
      deployedBackend: 'https://currency-converter-daily.netlify.app/',
      description: 'A currency conversion tool built using React.js, fetching live currency rates via an external API.',
      type: 'miniprojects'
    }
    ,
  ],
  fullstack: [
    {
      id: 1,
      title: 'Cleanease',
      image: 'https://img.freepik.com/free-vector/male-janitor-cleaning-toilet_1308-26483.jpg?t=st=1724130039~exp=1724133639~hmac=7774d21abb6b9973441c130e84a4ecdece02980aaad6af4eeaa3e0f5818c0af2&w=900',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/CAPSTONE-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/CAPSTONE-BE',
      deployedFrontend: 'https://cleanease-capstone-fe.netlify.app/',
      deployedBackend: 'https://capstone-be-den4.onrender.com/',
      description: 'A full-stack application that allows users to book cleaning services, view their service history, and manage appointments.',
      type: 'fullstack'
    },
    {
      id: 2,
      title: 'Rock-Paper-Scissors',
      image: 'https://img.freepik.com/free-vector/rock-paper-scissors-cartoon-banners-with-hands_107791-10979.jpg?t=st=1728874310~exp=1728877910~hmac=c2d3076b20955f55abb97498771f47a55f5e21e704c244463017aa5d87c2388a&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/Rock-Paper-Scissors-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/Rock-Paper-Scissors-BE',
      deployedFrontend: 'https://rps-fe.netlify.app/',
      deployedBackend: 'https://rock-paper-scissors-be.onrender.com/',
      description: 'A game built using token-based authentication where users can play rock-paper-scissors online, with secure login and score tracking.',
      type: 'fullstack'
    },
    {
      id: 3,
      title: 'Expense Tracker',
      image: 'https://img.freepik.com/free-vector/smart-pill-boxes-abstract-concept-illustration_335657-2217.jpg?t=st=1728874190~exp=1728877790~hmac=413a98f4210908df7216fc7063bdb769df72b67fb41ad7483094f1d8afdf40de&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/expense-tracker-fe',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/expense-tracker-be',
      deployedFrontend: 'https://expense-tracker-client-fe.netlify.app/',
      deployedBackend: 'https://expense-tracker-be-hq67.onrender.com/',
      description: 'A full-stack expense management system with external API integrations, allowing users to track and categorize their expenses.',
      type: 'fullstack'
    },
  ],
  miniprojects: [
    {
      id: 4,
      title: 'Authentication',
      image: 'https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5280.jpg?t=st=1724130324~exp=1724133924~hmac=89a3b1bafbebd0952c614f90ba84d0c4ecff9ef88258d21a00fca3fe6bdd2bab&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/forget-password-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/forget-password-BE',
      deployedFrontend: 'https://password-reset-flo-fe-harish.netlify.app/',
      deployedBackend: 'https://password-reset-flo-be-harish.herokuapp.com/',
      description: 'A mini project demonstrating a login, register, and password reset flow with secure JWT-based authentication.',
      type: 'miniprojects'
    },
    {
      id: 5,
      title: 'E-com',
      image: 'https://img.freepik.com/free-photo/shopping-cart-with-orange-wheel-it_1340-37316.jpg?t=st=1724130660~exp=1724134260~hmac=0dcbe7bee70090cb17a410460ef7cf31157a6a374a7c2825f521a7f574489d6c&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/ecom_fe',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/ecom_be',
      deployedFrontend: 'https://e-com-harsih.netlify.app/',
      deployedBackend: 'https://ecom-be-ux0n.onrender.com/',
      description: 'A mini e-commerce platform with a shopping cart, product listing, and user management, built using Redux for state management.',
      type: 'miniprojects'
    },
    {
      id: 6,
      title: 'Employee Management',
      image: 'https://img.freepik.com/free-vector/business-people-team-work-managment-structure-hierarchy-teamwork-company_1284-51556.jpg?t=st=1728874071~exp=1728877671~hmac=5dc02efeb726442a06c4a5e9b675657f01191844003264ff1c9e4d736caa0345&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/employee-manageent-FE',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/Employee-mangament',
      deployedFrontend: 'https://emp-manage-fe.netlify.app/',
      deployedBackend: 'https://employee-mangament.onrender.com',
      description: 'An employee management system with CRUD functionality for adding, updating, and deleting employee records.',
      type: 'miniprojects'
    },
    {
      id: 7,
      title: 'Currency Converter',
      image: 'https://img.freepik.com/free-vector/indian-rupee-transaction_23-2147988274.jpg?t=st=1728874136~exp=1728877736~hmac=e659bc330735c221cc5bce5f5d560f4845b33100091f0a9ca5743971f00d79a8&w=740',
      githubFrontend: 'https://github.com/Harish-kumar-M-1998/currencycoverter',
      githubBackend: 'https://github.com/Harish-kumar-M-1998/currencycoverter',
      deployedFrontend: 'https://currency-converter-daily.netlify.app/',
      deployedBackend: 'https://currency-converter-daily.netlify.app/',
      description: 'A currency conversion tool built using React.js, fetching live currency rates via an external API.',
      type: 'miniprojects'
    }
    ,
  ]
};

export default projects;
