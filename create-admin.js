// Create Admin User Script
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require('./models/usermodel');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/EventManagementWebAppDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
    
    try {
        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: "ADMIN@EVENTS.com" });
        
        if (existingAdmin) {
            console.log('Admin user already exists!');
            console.log('Email: ADMIN@EVENTS.com');
            console.log('Username: ADMIN');
            console.log('Password is encrypted - cannot be retrieved');
            
            // Option to update password
            const newPassword = "admin123"; // You can change this
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            
            await User.updateOne(
                { email: "ADMIN@EVENTS.com" },
                { password: hashedPassword }
            );
            
            console.log(`\nAdmin password updated to: ${newPassword}`);
            console.log('Please login with:');
            console.log('Email: ADMIN@EVENTS.com');
            console.log('Password: admin123');
        } else {
            // Create new admin user
            const adminPassword = "admin123"; // Default password
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            
            const admin = new User({
                username: "ADMIN",
                email: "ADMIN@EVENTS.com",
                password: hashedPassword
            });
            
            await admin.save();
            console.log('Admin user created successfully!');
            console.log('Email: ADMIN@EVENTS.com');
            console.log('Username: ADMIN');
            console.log(`Password: ${adminPassword}`);
        }
        
        console.log('\nYou can now login to the admin panel!');
        
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        mongoose.connection.close();
    }
});
