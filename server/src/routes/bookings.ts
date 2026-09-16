import { Router, Request, Response } from 'express';

const router = Router();

export interface BookingRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  specialRequests?: string;
  createdAt: string;
}

// In-Memory store for bookings
const bookingsStore: BookingRecord[] = [];

// GET /api/bookings
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    count: bookingsStore.length,
    data: bookingsStore,
  });
});

// POST /api/bookings
router.post('/', (req: Request, res: Response) => {
  const { name, email, phone, date, time, guests, seatingArea, specialRequests } = req.body;

  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required booking fields: name, email, phone, date, time, guests.',
    });
  }

  const newBooking: BookingRecord = {
    id: `BK-${Date.now().toString(36).toUpperCase()}`,
    name,
    email,
    phone,
    date,
    time,
    guests: Number(guests),
    seatingArea: seatingArea || 'indoor',
    specialRequests: specialRequests || '',
    createdAt: new Date().toISOString(),
  };

  bookingsStore.push(newBooking);

  return res.status(201).json({
    success: true,
    message: 'Table reservation successfully placed.',
    data: newBooking,
  });
});

export default router;
