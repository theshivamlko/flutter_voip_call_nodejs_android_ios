
// Supports Android and iOS VOIP

var admin = require("firebase-admin");

var serviceAccount = require("./service_account.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://someproject.firebaseio.com"
});


var message = {

    token: "erBtiYiapUm9zx2uVGX:Afdjd7831Xt0iY--LTZnrTvcEict_YCoAVV8OQPUnu-vFmEgMlLrdks7JAn398kF87E28_AnMhyAmtu7pMy2se07y2_g9oF3P6X2WkPi5UFmwSKS_MDFN3yhSDEo",
    data: {  // Any JSON for App
        appointment_id: "2294",
        caller_name: "Dr. Test",
        appointmentUUId: "35R5f0f-6bb9-4Y64-97fe-d0377Yh7Yd66",
        caller_id: "1174",
        type: "TO_DOCTOR",
        click_action: "FLUTTER_NOTIFICATION_CLICK",
    },

    android: {
        restricted_package_name: "app.curer.test",

    },

    apns: {
        headers: {  // Must for iOS
            apns_priority: "5",
            apns_topics: "{ios_app_package_name}.voip",
            apns_expiration: "0",

        },
        payload:
            {

                aps: {
                    alert: {
                        "uuid": "93hg7ace4-98ca-44c9-at3-6488f6hfb37",
                        "incoming_caller_id": "0123456789",
                        "incoming_caller_name": "Tester"
                    },

                    mutable_content: 1,
                    sound: 'default',
                    badge: 5,
                    category: "NEW_MESSAGE_CATEGORY"

                }
            }
    },

};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message1:', response);

    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });