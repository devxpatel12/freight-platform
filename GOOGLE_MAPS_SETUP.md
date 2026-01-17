# Google Maps API Setup Guide

## Required APIs

To enable map functionality in the application, you need to enable the following APIs in Google Cloud Console:

### 1. Maps Static API (Required for vehicle location tracking)
- **API Name**: Maps Static API
- **Enable Link**: https://console.cloud.google.com/apis/library/static-maps-backend.googleapis.com
- **Used for**: Showing exact vehicle location with custom markers and route visualization

### 2. Maps Embed API (Optional - for interactive maps)
- **API Name**: Maps Embed API
- **Enable Link**: https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com
- **Used for**: Interactive embedded maps (fallback available)

### 3. Directions API (Optional - for route calculation)
- **API Name**: Directions API  
- **Enable Link**: https://console.cloud.google.com/apis/library/directions-backend.googleapis.com
- **Used for**: Calculating routes (currently using direct coordinates)

## Setup Steps

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Select or Create a Project**
   - Create a new project or select an existing one

3. **Enable the Required APIs**
   - Click on "APIs & Services" → "Library"
   - Search for and enable:
     - **Maps Static API** (Required for vehicle tracking)
     - **Maps Embed API** (Optional)
     - **Directions API** (Optional)

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

5. **Restrict API Key (Recommended)**
   - Click on your API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose:
     - Maps Static API (Required)
     - Maps Embed API (Optional)
     - Directions API (Optional)
   - Under "Application restrictions", you can restrict by HTTP referrer for web apps

6. **Add API Key to Application**
   - Create a `.env.local` file in the `web-app` directory
   - Add your API key:
     ```
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
     ```

7. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Alternative: Use Direct Google Maps Links (No API Key Required)

If you don't want to set up API keys, the application will automatically fall back to direct Google Maps links, which work without any API setup. Users can click the "Open in Google Maps" button to view locations and routes.

## Troubleshooting

### Error: "This API is not activated"
- Make sure you've enabled **Maps Static API** (required for vehicle tracking)
- Optionally enable **Maps Embed API** and **Directions API** for additional features
- Wait a few minutes after enabling for the changes to propagate
- Check that your API key has the correct restrictions

### Error: "RefererNotAllowedMapError"
- Add your domain to the HTTP referrer restrictions in API key settings
- For local development, you can add: `localhost:*` and `127.0.0.1:*`

### Map Not Showing
- Check browser console for errors
- Verify API key is correctly set in `.env.local`
- Ensure the API key is not restricted incorrectly
- Try the direct Google Maps link as a fallback

## Cost Information

- **Maps Static API**: 
  - First 28,000 requests per month: Free
  - After that: $2.00 per 1,000 requests
- **Maps Embed API**: Free (unlimited requests)
- **Directions API**: 
  - First 28,000 requests per month: Free
  - After that: $5.00 per 1,000 requests

For MVP/prototype usage, you'll likely stay within the free tier.

