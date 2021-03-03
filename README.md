# note-taker
back end code for a note taking application

## Features
* saving notes by posting them to backend
* persists through refresh and restart of server
* routing and management of get/post requests

## Reasoning
having a functional front end application, we had to set up the back end to manage the routes and requests and successfully push the finished app to heroku.

## Challenges & Process
1. initially my notes array emptied every time the server was restarted, which i fixed by adding a function on running the server that refilled the array with a for loop from the `db.json` file
2. adding unique id's to the json was a troublesome exercise for me as well, in the end i added to each object within the above forloop a property called `id:` whose contents called uniqid(), while this does result in unique IDs it does have the extra 'feature' of overriding on server start. I think that this could have been remedied with an if clause that checked to see if ID existed already.

## Link to repo
[Repo](https://github.com/bendemic90/note-taker)

