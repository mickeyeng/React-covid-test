# Phantom React COVID-19 Data Visualisation Test

## Brief
Produce a pice of work that visualises the number of Covid 19 cases across Lonodn over time.

### How to run the application on Mac, Linux and Windows  

1. Clone the GitHub Repository by entering  ``` git clone <link-to-repository> ``` in terminal. Or download the zip folder by clicking download zip. 
2. Extract the zip file.
3. Navigate to the app directory in your terminal/cmd line appliation. \
``` cd React-covid-test ```
5. Run npm install to install the application.  
 ``` npm install ```
7. Run npm start to start the server on localhost://3000. \
  ``` npm start ```
9. If your browser doesn't open automatically when running the above command, open a browser of your choice and enter http://localhost:3000/ in the address bar to launch the application.

### challanges

Since the CSV file is quite large, I noticed the application was running quite slow on each render. For this reason, I used UseMemo and useCallback to cache the results. Otherwise, each time the application renders, it would have to convert the CSV to JavaScript each time which is expensive and will result in a slow performance web application.

### If I had more time, I would have updated the following:

1. Researched and implemented more in-depth accessibility best practices.
2. Add animations using Framer motion or three.js.
3. Add a geograhical map to show the data in each of the London Boroughs in a more visual pleasing way.
4. Add unit tests.
5. Use a state library to manage the application state such as React-context.

### Thank you for taking the time to review my work 👍
