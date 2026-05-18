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
