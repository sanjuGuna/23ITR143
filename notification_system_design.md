## STAGE 1

REST API endpoints
1. GET http://localhost:3000/notifications
gets the available notifications from the system.

Request (GET):
    HEADER
        cookie : have some small piece of data.
        authorization : to access the resources.
        sent along with the request.

Response:
    The available notification in JSON format. ONLY required info from notification. Not every details.
    eg.{
        "notification":[
            {
                "ID":1,
                "Type":"Result"
            }
        ]
    }

2. POST http://localhost:3000/notifications/:id
Request (POST)
    BODY
        {
            "reply" : "reply to the notification",
            "sentTimeStamp": "time"
        }
Response 
    {
        "message":"message sent"
    }

3. DELETE http://localhost:3000/notifications/:id
Request (DELETE)
    sends request to delete the notification

4. GET http://localhost:3000/notifications/:id
Request (GET):
    get request for the particular notification
Response:
    {
        "ID":1,
        "Type:,"Result",
        "Message":"mid-sem",
        "Time Stamp": time
    }

## STAGE 2
    Based on the api's i would use mongo db.
    because using of mongo db is flexible and can store semi or unstructured data it. Has flexible schema

    SCHEMA
   const notification= mongoose.schema({
            "notifications":[
                {
                    "ID":1,
                    "Type":"Result",
                    "Message":"mid-sem",
                    "Timestamp":"2026-05-18 17:51:30"
                }
            ]
    });

    PROBLEM IN INCRESING DATA SIZE:
        In mongo db each document size 16Mb, we cant store more than that
        if size increses fetching/modifing will be slow.
    
    QUERY
    db.findOne({"ID":1}) // simple query .FOR the api http://localhost:3000/notifications/:id

## STAGE 3 
    This query is accurate
    whenever the rows grow in database , fetch/reteriving the data is slow.
    It can be improved by using index, because every row is indexed based on the studentID. reteriving using studentID is faster;
    QUERY: select * from notification where (DATE()-Timesent)<=7;


