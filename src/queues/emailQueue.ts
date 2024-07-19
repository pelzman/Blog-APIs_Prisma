import { Queue, Worker} from "bullmq";
import IORedis from "ioredis";
import EmailService from "../services/EmailSerivice";

const emailService = new EmailService();
//connecting redis to docker
const connection = new IORedis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});
const myQueue = new Queue("myQueue", { connection });
const worker = new Worker(
  "myQueue",
  async (job) => {
    const { to, subject, htmlContent } = job.data;
    try {
      await emailService.sendEmail(to, subject, htmlContent);
    } catch (error: any) {}
  },
  
  { connection }
);

export default myQueue;
