const jwt = require('jsonwebtoken');
const db = require('../config/db_pg');

// @route   POST /api/admin/login
// @desc    Authenticate admin & get token
const login = (req, res) => {
    const { username, password } = req.body;

    // Trim to avoid invisible whitespace issues
    const inputUser = (username || '').trim();
    const inputPass = (password || '').trim();

    const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || 'admin').trim();
    const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || 'admin@aapthi2026').trim();

    // Debug log (visible in Render logs)
    console.log(`Login attempt → user: "${inputUser}" | env_user: "${ADMIN_USERNAME}" | match: ${inputUser === ADMIN_USERNAME && inputPass === ADMIN_PASSWORD}`);

    if (inputUser === ADMIN_USERNAME && inputPass === ADMIN_PASSWORD) {
        const payload = {
            user: {
                username: ADMIN_USERNAME
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: '10h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, message: 'Login successful' });
            }
        );
    } else {
        res.status(400).json({
            message: 'Invalid Credentials',
            hint: `Expected user: "${ADMIN_USERNAME}" — received: "${inputUser}"`
        });
    }
};

// @route   GET /api/admin/contacts
// @desc    Get all contact inquiries
const getContacts = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM contact_inquiries ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @route   GET /api/admin/careers
// @desc    Get all careers applications/resumes
const getCareers = async (req, res) => {
    try {
        // Depending on what we want to fetch. We have `careers` table and `resume_uploads` table.
        // Assuming we want to view uploaded resumes here.
        const result = await db.query('SELECT * FROM resume_uploads ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching careers:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    login,
    getContacts,
    getCareers
};
