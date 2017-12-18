//This file is used so that injection descriptions can be abstracted away from individual pages.  So we don't have to update identical descriptions in every tab of a page when we update it.
//The logic for this file is in index.js.  It looks for an element with classtype "injectionDescription" then looks up the id of that element in the descriptions object.

var descriptions = {};
descriptions.injectionDetection = "Injections can be detected in a number of ways. The simplest being adding a <code>'</code> or <code>\"</code> after various parameters and getting a database error returned from the web server. The sections below describe where to find and how to detect these parameters."
descriptions.dbmsIdentification = "Detecting what Database Management System (DBMS) is being used is critical in being able to further exploit an injection. Without that knowledge it would not be possible to determine what tables to query, what functions are built-in, and what detections to avoid. A successful response from the below queries identify that the selected DBMS is being used."
descriptions.errorBased = "Error based injections are exploited through triggering errors generated by the database when invalid input is passed to it. The error messages can be used to return the full query results, or gain information on how to restructure the query for further exploitation."
descriptions.unionBased = "Union based SQL injection allows an attacker to extract information from the database by extending the results returned by the original query. The Union operator can only be used if the original/new queries have the same structure (number and data type of columns)."
descriptions.blindBased = "Blind SQL injection is one of the more advanced methods of injection. The Partial-Blind and Full-Blind methods are detailed below. Use care when performing these queries, as they can overload a server if performed through heavy automation."
descriptions.conditionalStatements = "Conditional statements are beneficial for creating complex queries and aiding in Blind Injection."
descriptions.injectionPlacement = "SQL injection is always a hassle when it isn't apparent where the injection is taking place. It is helpful to have a few ways to exploit injections in various parts of the query."
descriptions.injectionObfuscation = "Obfuscating queries aids in bypassing Web Application Firewalls (WAFs) and Intrusion Detection/Prevention Systems (IDS/IPS)."
descriptions.dataExfiltration = "Exfiltrating data allows easier data analysis, as well as an offline copy of any compromised data.  Data can be exfiltrated through files, various Layer 4 requests, and hidden techniques."
descriptions.dataTargeting = "Being able to properly target and identify sensitive information can exponentially decrease time spent in a database. This means less time spent poking around and more time spent researching other vectors."
descriptions.executingOSCommands = "Running an OS command is one of the primary objectives of SQL injection, this aids in getting full control of the host OS. This may happen by directly executing commands, modifying existing data to put a shell on a webpage, or exploiting hidden functionality in the database."
descriptions.informationGathering = "It is often valuable to gather information about any testing environment; version numbers, user accounts, and databases all help in escalating vulnerabilities. Below are common methods for this."
descriptions.lateralMovement = "Lateral movement allows a tester to gain access to different sets of functionality/data that don't explicitly require a more privileged user. Switching user accounts laterally will expose different information and could aid in compromising a more privileged user."
descriptions.privilegeEscalation = "Certain functionalities require a privileged user and for escalating a vulnerability a privileged user is always the first step."
descriptions.readingAndWritingFiles = "Reading and writing to files aids in data gathering as well as data exfiltration. Many methods include writing to the webroot, which enables a web shell to be executed, or allowing data to be exfiltrated over port 80/443."
