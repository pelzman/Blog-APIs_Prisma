import {
  ApiClient,
  TransactionalEmailsApi,
  SendSmtpEmail,
} from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();
console.log('Brevo API Key:', process.env.BREVO_API_KEY);

class EmailService {
  private apiInstance: TransactionalEmailsApi;
  constructor() {
    const defaultClient = ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    this.apiInstance = new TransactionalEmailsApi();
  }
  async sendEmail(to: string, subject: string, htmlContent: string) {
    const sendSmtpEmail = new SendSmtpEmail({
      to: [{ email: to}],

      subject: "Welcome home",
      htmlContent,
      sender: { email: "oluwapelumi72@gmail.com", firstName:"Oluwapelumi", lastName:"Adeyemo" },
    });

    try {
      const response = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log("email sent successfully", response);
      return response;
    } catch (error) {
      console.log("error sending email", error);
      throw error;
    }
  }
}

export default EmailService;
