// Only Supports iOS VOIP

var apn = require("apn");
 
var deviceToken = "e987164ba61a9afd5ckd739gnsj2305gfm48304e5798a0f7f095f7cf1ac0691";

let provider = new apn.Provider( 
    {
        token: {
            key: "TestAuthKey_376Y9L4AQ.p8",
            keyId: "6490MM4AQ",
            teamId: "F4Z8GBYG77",
            cert:"voip_curer_debug.pem"
        },
        production: false
    });

let notification = new apn.Notification();

notification.rawPayload = {
    "aps": {
      
        "alert": {
            "uuid": "2294",
            "incoming_caller_id": "1174",
            "incoming_caller_name": "Shivam",
            "caller_name": "Shivam",
            "appointmentUUId": "22222222222222",
            "caller_id": "44",
            "type": "TO_DOCTOR",
            "click_action": "FLUTTER_NOTIFICATION_CLICK",
        },
       
        'content-available': 1,

    

    }
};
notification.pushType = "voip";
notification.topic = "{ios_app_package_name}.voip";
notification.expiry = 0;
notification.priority = 5;


provider.send(notification, deviceToken).then((err, result) => {
    if (err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
});