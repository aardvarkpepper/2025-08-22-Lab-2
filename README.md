## Reflection Questions

1.  Why is it beneficial to separate your routes, models, and database connection into different directories?

Separation of concerns, and so you don't get this gigantic block of code to wade through when something goes wrong.

2.  What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT completely replaces, PATCH partially replaces.  If I make a PUT /:id, then it's going to be a PUT, not a PATCH.

3.  In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

Return the deleted item for confirmation purposes.  'Congratulations, deletion successful!' is the sort of message that just makes users break out in a cold sweat.  'You have successfully deleted 'Unused Boots' from inventory' is much better.

I'd actually say best practice is not to use DELETE 'normally' at all.  Rather, have a PATCH to toggle information to inaccessible along with a date.  Then user can 'undo' DELETE, possibly until periodic data removal wipes it with an actual DELETE (or moves it to an inactive server as archived material).

## NOTES

https://mongoosejs.com/docs/connections.html

For local MongoDB databases, we recommend using 127.0.0.1 instead of localhost. That is because Node.js 18 and up prefer IPv6 addresses, which means, on many machines, Node.js will resolve localhost to the IPv6 address ::1 and Mongoose will be unable to connect, unless the mongodb instance is running with ipv6 enabled.