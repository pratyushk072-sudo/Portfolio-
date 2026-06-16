# My Interactive Portfolio

Welcome to your portfolio! This project is built using **React** and **Vite**, with custom CSS for styling.

Here is a quick guide on how to update your portfolio in the future as you learn new skills and build new projects.

---

## 1. How to Add a New Skill
Your skills are managed in the **Skills** component.

1. Open the file: `src/components/Skills.jsx`
2. At the top of the file, you will see a list called `skillsData`. It looks like this:
   ```javascript
   const skillsData = [
     { category: "Languages", items: ["C++", "C", "Java", "JavaScript"] },
     // ...
   ];
   ```
3. To add a new skill (like Python or AWS), simply add it to the `items` array under the relevant category:
   ```javascript
     { category: "Languages", items: ["C++", "C", "Java", "JavaScript", "Python"] },
   ```
4. Save the file, and your website will update automatically!

---

## 2. How to Add a New Project
Your projects are managed in the **Projects** component.

1. Open the file: `src/components/Projects.jsx`
2. At the top of the file, you will see a list called `projects`.
3. To add a new project, copy the structure of the existing project and add a new block separated by a comma. It should look like this:
   ```javascript
   const projects = [
     {
       title: "Smart Expense Tracker",
       description: "A comprehensive web application...",
       tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
       liveLink: "https://smart-expense-tracker-theta-eight.vercel.app/",
       githubLink: "https://github.com/pratyushk072-sudo/smart-expense-tracker"
     },
     {
       title: "My New AI Project",
       description: "A machine learning model that predicts housing prices.",
       tags: ["Python", "TensorFlow", "Pandas"],
       liveLink: "https://my-live-demo-link.com",
       githubLink: "https://github.com/pratyushk072-sudo/my-new-project"
     }
   ];
   ```
4. Save the file, and the new project card will instantly appear on your site.

---

## 3. How to Update Your "About Me" Bio
If you want to rewrite your bio or change your education details:

1. Open the file: `src/components/About.jsx`
2. Scroll down until you see the `<p>` tags (paragraphs) containing your text.
3. Simply change the text inside those paragraphs. 

---

## 4. How to Change Your Profile Picture
1. Add your new picture to the `src/assets/` folder.
2. If the new picture is named `new_photo.jpg`, open `src/components/About.jsx`.
3. Change the import line at the very top of the file:
   ```javascript
   import profilePic from '../assets/new_photo.jpg';
   ```

---

## 5. How to Run Your Website Locally
Whenever you want to run this website on your computer to see your changes:

1. Open your terminal (or command prompt) and navigate to your project folder.
2. Run the following command:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173/`.

---

## 6. How to Deploy Your Website
Since this is a Vite project, it is very easy to deploy for free using platforms like **Vercel** or **Netlify**.

**To deploy to Vercel:**
1. Upload this entire code folder to a new GitHub repository.
2. Go to [Vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **Add New -> Project** and import your GitHub repository.
4. Leave all settings as default (Framework Preset: Vite) and click **Deploy**.
5. Vercel will give you a live link (like `pratyush-portfolio.vercel.app`) that you can share with anyone!
