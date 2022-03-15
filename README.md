# JS-Gallery
Final project JS Gallery Etic

My website includes two main pages Home and Gallery. 

Header includes two links, to the home page and gallery page.
In footer I used JS Date object to retrieve current year.

On the home page you can find a simple image slider that uses a function that replaces a large image url with the url from a small image that you click on.

On the gallery page are two sections, aside with filters and categories, and the main section with images. Images are fetched from MockAPI but also can be fetched from a local file (db.json) using json-server.

Images can be sorted by likes and views, and also sorted by categories (animals or forest).

Documentation 
https://docs.google.com/presentation/d/1AlPnvZVlVQTOpJdvM4qQxJALY8cC5F1zuQb_FPCxSdE/edit?usp=sharing

To  use json server replace url in fetch to 'devUrl'
In project used external library:
- json server 
to run this project in dev mode install json-server https://www.npmjs.com/package/json-server#getting-started
then run json-server --watch db.json in project directory




