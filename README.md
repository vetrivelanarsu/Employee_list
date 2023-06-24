
Tech Stack used: React, CSS.
Functionality: Serach, Route for single page application.
npm packages: npx create react-app, npm i react-router-dom
![Screenshot (1190)](https://github.com/vetrivelanarsu/Employee_list/assets/115474291/82f3e6cd-ec3b-4d99-add0-f16dfa08544e)

Employee List is a simple React app. The Main operation involves fetching data from a particular API and populating it in the structure.
Here, to enhance visual and interactive purposes I have added a List view of employees.

![Screenshot (1191)](https://github.com/vetrivelanarsu/Employee_list/assets/115474291/cab17497-69e9-44e7-a32b-0900c3129bc0)

To increase the visual the expanding search bar helps. In the search bar, the first name of the employee needed to be entered to begin the search function. The result of employee will be displayed if no employee match then it renders 'Not Found'. Here Filter HOF used to filter the array of object to matcg the search first_name. Also includes() has used to determine the particular key in the Object of an Array and it returns true if it is satisfies and returrn false if first_name is not found.


![Screenshot (1192)](https://github.com/vetrivelanarsu/Employee_list/assets/115474291/48dd3a40-f9f0-4016-aa33-ac82a9a72960)

By clicking on the particular list element, it route to singleuserpage where employee's avatar, name, email have been rendered.

![Screenshot (1193)](https://github.com/vetrivelanarsu/Employee_list/assets/115474291/aef56b45-da96-40dc-afdc-ad0e478dedda)

react-router-dom installed to access the Link, Routers, Route, Browserroute, useSearchParams to perform Router operation to display  information about particular employee.

Vercel Deployment link: https://employee-list-app-sigma.vercel.app/

