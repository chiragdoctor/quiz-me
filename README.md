# QuizMe (Frontend)

There are 2 project created for the app to run

1. quiz-me - Frontend project (https://github.com/chiragdoctor/quiz-me)
2. quiz-me-backend - Backend Strapi CMS Project (https://github.com/chiragdoctor/quiz-me-backend)
   Clone the frontend project

## To run the project locally

Frontend

1. Clone the project `git clone git@github.com:chiragdoctor/quiz-me.git`
2. Go in the folder & npm install
3. Command to run the project

```bash
npm run dev
```

Backend

1. Clone the project `git clone git@github.com:chiragdoctor/quiz-me-backend.git`
2. Go in the folder & npm install
3. Command to run the project

```bash
npm run develop
```

Once the backend os running, we need to create a user (admin user) and start creating data. This step is just for local development, on production the data is already set.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

Frontend is deployed on Vercel,
https://quizme-gamma.vercel.app/

Backend is deployed on Heroku
https://quizmebackend.herokuapp.com/admin/auth/login

**Credentials will be provided in the email**

We can use this credentials to create new content

I have already setup some content so that we can go through the website

# Process

1. Understood the problem statement i.e. requirements
2. Based on that I have selected the technologies. In our case we have t make a quiz app, it is a good option to have a CMS system in place. I have chosen Strapi CMS as the backend
3. The frontend of the app uses React, Next.js & Tailwind CSS
4. Once I had the sorted out the technologies, I had to re-iterate over the problem statement and come up with a mindmap which help me to take a step by step approach to solve the problem. Image attached bellow

![Mind Map](./public/images/Steps%20for%20Quiz%20App.png)

5. After that I used this as a reference to get to the solution. This mindmap is just for reference purpose.
6. Once the solution was developed, I have tested the solution locally.
7. Then it was deployed to production environment
   1. CMS - Heroku
   2. NextJS - Vercel
8. Again I went thought one round of testing on production

## Enhancements

1. Can Implement all the **CRUD operations** - There was no need at this point in the exercise to implement it. But can be done as extension
   1. Like registering user
   2. Making admin panel to store data in CMS
2. **Authenticating User ** -
   1. Login functionality
   2. Role based access
3. Refactor Tailwind CSS code to be more reusable

Please let me know if there is any question or feedback.
