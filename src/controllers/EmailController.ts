import { Request, Response, NextFunction } from "express";
import myQueue from "../queues/emailQueue";
import config from "../utils/config";

class EmailController {
  async sendEmail(req: Request, res: Response) {
    const { to, subject, htmlContent } = req.body;
    try {
      await myQueue.add("emailJob",{ to, subject, htmlContent });
      res.status(config.HTTP_CODES.CREATED).send({
        status: config.HTTP_CODES.CREATED,
        message: config.RESPONSE_MESSAGES.EMAIL_JOB,
      });
    } catch (error) {
      res
        .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .send(config.RESPONSE_MESSAGES.EMAIL_JOB_FAIL);
    }
  }
}
export default EmailController;
