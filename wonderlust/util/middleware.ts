import jwt from 'jsonwebtoken';


export const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers?.get('authorization');
    const token = authHeader.split(' ')[1];
    
    if (!token || token == null) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }
      req.user = user; 
      next();
    });
  };