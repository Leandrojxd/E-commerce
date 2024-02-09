// src/pages/api/sms/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

// Configura Twilio con tus credenciales
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      console.log(process.env.TWILIO_ACCOUNT_SID)
      await client.messages.create({
        body:"",
        from: twilioPhoneNumber,
        to:"whatsapp:+",
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, error: 'Failed to send message' });
    }
  } else {
    // Si no es una solicitud POST, responde con un error 405 (Method Not Allowed)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

