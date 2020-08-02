# ENVATO WEB-APP - FRONTEND

### Installation

1. Click on Fork button at the top right corner to fork the repo.

2. Clone your forked repository to your local environment.

3. Navigate into the cloned folder - <code>cd envatoweb-app</code>

4. Add upstream - <code>git remote add upstream https://github.com/Netacci/envatoweb-FE.git (Your forked repo url)</code>

5. Pull updates from the upstream - <code>git pull upstream develop</code>

6. Create a new branch for the feature you're working on - <code>git checkout -b [Feature]</code>

<code>e.g git checkout -b user_registration</code>

<hr>

### Naming Convention
1. Make sure you place your files in the appropriate folder you are working on.

2. Properly link your CSS and JS files(They should be in an asset folder)
3. Your pages should be named according to what you are working on e.g login.html login.css e.t.c
4. All your CSS files, images and Js files should be placed in the GENERAL ASSETS folder. Only your html file should be on the page folder.

   
<hr>

### Creating a pull request

1. To ensure you're on the right branch run <code>git branch</code>

2. If everything is okay stage your changes -  <code>git add .</code>

3. And then commit - <code>git commit -m "Commit Message"</code>

4. Pull upstream to avoid merge conflicts - <code>git pull upstream develop</code>

5. Push to your forked repo - <code>git push origin develop</code>

6. Go to the repository https://github.com/Netacci/envatoweb-FE.git

7. As soon as you get there, you are going to see a green ‘compare and create a pull request’

8. Click on it, and type your message, click on create pull request.

