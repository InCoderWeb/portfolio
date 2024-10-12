import { sendEmail } from "@/utils/mail.utils"

export async function POST(request: Request) {
    const formData = await request.json();
    const sender = {
        name: "You have a new contact form submission",
        address: "info.incoderweb@gmail.com"
    }

    const receipients = [{
        name: "Ashutosh Kumar",
        address: "ashutoshtiwary2021@gmail.com"
    }]
    
    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: formData.subject,
            message: formData.message,
        }, formData.UserName, formData.email)

        return Response.json({
            status: 1,
            result,
            message: "Message Sent Successfully."
        })
    } catch (error) {
        console.error("Error sending email:", error); // Log the error for debugging
        return Response.json({
            status: 500,
            error,
            message: "Unable to send email this time."
        });
    }
}