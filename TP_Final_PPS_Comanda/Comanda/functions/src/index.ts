import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

admin.initializeApp();


const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    }
});



exports.validarMail = functions.https.onRequest((req, res) => {

    const db = admin.firestore()
    console.log('en validar mail query:?  ', req.query.id)
    db.collection("users").doc(req.query.id).update("registrado", "true")
        .then((data: any) => {
            return res.send('El registro se ha concretado correctamente. Bienvenido a LA COMANDA MADOURIZZI!');
        }).catch((data: any) => {
            return res.send(' Error!');
        });

})


exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {

        const dest = req.query.dest;
        const idUsr = req.query.id;

        const mailOptions = {
            from: 'La comanda Madou Rizzi <madourizzi@gmail.com>',
            to: dest,
            subject: 'Verificacion de correo',
            html: " <p style='font-size: 16px;'>Le damos la bienvenida a LA COMANDA MADOURIZZI. <br>Por favor hace click en el siguiente enlace para terminar el proceso de registro de usuario:<br><a href='https://us-central1-lacomandapps.cloudfunctions.net/validarMail?id=" + idUsr + "'>Validar Correo Electrónico</a></p>"
            

        };

        try {
            await transporter.sendMail(mailOptions, (erro: any, info: any) => {
                return res.send('Enviado OK');
            });
        } catch (error) {
            return res.send('error en respuesta firebase funciont ' + error.toJSON());
        }
        return null;
    });
});

exports.createUser = functions.firestore
    .document('/users/{uid}')
    .onCreate(async (snap, context) => {

        const payload = {
            notification: {
                title: 'Bienvenido a La Comanda MadouRizzi',
                body: `En breve le avisaremos los pasos a seguir`,
                icon: 'https://goo.gl/Fz9nrQ'
            }
        }

        const db = admin.firestore()
        const devicesRef = db.collection("devices")
        const devices = await devicesRef.get();

        const tokens = new Array();

        devices.forEach((result: { data: () => { token: any, perfil: string }; }) => {
            if (result.data().perfil === 'admin') {
                const token = result.data().token;

                tokens.push(token)
            }
        })

        return admin.messaging().sendToDevice(tokens, payload)

    });

exports.AltaPedido = functions.firestore
    .document('pedidos/{pedidoId}')
    .onCreate(async (snap, context) => {

        const payload = {
            notification: {
                title: 'Atención mozos',
                body: `Se ha cargado un nuevo pedido!`

            }
        }
        const db = admin.firestore()
        const devicesRef = db.collection("devices")
        const devices = await devicesRef.get();

        const tokens = new Array();

        devices.forEach((result: { data: () => { token: any, perfil: string }; }) => {

            if (result.data().perfil === 'mozo') {
                const token = result.data().token;

                tokens.push(token)
            }

        })

        return admin.messaging().sendToDevice(tokens, payload)

    });

exports.SolicitudMesa = functions.https.onRequest(async (req, res) => {

    const payload = {
        notification: {
            title: 'Aviso!',
            body: `El cliente: ${req.param('nombre')}  esta solicitando una mesa! `
        }
    }

    const db = admin.firestore()
    const devicesRef = db.collection("devices")
    const devices = await devicesRef.get();

    const tokens = new Array();

    devices.forEach((result: { data: () => { token: any, perfil: string }; }) => {

        if (result.data().perfil === 'mozo' || result.data().perfil === 'admin') {
            const token = result.data().token;

            tokens.push(token)
        }

    })

    cors(req, res, () => {
        res.status(200).send();
    });

    return admin.messaging().sendToDevice(tokens, payload)

});

exports.pushListaEspera = functions.firestore
    .document('listaEspera/{clienteId}')
    .onCreate(async (snap, context) => {

        const payload = {
            notification: {
                title: 'Cliente en espera.',
                body: `Se agrego un nuevo cliente a la lista de espera.`

            }
        }

        const db = admin.firestore()
        const devicesRef = db.collection("devices")
        const devices = await devicesRef.get();
        const tokens = new Array();

        devices.forEach((result: { data: () => { token: any, perfil: string, tipo: string }; }) => {

            if (result.data().tipo === 'mozo') {
                const token = result.data().token;

                tokens.push(token)
            }

        })

        return admin.messaging().sendToDevice(tokens, payload)

    });

exports.EstadoReserva = functions.https.onRequest(async (req, res) => {
    const idUsuario = req.query.uid;
    const respuesta = req.query.estado;

    const payload = {
        notification: {
            title: 'Estado de Reserva',
            body: `Te informamos que tu reserva fue ${respuesta}.`
        }
    }
    const db = admin.firestore()
    const devicesRef = db.collection("devices")
    const devices = await devicesRef.get();
    const tokens = new Array();

    devices.forEach((result: { data: () => { token: any, perfil: string, id: string }; }) => {

        if (result.data().id === idUsuario) {
            const token = result.data().token;

            tokens.push(token)
        }

    })

    cors(req, res, () => {
        res.status(200).send();
    });

    return admin.messaging().sendToDevice(tokens, payload)

});