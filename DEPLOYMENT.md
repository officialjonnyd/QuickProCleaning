# Deployment Guide for Netlify

This project is configured to deploy to Netlify with serverless functions for email sending.

## Prerequisites

1. A Netlify account
2. A Resend account with an API key

## Environment Variables

You need to set the following environment variable in your Netlify site settings:

### RESEND_API_KEY

Your Resend API key for sending emails.

**How to set it up:**

1. Go to your Netlify site dashboard
2. Navigate to: Site settings → Environment variables
3. Click "Add a variable"
4. Set the key as: `RESEND_API_KEY`
5. Set the value as your Resend API key (starts with `re_`)
6. Click "Save"

## Deployment Steps

### Option 1: Deploy via GitHub

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Set the `RESEND_API_KEY` environment variable (see above)
5. Deploy!

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify login`
3. Run: `netlify init`
4. Set the environment variable: `netlify env:set RESEND_API_KEY your_key_here`
5. Deploy: `netlify deploy --prod`

## Build Configuration

The `netlify.toml` file contains all the necessary build configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

## Email Functionality

The contact form uses a Netlify serverless function (`send-quote-email`) to send emails via Resend. This function:

- Receives form submissions from the contact page
- Formats the data into a professional HTML email
- Sends the email to: quickpro2025@gmail.com
- Returns success/error status to the frontend

## Testing Locally

To test the Netlify functions locally:

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify dev`
3. This will start a local development server with functions support
4. Make sure to set `RESEND_API_KEY` in your local environment or `.env` file

## Troubleshooting

If emails aren't sending:

1. Check that `RESEND_API_KEY` is set in Netlify environment variables
2. Verify the API key is valid in your Resend dashboard
3. Check the Netlify function logs for errors
4. Ensure your Resend account is verified and has sending permissions
