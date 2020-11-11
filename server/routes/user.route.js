import express from 'express';
import User from '../models/user.model';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';

const router = express.Router();


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ errors: [{ message: 'User already exist' }] });
        }

        const avatar = gravatar.url(email, {
            s: '200', 
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.send('User registered');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
    
});

export default router;