# Asian India Trans Logistics - Web Application Prototypes

This is the web application prototype for Asian India Trans Logistics - Regional Digital Freight & Trucking Platform MVP. It includes three main portals:

1. **Shipper/Broker Portal** - For posting loads, tracking shipments, and managing payments
2. **Fleet Owner Portal** - For discovering loads, managing drivers, and tracking trips
3. **Admin Panel** - For managing users, loads, trips, and payments

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built with Tailwind
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Navigate to the web-app directory:
```bash
cd web-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
web-app/
├── app/                    # Next.js App Router pages
│   ├── shipper/           # Shipper portal pages
│   ├── broker/            # Broker portal pages
│   ├── fleet-owner/      # Fleet Owner portal pages
│   ├── admin/             # Admin panel pages
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── Layout.tsx        # Main layout component
├── lib/                   # Utility functions and types
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── package.json          # Dependencies and scripts
```

## Features Implemented

### Shipper/Broker Portal
- ✅ Dashboard with statistics
- ✅ Post new load form
- ✅ View all loads with filters
- ✅ Payment status tracking

### Fleet Owner Portal
- ✅ Dashboard with statistics
- ✅ Discover loads with filters
- ✅ Driver management
- ✅ Trip management
- ✅ Earnings dashboard

### Admin Panel
- ✅ Dashboard with overview statistics
- ✅ User management (approve/reject/block)
- ✅ Load management
- ✅ Trip management
- ✅ Payment management

## Key Pages

### Landing Page (`/`)
- Portal selection page

### Shipper Portal
- `/shipper` - Dashboard
- `/shipper/loads/new` - Post new load
- `/shipper/loads` - View all loads
- `/shipper/payments` - Payment status

### Broker Portal
- `/broker` - Dashboard
- `/broker/loads/new` - Post new load
- `/broker/loads` - View all loads
- `/broker/payments` - Payment status

### Fleet Owner Portal
- `/fleet-owner` - Dashboard
- `/fleet-owner/loads` - Discover loads
- `/fleet-owner/trips` - My trips
- `/fleet-owner/drivers` - Driver management
- `/fleet-owner/earnings` - Earnings dashboard

### Admin Panel
- `/admin` - Dashboard
- `/admin/users` - User management
- `/admin/loads` - Load management
- `/admin/trips` - Trip management
- `/admin/payments` - Payment management

## Notes

- This is a **prototype** with mock data
- Authentication is not fully implemented (UI only)
- API integration is stubbed (ready for backend connection)
- All data is currently hardcoded for demonstration purposes

## Next Steps

1. Integrate with backend API
2. Implement authentication (OTP-based login)
3. Add real-time tracking features
4. Connect payment gateway
5. Add notification system
6. Implement file uploads for POD

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

