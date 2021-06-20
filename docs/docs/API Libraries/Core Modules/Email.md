## Overview
The Email Module provides a reusable service for sending emails via SendGrid

### SendGrid Information
Please refer to the [SendGrid docs](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates) for usage

### Example Usage
```
import { EmailService } from '@instinct-api/email';

const emailService = new EmailService();
emailService.send('user@gmail.com', 'template_123', { username: 'user' });
```
