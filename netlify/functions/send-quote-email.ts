import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface QuoteRequest {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  facilityType: string;
  serviceNeeded: string;
  comments: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  }

  try {
    const quoteData: QuoteRequest = JSON.parse(event.body || "{}");

    const facilityTypeMap: Record<string, string> = {
      medical: "Medical Clinic / Healthcare",
      office: "Office / Corporate",
      banking: "Bank / Financial Institution",
      dealership: "Vehicle Dealership",
      retail: "Retail / Commercial",
      other: "Other"
    };

    const serviceNeededMap: Record<string, string> = {
      commercial: "Commercial Cleaning",
      sanitation: "Sanitation & Disinfection",
      medical: "Medical Facility Cleaning",
      office: "Office Cleaning",
      banking: "Banking Facility Cleaning",
      dealership: "Dealership Cleaning",
      multiple: "Multiple Services"
    };

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background: linear-gradient(135deg, #1A3D7C 0%, #2a5294 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9f9f9;
      padding: 30px 20px;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .section h2 {
      color: #1A3D7C;
      margin-top: 0;
      font-size: 18px;
      border-bottom: 2px solid #7ABB00;
      padding-bottom: 10px;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      font-weight: bold;
      color: #1A3D7C;
      margin-bottom: 5px;
    }
    .field-value {
      color: #555;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🧹 New Quote Request</h1>
    <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">QuickPro Commercial Cleaning</p>
  </div>

  <div class="content">
    <div class="section">
      <h2>Business Information</h2>
      <div class="field">
        <div class="field-label">Business Name</div>
        <div class="field-value">${quoteData.businessName}</div>
      </div>
      <div class="field">
        <div class="field-label">Contact Name</div>
        <div class="field-value">${quoteData.contactName}</div>
      </div>
    </div>

    <div class="section">
      <h2>Contact Details</h2>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${quoteData.email}">${quoteData.email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Phone Number</div>
        <div class="field-value"><a href="tel:${quoteData.phone}">${quoteData.phone}</a></div>
      </div>
    </div>

    <div class="section">
      <h2>Service Request</h2>
      <div class="field">
        <div class="field-label">Facility Type</div>
        <div class="field-value">${facilityTypeMap[quoteData.facilityType] || quoteData.facilityType}</div>
      </div>
      <div class="field">
        <div class="field-label">Service Needed</div>
        <div class="field-value">${serviceNeededMap[quoteData.serviceNeeded] || quoteData.serviceNeeded}</div>
      </div>
    </div>

    ${quoteData.comments ? `
    <div class="section">
      <h2>Additional Comments</h2>
      <div class="field-value" style="white-space: pre-wrap;">${quoteData.comments}</div>
    </div>
    ` : ''}
  </div>

  <div class="footer">
    <p>This quote request was submitted via the QuickPro website contact form.</p>
    <p>Please respond within 24 hours.</p>
  </div>
</body>
</html>
    `;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'QuickPro Quote Requests <onboarding@resend.dev>',
        to: ['quickpro2025@gmail.com'],
        reply_to: quoteData.email,
        subject: `New Quote Request from ${quoteData.businessName}`,
        html: htmlEmail,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, messageId: result.id }),
    };
  } catch (error) {
    console.error('Error in send-quote-email function:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }),
    };
  }
};

export { handler };
