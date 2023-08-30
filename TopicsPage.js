import React from 'react';


function TopicsPage() {
  
    return (
       <>

            <h2>CS 290 Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend design">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">Cascading Stylesheet</a>
                <a href="#js">JavaScript</a>
            </nav>
    
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    "<strong>index</strong>.html" is the most common name used for making a default page on the website.
                    It represents the name of the resource on the server, and the server uses this to identify the specific resource
                    that the client has requested. If a request for / is made, then most web servers are configured so that it is mapped
                    to the file at the path <strong>/index.html</strong>.
                    The index.html file is called the <strong>designated homepage</strong> on the web server. It is called the homepage of a web
                    application since it returns to this file whenever there is a GET request for the URL/. 
                </p>
         
                <p>
                    The <strong>HTTP request</strong>, <strong>HTTP response</strong>, <strong>status code</strong>, <strong>remote address</strong>, and the value of the <strong>Location header</strong>
                    are some examples of what can be seen in the browser's Web Dev/Inspector tools.
                    The differences in the file's details on the web server versus the local computer are the executor.js and favicon.ico files.
                    In the local file, these two files were not present, but on the web server, they were present and had a status of 200.
                    The request URL is different as well, since one is from a web server and the other is from a local file on the computer.
                </p>
            
                <p>
                    The favicon.ico file has a status of 200, but the main.css and main.js files do not because we are only working with an HTML file and 
                    the CSS and JS files have not been made yet. The status code for the files that do not exist is "404". The favicon.ico file has already been provided through the OSU server.
                </p>
            
                <p> 
                    The <strong>URL</strong> to the web file is: https://web.engr.oregonstate.edu/~kimha2/a1-kimha2/.
                    The <strong>scheme</strong> of the URL is the "https://" part of the URL. This identifies the protocol the web client must use to request the resource.
                    The <strong>subdomain</strong> part is the "web.engr." part of the URL, which is a subsection of the domain.
                    The <strong>host domain</strong> part is "oregonstate.edu". This is the name of the machine to which requests must be sent and where the resource is hosted.
                    The <strong>resources</strong> part is "/~kimha2/a1-kimha2/". In this URL, this represents the physical location of this file on the web server. 
                </p>
            </article>
           
            <article id="frontend design">
                <h3><strong>Frontend Design</strong></h3>
                <p><strong>Frontend Design</strong> is mainly focused on creating web user interfaces and the website's graphic design; the parts users see
                    and interact with. Frontend developers/designers are usually working with HTML, CSS, and JavaScript.
                    Not only are the appearance and aesthetics of the website important, but the functionality and efficiency of the website
                    are important as well. Frontend developers/designers must strive to achieve both in order to produce a great website.
                    The focus of frontend design lies in crafting the optimal user experience. This encompasses the visual design of the webpage, the graphical user interface (GUI), and the interactive experience.
                    Achieving an appealing visual design entails maintaining a cohesive color scheme, font, and typography scheme, photography, icon, illustration scheme, and navigation systems that work and make sense.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>A usable website should help users meet their goals with accurate results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>It is the most efficient if it is able to perform tasks with the least amount of steps and get the results
                        as quickly as possible.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>For users that have never used or seen it before, they should be able to immediately understand how to use it and remember 
                        how to use it next time. 
                    </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>It should avoid any errors such as accessibility and availability issues. </dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>Is it enjoyable to use and engaging? The content and design of the website should make the overall experience more enjoyable and engaging for the users.</dd>
                </dl>
                <p>The purpose of <strong>page layout tags</strong> is mainly to break up the flow of the content. It is typically
                    displayed with a newline before and after the element. Depending on the styles applied to them using CSS,
                    they can look a variety of different ways. Some examples of page layout tags are the header, NAV, main, section, article,
                    aside, and footer. 
                    The <strong>header</strong> tag serves as the prominent section of an application or website. It typically consists of the app/site name, publisher information, and a marketing slogan. 
                    The purpose of the header is to provide a consistent visual element across pages, so that users can tell they are navigating within the same site.
                    The approach is to minimize the space occupied by the header, allowing the content to be displayed above the scroll area within the viewport.
                    The <strong>nav</strong> element, which can be employed multiple times within an application or website, facilitates navigation between various pages. 
                    Each navigation block directs users from their current page to other relevant pages. These sets of navigation typically hold essential components such as the main menu, search functionality, tools, stories, locations, and legal links.
                    The <strong>main</strong> element represents the primary container responsible for holding various forms of content, including stories, galleries, tutorials, and more.
                    The <strong>section</strong> element serves the purpose of creating a cohesive grouping of content with a common theme. 
                    It allows for the organization of related content that may not possess significance alone. 
                    Typically, the first child of a section is a headline h1 that provides a descriptive overview of the content within that section. 
                    It's important to note that a "section" should only be utilized when all the included content is related.
                    The <strong>article</strong> element is commonly nested within a "section" tag and represents a distinct and focused topic. 
                    It is often accompanied by a second-level headline h2.
                    When multiple "article" tags are present within a section on a page, they are typically assigned unique ID selectors (#topic) to allow for specific styling. These IDs also serve as anchor points for internal page navigation.
                    The <strong>footer</strong> element  is positioned below the main content of a page and is commonly used to contain important information such as legal notices, contact details, and links to essential pages. 
                    A minimal footer should include the copyright statement of the website owner, indicated by the copyright symbol (represented using ASCII entities), the year of publication, and the name of the owner.



                </p>
                <ol>
                    <li><strong>Anchors</strong> link to external content when used in navigation to link to other pages.</li>
                    <li><strong>Anchors</strong> link to internal content by linking to a specific location within a document. 
                        This can be done in two steps: Add an ID attribute to the desired element, and add the value of the ID attribute at the end of the URL with a hash symbol in front.</li>
                    <li><strong>Anchors</strong> link from page-to-page by using the HREF attribute, which is used to specify the URL of the page where users will be taken when clicked on.</li>
                </ol>
            </article>
            
            <article id="optimizingImages">
                <h3><strong>Optimizing Images</strong></h3>
                <p>
                    The first major specification of images for the web is <strong>descriptive file name</strong> because it is needed to improve the 
                    <strong>search engine optimization (SEO)</strong>. File names should include who, what, when, and where. 
                    The second major specification is <strong>small file size</strong>. The aim should be to reduce the file size to as small as possible for the fastest load time.
                    High resolution images should only be served to high resolution devices.
                    The third major specification is <strong>exact dimensions</strong>. 
                    The size of the image should fit the dimensions of the space. This can be achieved by cropping and reducing the size of the image. 
                    The fourth major specification is <strong>correct file format</strong>.
                    The format of the images should be set depending on the type of image since different formats are optimized differently to fit certain specifications.
                    The fifth major specification is <strong>reduced resolution</strong>.
                    Reducing the resolution of the image can improve the load time.
                    The sixth major specification is <strong>color mode</strong>. 
                    Having a specific color palette or scheme can prevent the design from looking amateurish and allow a more consistent design.
                </p>
                <p>
                    The file formats most appropriate for photos are JPG files and WebP files. They allow images to be compressed down to smaller file sizes
                    and remain rectangular. 
                    The file formats most appropriate for line art are GIF files and PNG files. They can be placed in a variety of colors without distortion, and 
                    the edges anti-alias to one matte background color. 
                </p>
            </article>
            
            <article id="favicons">
                <h3><strong>Favicons</strong></h3>
                <p>
                    Favicons are used to quickly identify a site in the browser tab when there are multiple tabs open and multiple devices, such as a smart watch, 
                    cellphone, or a search engine results list. It represents a website, an app, or a company logo. The favicons can be saved in different formats
                    for different browsers and devices. After the favicon is made and saved, the browser will pick up the files and anchor to a bookmark or favorites list,
                    as well as a device screen or search engine results list when asked. 
                </p>
            </article>

            <article id="css">
                <h3><strong>Cascading Stylesheet</strong></h3>
                <p>
                    There are several key reasons to incorporate stylesheets in websites and apps.
                    Cascading Style Sheets (CSS) are used to redefine the appearance and behavior of the structure, content, and components of a website or app. The purpose is to enhance usability, readability, and legibility while ensuring compliance with brand requirements.
                    They also allow you to define and apply consistent visual styles across multiple pages or components, ensuring a cohesive and unified design throughout the website or app.
                    With stylesheets, you can centralize the styling rules, making it easier to manage and update styles across the entire website or app.
                    Changes can be made in one place, and they will be applied consistently throughout the project.
                    In summary, incorporating stylesheets in websites and apps delivers benefits such as consistent design, separation of concerns, reusability, efficiency, easy maintenance, and flexibility, contributing to an enhanced user experience.
                </p>
                <p>
                    Redefining an element's selector through external CSS rules is commonly achieved by utilizing one or more external files with a ".css" extension.
                    These stylesheet files are linked to the global "head" section of a website using the "link" tag. 
                    Stylesheets for specific components can be linked after the global .css file, or they can be imported within the global stylesheet itself.
                    Using externally linked .CSS files is generally considered the most efficient and preferred method for styling an app or website.
                    Embedding styles directly in HTML and JavaScript files is an alternative approach; however, it is generally reserved for one-off style changes only and is not permitted in this course.
                    In the case they were used, they can be <strong>embedded</strong> within a style tag, 
                    <strong>inline</strong> within an element using an attribute and value,
                    in <strong>JavaScript template literals</strong> as long as it is within a JS function, and 
                    in <strong>regular JavaScript</strong> by using the DOM. 
                </p>
            </article>

            <article id="js">
                <h3><strong>JavaScript</strong></h3>
                <p>
                    JavaScript has the following data types: number, boolean value (either false or true), string, symbol, special values (undefined and null), and object.
                    <strong>Primitive types</strong> are values other than object types and will not be discussed in this course. 
                </p>
                <p>
                    <strong>Objects</strong> are used as a set of name-value pairs.
                    The four fundamental actions that can be performed on an object are create (add), read, update, and delete. Together, these actions are commonly known as CRUD operations.
                    <strong>Create and update</strong> is done using the "." operator on the variable. 
                    By executing the statement s1.price = 10, the value 10 is assigned to the "price" property of the object s1. If the "price" property was already present, its value will be updated with 10. On the other hand, if the "price" property didn't previously exist, it will be added to the object with the assigned value of 10.
                    <strong>Read</strong> uses the "." operator as well. 
                    The statement s1.price will read the price property of the s1 object.
                    To <strong>delete</strong> a property from an object, you can utilize the delete operator.
                </p>
                <p>
                    In JavaScript, <strong>arrays</strong> are considered objects with property names represented as strings, such as '0', '1', '2', and so on. 
                    Object properties must be of string data type. Consequently, array property names are treated as string values, even though they may correspond to numeric indices like 0, 1, 2, and so forth.
                    Arrays in JavaScript offer multiple ways to access their elements.
                    One method is using a 0-based integer index within square brackets, like [0].
                    Additionally, you can access elements using the string-based property name enclosed in square brackets, for example, ['0']. 
                    Arrays in JavaScript can store values of any data type, including objects. 
                    By accessing the element at an index where there is no corresponding element, the result will be undefined.
                    To check whether a variable contains an array or not, you can utilize the method Array.isArray().
                    It helps determine if the value of the variable is an array.
                    Once declared with the const keyword, a variable of array type cannot be reassigned to a different array. However, it is still possible to modify the elements contained within the array.
                    The length property of an array gives the count of elements present in the array.
                    The length property of an array gives the count of elements present in the array.
                    Arrays offer the push() method to append one or multiple elements at the end of the array. Conversely, the pop() method removes and returns the last element from the array.
                    To check if a specific value exists within an array, you can employ the includes() method.                    
                
                </p>
                <p>
                    <strong>JSON</strong>, short for JavaScript Object Notation, serves as a widely adopted data format for seamless data exchange between applications.
                    Using JSON, we can achieve two crucial operations: Map an object in a program to a JSON-formatted string, and create an object in a program from a JSON-formatted string
                    In JavaScript, the primary methods for working with JSON are as follows: JSON.stringify() creates a JSON string from a JS object, and JSON.parse() creates a JS object from a JSON string.

                </p>
                <p>
                    In JavaScript, conditional branching is facilitated through the use of if and switch statements. 
                    The if statement is executed if the given expression evaluates to true.
                    The Conditional Operator, also known as the Ternary Operator, provides a concise method for coding simple decisions in JavaScript.
                    Its general format is as follows:

                    <strong>condition ? expression1 : expression2</strong>
                    
                    Here's how it works:
                    The condition is evaluated. If the condition is true, expression1 is evaluated, and its value is returned.
                    If the condition is false, expression2 is evaluated, and its value is returned.
                    
                    The while statement in JavaScript is similar to the while statement found in other programming languages.
                    
                    The for loop is utilized in JavaScript to execute a block of code repeatedly for a specific number of times. It is commonly used for iterating over elements in various data structures. JavaScript offers three variations of the for loop.
                    The for of statement in JavaScript is used to iterate over the elements of an iterable value, such as a string or an array. 
                    It allows easy traversal of each element within the iterable data structure.
                    The for in statement in JavaScript is utilized to iterate over the properties of an object.
                    
                </p>
                <p>
                    <strong>Object-Oriented Programming (OOP)</strong> is a programming paradigm or approach that revolves around the concept of "objects." 
                    The JS objects have identity, state, and behavior.
                    <strong>Identity</strong> represents two objects that are distinct and have their own identity.
                    Every <strong>object</strong> has its own state represented by its properties, company, symbol, and price.
                    <strong>Behavior</strong> to an object can be added by adding properties whose values are functions. 
                </p>
                <p>
                    
                    In JavaScript, functions are considered "first-class" values.
                    Therefore, the following are allowed: Assignment to variables, functions as arguments, and functions as return values.
                    Functions can be assigned to variables just like any other data type.
                    It's possible to define functions that receive other functions as arguments, allowing for higher-order functions.
                    It's also possible to define functions that return other functions, enabling the creation of closures and functional programming techniques.
                </p>
            </article>        
</>
    );
}
export default TopicsPage;