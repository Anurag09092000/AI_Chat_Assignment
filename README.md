# AI_Chat_Assignment

To create the MessageDisplay component, I used React functional components along with the useState and useEffect hooks. The component fetches messages from an external API using the fetch API and displays them in a chat-like interface.

In the component, I first define a state variable messages using useState to store the fetched messages. I then define an handleApi function that uses the fetch API to fetch messages from the specified API endpoint. This function is called inside the useEffect hook with a dependency array, ensuring that it runs only  when the component state (fetchData) changes.

The messages are displayed inside a div element with the class chat-container. Each message is rendered inside a div with the class message, which contains an emoji representing the sender (🤖 for bot messages and 👦 for user messages) and the message text. 

The map functionality is used to iterate over the messages array obtained from the API response. This method is applied to the messages array to dynamically render each message as a separate chat message in the UI. For each message in the array, the map method returns a JSX element representing a chat message. The key attribute is set to the id of each message to ensure React can efficiently update and manage the list of messages. Overall, the map method enables dynamic rendering of chat messages based on the data retrieved from the API.
