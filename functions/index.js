const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

// Смена региона и таймаута для Firebase Functions (если необходимо)
// functions = functions.region('us-east1').runWith({
//   timeoutSeconds: 60 * 9, // 9 minutes
// });

const transporter = nodemailer.createTransport({
  // service: 'Gmail',
  // Либо указываем SMTP-опции, взамен параметра "service":
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
    user: email,
    pass: password,
  },
});

transporter.use('compile', htmlToText());

const formatCurrency = (value) => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

const sendOrderEmail = (data) => {
  let total = 0;

  const options = {
    from: `MrDonaldz® <${email}>`,
    to: data.clientEmail,
    subject: `Ваш заказ из MrDonaldz™`,
    html: `
      <div>
        <h2>Добрый день, <span style="color: #732c0b;">${data.clientName}</span>!</h2>
        <h3>Ваш заказ:</h3>
        <ul>
          ${data.order
            .map(({ name, price, count, topping, choice }) => {
              const toppings =
                topping !== 'no topping'
                  ? (() => {
                      price += price * 0.1 * topping.length;

                      return `&nbsp;<strong style="color: #000000;">&brvbar;&brvbar;</strong>&nbsp;Добавки:
                             ${topping.join(', ')}`;
                    })()
                  : '';

              const choices =
                choice !== 'no choice'
                  ? `&nbsp;<strong style="color: #000000;">&brvbar;&brvbar;</strong>&nbsp;Ваш выбор: ${choice}`
                  : '';

              total += price * count;

              return `<li style="color: #732c0b;">
                        <strong style="color: #750000;">${name}</strong>&nbsp;<strong style="color: #000000;">&brvbar;&brvbar;</strong>
                        Итого: <span style="color: #750000;">${count} шт.</span>, по цене
                        <span style="color: #750000;">${formatCurrency(price)}</span>${toppings}${choices}
                      </li>`;
            })
            .join('\n')}
        </ul>
        <h3>
          Всего: ${formatCurrency(total)}
        </h3>
        <small>Ожидайте курьера!</small>
      </div>
    `,
  };

  transporter.sendMail(options);
};

exports.sendUserEmail = functions.database.ref('orders/{pushID}').onCreate((order) => sendOrderEmail(order.val()));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
