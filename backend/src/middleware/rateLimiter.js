import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("global");
        if (!success) {
            return res.status(429).json({ message: "Too many requests, try again later" });
        }
        
        next();

    } catch (error) {
        console.error("Error in rateLimiter:", error);
        res.status(500).json({ message: "Server error" });
        next(error);
    }
};

export default rateLimiter;