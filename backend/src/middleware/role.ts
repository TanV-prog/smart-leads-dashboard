import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';

const adminOnly = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (req.user?.role !== 'admin') {
    res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
    return;
  }
  next();
};

export default adminOnly;
