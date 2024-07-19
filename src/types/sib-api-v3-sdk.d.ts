declare module 'sib-api-v3-sdk' {
    export class ApiClient {
      static instance: any;
    }
  
    export class SendSmtpEmail {
      constructor(data?: any);
      to: { email: string }[];
      subject: string;
      htmlContent: string;
      sender: { email: string; name?: string };
    }
  
    export class TransactionalEmailsApi {
      sendTransacEmail(sendSmtpEmail: SendSmtpEmail): Promise<any>;
    }
  }