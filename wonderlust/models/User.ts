import { model, models, Schema } from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`,
        },
    },
    user: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },
    password: {
        type: String,
        required: function(){return !this.isOAuth},
    },
    googleId: { type: String, unique: true, sparse: true },
     isOAuth: { type: Boolean, default: false },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const User = models.User || model('User', UserSchema);

export default User;
