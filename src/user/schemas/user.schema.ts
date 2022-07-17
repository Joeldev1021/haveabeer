// External modules
import mongoose from 'mongoose';

// Internal modules
import { IUser } from 'user/interfaces/user.interface';

const User = new mongoose.Schema({
    // Personal
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    creditCard: { type: String, required: true },

    // Profile 
    username: { type: String, required: true },
    description: { type: String, required: false },
    donations: { type: Number, required: false },

    // Status
    isActive: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', User);