import { Router } from 'express';
import {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
  exportCSV,
} from '../controllers/leadController';
import auth from '../middleware/auth';
import adminOnly from '../middleware/role';

const router = Router();

router.get('/export/csv', auth, exportCSV);
router.get('/', auth, getLeads);
router.get('/:id', auth, getLead);
router.post('/', auth, createLead);
router.put('/:id', auth, updateLead);
router.delete('/:id', auth, adminOnly, deleteLead);

export default router;