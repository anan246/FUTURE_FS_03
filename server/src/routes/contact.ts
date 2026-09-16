import { Router, Request, Response } from 'express';

const router = Router();

export interface ContactRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

// In-Memory store for contact inquiries
const contactStore: ContactRecord[] = [];

// GET /api/contact
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    count: contactStore.length,
    data: contactStore,
  });
});

// POST /api/contact
router.post('/', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide required fields: name, email, and message.',
    });
  }

  const newContact: ContactRecord = {
    id: `MSG-${Date.now().toString(36).toUpperCase()}`,
    name,
    email,
    phone: phone || '',
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString(),
  };

  contactStore.push(newContact);

  return res.status(201).json({
    success: true,
    message: 'Contact inquiry received successfully.',
    data: newContact,
  });
});

export default router;
