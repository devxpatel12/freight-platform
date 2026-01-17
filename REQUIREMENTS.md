# Regional Digital Freight & Trucking Platform - MVP Requirements

## 1. Project Overview

**Objective**: Build a regional digital freight and trucking marketplace MVP within 6 months.

**Target Regions**: Rajasthan, Gujarat, Delhi NCR, Haryana, Uttar Pradesh, Madhya Pradesh

**User Personas**:
- Fleet Owners (1-100 trucks)
- Truck Drivers
- Shippers (SMEs, factories, traders)
- Logistics Brokers
- Platform Admin

## 2. Scope Philosophy

### In Scope (MVP)
- Full Truck Load (FTL) only
- Regional, lane-based operations
- Manual and semi-automated workflows
- Strong admin-driven operations and overrides
- Mobile-first experience for drivers
- Third-party integrations:
  - Payments (Razorpay/Cashfree)
  - KYC/Identity verification (DigiLocker)
  - Notifications (SMS, WhatsApp)

### Explicitly Out of Scope (MVP)
- LTL/Partial load optimization
- Automated pricing or bidding engines
- Credit, lending, BNPL, or financing products
- Fuel cards or FASTag programs
- Advanced telematics hardware integration
- AI/ML-based optimization or recommendations

## 3. User Roles & Responsibilities

### 3.1 Fleet Owner
- Owns or manages 1-100 trucks
- Accepts loads
- Assigns drivers to trips
- Tracks trips and basic earnings
- KYC: Name, phone, company name (optional), PAN (optional)
- Can add and manage trucks (basic metadata)
- Can add and manage drivers

### 3.2 Driver
- Executes assigned trips
- Shares live location via mobile app
- Updates trip status
- Uploads Proof of Delivery (POD)
- Mobile-only onboarding
- Linked to a Fleet Owner

### 3.3 Shipper
- Posts freight loads
- Tracks truck movement
- Confirms delivery
- KYC: Company name, contact person details, GSTIN (optional)

### 3.4 Logistics Broker
- Posts loads on behalf of shippers
- Assigns trucks to loads
- Earns commissions
- KYC: Company name, contact person details, GSTIN (optional)

### 3.5 Platform Admin
- Approves and manages users
- Manages disputes and exceptions
- Overrides bookings and assignments
- Controls commissions and payment status
- Monitors platform operations

## 4. Functional Requirements

### 4.1 User Onboarding & Authentication
**Common**:
- Mobile number based OTP login
- Role selection during onboarding
- Admin approval required for Fleet Owners and Brokers

**Identity Verification**:
- DigiLocker integration for optional document verification
- Admin override in case of verification failures

### 4.2 Load Posting (Shipper/Broker)
**Mandatory Fields**:
- Source location (city/district)
- Destination location (city/district)
- Truck type (20ft/32ft/Trailer, etc.)
- Approximate load weight
- Pickup date

**Optional Fields**:
- Expected price
- Notes or special instructions

### 4.3 Load Discovery & Acceptance (Fleet Owner)
- View list of open loads
- Filter loads by:
  - Source
  - Destination
  - Truck type
  - Pickup date
- Accept or reject loads
- Admin-assisted approval or override if required

### 4.4 Trip Lifecycle Management
**Trip Statuses**:
1. Load Accepted
2. Driver Assigned
3. Loaded
4. In Transit
5. Delivered
6. Closed

**Fleet Owner Actions**:
- Assign driver to trip

**Driver Actions**:
- Update trip status
- View trip details

### 4.5 Tracking
- GPS tracking via mobile app (background location)
- Fallback option using Google Maps live location link
- Tracking visible to shipper, broker, and admin
- Accuracy requirement: operational visibility, not telematics-grade precision

### 4.6 Proof of Delivery (POD)
- Upload 1-3 delivery images
- Optional delivery OTP confirmation
- Timestamped submission stored securely

### 4.7 Payments & Settlement (MVP - Semi-Automated)
- Payment gateway integration (Razorpay/Cashfree equivalent)
- No escrow or wallet in MVP
- Admin-controlled payment workflow:
  - Pending
  - Paid
- Record and track:
  - Amount
  - Payment date
  - Reference ID
- Webhook handling and reconciliation support required

### 4.8 Notifications
- SMS integration for critical events
- WhatsApp integration for:
  - Trip status updates
  - Delivery confirmation
- Template-based messaging with fallback logic

### 4.9 Ratings & Basic Trust Signals (Optional but Recommended)
- Shipper ↔ Fleet Owner ratings (1-5 scale)
- Admin moderation of ratings

## 5. Admin Panel Requirements

Admin must be able to:
- Approve, reject, or block users
- View and manage all loads and trips
- Manually assign or override trips
- View and manage commissions
- Update payment status
- Handle disputes and exceptions

**Note**: The admin panel is critical for MVP success and is expected to compensate for limited automation.

## 6. Geography & Lane Management
- Ability to configure active lanes
- Soft restriction to specific states
- No hard geo-fencing required for MVP

## 7. Non-Functional Requirements

### 7.1 Performance
- Support ~2,000 active users
- Up to 500 concurrent drivers

### 7.2 Security
- JWT-based authentication
- Role-based access control
- Secure storage of PODs and documents

### 7.3 Availability
- Single-region deployment acceptable
- Daily automated backups

## 8. Technology Stack

**Backend**: Node.js (NestJS preferred)
**Database**: PostgreSQL
**Frontend Web**: React / Next.js
**Mobile App**: React Native / Expo
**Infrastructure**: AWS (EC2, RDS, S3)
**Architecture**: Monolithic architecture preferred for MVP

*Note: Engineering teams may propose alternatives with justification.*

## 9. Deliverables

1. Backend APIs
2. Web application (Shipper, Broker, Admin)
3. Mobile application (Driver, Fleet Owner)
4. Database schema and migrations
5. Basic DevOps and deployment setup
6. Pilot deployment
7. Technical and operational documentation

## 10. Timeline Expectation

**Total Duration**: 6 months

**Suggested Phases**:
- Month 1: Discovery, UX, architecture, integrations planning
- Month 2-3: Core marketplace development
- Month 4: Driver app, tracking, and integrations
- Month 5: Pilot, QA, and hardening
- Month 6: Launch readiness and handover

## 11. Future Roadmap (Not for MVP)

- Advanced automated payments
- Credit and lending products
- Fuel and FASTag integrations
- Advanced analytics and reporting
- Pan-India rollout

