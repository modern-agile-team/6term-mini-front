require(`dotenv`).config();
const nodeMailer = require('nodemailer');

function FindId() {
    
    const mailPoster = nodeMailer.createTransport({
      service: 'Naver',
      host: 'smtp.naver.com',
      port: 587,
      auth: {
        user: 'jinjinstar3@naver.com',
        pass: process.env.NAVER_PW
      }
    });
    
    // 메일을 받을 유저 설정
    const mailOpt = (user_data, title, contents) => {
        const mailOptions = {
          from: 'jinjinstar3@naver.com',
          to: user_data.email ,
          subject: title,
          text: contents
        };
      
        return mailOptions;
      }
    
    // 메일 전송
    const sendMail = (mailOption) => {
        mailPoster.sendMail(mailOption, function(error, info){
          if (error) {
            console.log('에러 ' + error);
          }
          else {
            console.log('전송 완료 ' + info.response);
          }
        });
      }
}

export default FindId;