export type UserRole = "shipper" | "broker" | "fleet_owner" | "driver" | "admin";

export type TripStatus =
  | "load_accepted"
  | "driver_assigned"
  | "loaded"
  | "in_transit"
  | "delivered"
  | "closed";

export type PaymentStatus = "pending" | "paid";

export interface User {
  id: string;
  name: string;
  phone: string;
  role: UserRole;
  companyName?: string;
  pan?: string;
  gstin?: string;
  status: "pending" | "approved" | "rejected" | "blocked";
  createdAt: string;
}

export interface Truck {
  id: string;
  fleetOwnerId: string;
  type: "20ft" | "32ft" | "trailer" | "other";
  registrationNumber: string;
  capacity?: number;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  fleetOwnerId: string;
  status: "active" | "inactive";
}

export interface Load {
  id: string;
  shipperId: string;
  brokerId?: string;
  source: string;
  destination: string;
  truckType: "20ft" | "32ft" | "trailer" | "other";
  weight: number;
  pickupDate: string;
  expectedPrice?: number;
  notes?: string;
  status: "open" | "accepted" | "in_progress" | "completed" | "cancelled";
  createdAt: string;
}

export interface Trip {
  id: string;
  loadId: string;
  fleetOwnerId: string;
  driverId?: string;
  status: TripStatus;
  assignedAt?: string;
  loadedAt?: string;
  inTransitAt?: string;
  deliveredAt?: string;
  closedAt?: string;
  paymentStatus: PaymentStatus;
  paymentAmount?: number;
  paymentDate?: string;
  paymentReferenceId?: string;
}

export interface POD {
  id: string;
  tripId: string;
  images: string[];
  otpVerified?: boolean;
  submittedAt: string;
}

