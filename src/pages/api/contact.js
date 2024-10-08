// pages/api/contact.js

import sendEmail from '@/utils/sendEmail';

// Handles POST requests to /api/contact
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        const name = formData?.name;
        const email = formData?.email;
        const mobile = formData?.mobile;
        const message = formData?.message;

        const htmlContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <h2 style="text-align: center; color: #007bff;">Contact Notification</h2>
                <p>Hello,</p>
                <p>You have received a new message from your website:</p>
                <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile:</strong> ${mobile}</p>
                    <p><strong>Message:</strong>${message}</p>
                </div>
                <p>Please respond to this message promptly.</p>
                <p>Best regards,<br>Shreeju Investments Team</p>
            </div>
        </div>
        `;

        try {
            await sendEmail(["shreeju.nagarajan@gmail.com", "neema15795@gmail.com"], `${name} has contacted from Shreeju Investments Website`, htmlContent);
            res.status(200).json({ message: "Success: email was sent" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "COULD NOT SEND MESSAGE" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
