// Create Nitesh Admin User Script
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
        // Check if user already exists
        const existingUser = await User.findOne({ email: "nitesh@gmail.com" });
        
        if (existingUser) {
            console.log('User with nitesh@gmail.com already exists!');
            
            // Update password
            const newPassword = "nix@123";
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            
            await User.updateOne(
                { email: "nitesh@gmail.com" },
                { password: hashedPassword }
            );
            
            console.log(`\nPassword updated for nitesh@gmail.com`);
            console.log('New password: nix@123');
        } else {
            // Create new user
            const userPassword = "nix@123";
            const hashedPassword = await bcrypt.hash(userPassword, 10);
            
            const user = new User({
                username: "nitesh",
                email: "nitesh@gmail.com",
                password: hashedPassword
            });
            
            await user.save();
            console.log('User created successfully!');
            console.log('Email: nitesh@gmail.com');
            console.log('Username: nitesh');
            console.log(`Password: ${userPassword}`);
        }
        
        console.log('\nLogin Credentials:');
        console.log('Email: nitesh@gmail.com');
        console.log('Password: nix@123');
        console.log('\n✅ This account now has ADMIN access!');
        console.log('You will be redirected to admin dashboard (/userevents)');
        
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        mongoose.connection.close();
    }
});
