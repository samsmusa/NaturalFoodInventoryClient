import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Question and Answer</h2>
                    <div className="blogText">
                        <h4>
                            Difference between nodejs
                            <span className="text-danger"> javascript</span> and
                            <span className="text-danger"> nodejs</span>
                        </h4>
                        <p>
                        JavaScript is a popular language which runs inside website browsers as part of documents loaded by that browser. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development. <br />The Node or Node.js usually represents a collection of methods and objects available to the JavaScript code when run in V8 or through the node interpreter. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps.
                        <br />
                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.JavaScript can manipulate DOM or add HTML within whereas Node.js doesnt have the capability to add HTML.
                        </p>
                    </div>

                    <div className="blogText">
                        <h4>
                            When should you use
                            <span className="text-danger"> mongodb</span> and when should you use
                            <span className="text-danger"> nodejs</span>
                        </h4>
                        <p>
                        Node.js is an open source server environment which uses JavaScript on the server to develop backend applications. Mainly there are two types of database management systems (DBMS): Relational and NoSQL DBMS. <br />
                        NoSQL DBMS manages the database that stores unstructured data in forms of collections and documents. MongoDB is a NoSQL DBMS, usually people prefer mongoDB for this reason: <br /> NoSQL Database Management Systems are more flexible than RDBMS. <br />
                        Can handle variety of data and huge amount of data
                        </p>
                    </div>

                    <div className="blogText">
                        <h4>
                            Difference between
                            <span className="text-danger"> sql</span> and
                            <span className="text-danger"> nosql</span>
                        </h4>
                        <p>
                        SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. SQL is simple and easy to learn with declarative commands. <br/> NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. NoSQL flexibility is its biggest advantage. Programmers are not limited to storing only structured data. The freedom from the predefined schema allows NoSQL databases to store and retrieve data easily.
                        </p>
                    </div>
            </div>
    );
};

export default Blog;