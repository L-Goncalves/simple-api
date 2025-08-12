import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const REGION = process.env.AWS_REGION || "us-east-1";
const QUEUE_URL = process.env.SQS_QUEUE_URL || "";

const sqsClient = new SQSClient({ region: REGION });

export async function sendMessageToQueue(messageBody: string): Promise<void> {
  const params = {
    QueueUrl: QUEUE_URL,
    MessageBody: messageBody,
  };

  try {
    const command = new SendMessageCommand(params);
    await sqsClient.send(command);
    console.log("Message sent to SQS");
  } catch (err) {
    console.error("Error sending message to SQS:", err);
    throw err;
  }
}

