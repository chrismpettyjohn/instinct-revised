## Overview
The Google Module provides a reusable service for Recaptcha

#### Recaptcha Service
Returns a boolean indicating if a recaptcha request was successful.
```typescript
import { GoogleRecaptchaService } from '@instinct-api/google';
const recaptchaService = new GoogleRecaptchaService();
const passed = await recaptchaService.passedVerification('recaptcha_request_id');
```
