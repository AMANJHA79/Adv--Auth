// Backend/brevo/brevo.config.js

import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

// Get default API client instance
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Set API key from .env
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Export the SDK and transactional email API instance
const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export { SibApiV3Sdk, transactionalEmailApi };
