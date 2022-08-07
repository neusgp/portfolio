import AWS from "aws-sdk";
/* import secrets from "../../secrets.json"; */

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: "eu-central-1",
});

export default function formularHandler(req, res) {
    console.log("contact formular data", req.body);

    const { firstname, lastname, email, message } = req.body;

    const myEmail = "neuspiano@gmail.com";

    ses.sendEmail({
        Source: "My Portfolio <neuspiano@gmail.com>",
        Destination: {
            ToAddresses: [myEmail],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${firstname} ${lastname}
                    Email: ${email}
                    Message: ${message}`,
                },
            },
            Subject: {
                Data: `My Dev Portfolio: NEW MESSAGE: ${firstname} ${lastname}`,
            },
        },
    })
        .promise()
        .then(() => {
            console.log("it worked!");
            res.json({ sucess: true });
        })
        .catch((err) => console.log(err));
}
