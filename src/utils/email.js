const nodemailer = require("nodemailer");

const senMailOrder = async (email) => {
    try {


      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "ductam23022001@gmail.com",
          pass: "isaobbdkgollykms",
        },
      });

      const info = await transporter.sendMail({
        from: '"Travel Booking" <ductam23022001@gmail.com>', // sender address
        to: email, 
        subject: "THANKS YOUR BOOKING",
        html: `
                         <h1>Your booking successfully.Thanks !</h1> 
                        `,
      });
      res.json("send mail success !");
    } catch (error) {
        
    }
};

const senMailSuccess = async(email) => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "ductam23022001@gmail.com",
          pass: "isaobbdkgollykms",
        },
      });

      const info = await transporter.sendMail({
        from: '"Travel Booking" <ductam23022001@gmail.com>', // sender address
        to: email, 
        subject: "BOOKING  APPROVE",
        html: `
                   <h1>Your booking has been 
                   approve.We will contact with you in time lastest !</h1> 
                  `,
      });

      res.json('send mail success !'); 
    } catch (error) {
        
    }
};


const senMailResetPass = async(email,newPass) => {
    try {


      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "ductam23022001@gmail.com",
          pass: "isaobbdkgollykms",
        },
      });


      const info = await transporter.sendMail({
        from: '"Travel Booking" <ductam23022001@gmail.com>', // sender address
        to: email, 
        subject: "RESET PASSWORD",
        html: `
                   <span>Your new password for email ${email} is: ${newPass}</span>
                  `,
      });


    
            res.json('send mail success !'); 
        
    } catch (error) {
        
    }
};
module.exports = {senMailOrder,senMailSuccess,senMailResetPass}
