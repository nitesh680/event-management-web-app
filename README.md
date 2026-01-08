<<<<<<< HEAD
# Event Management Web App

A modern, feature-rich event management system built with Node.js, Express, and MongoDB. This application provides comprehensive event management capabilities with user authentication, admin controls, and a beautiful responsive UI.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure login/registration with bcrypt password hashing
- **Role-Based Access**: Admin and user roles with different dashboards
- **Event Management**: Create, view, update, and delete events
- **Admin Approval System**: Admin approval required for event publishing
- **Messaging System**: Admin-to-user communication
- **Password Management**: Secure password change functionality

### UI/UX Features
- **Modern Design**: Beautiful gradient-based UI with glassmorphism effects
- **Responsive Layout**: Fully responsive design for all devices
- **Smooth Animations**: CSS transitions and hover effects
- **Interactive Elements**: Enhanced buttons, forms, and navigation
- **Professional Color Scheme**: Purple-blue gradient theme

### Technical Features
- **Database**: MongoDB with Mongoose ODM
- **Security**: bcrypt password hashing, session management
- **File Uploads**: Multer for file handling
- **Templating**: EJS for dynamic content
- **Frontend**: Bootstrap, Semantic UI, DataTables

## 📋 Prerequisites

1. **Node.js** (v14 or higher)
2. **MongoDB** (v4.4 or higher)
3. **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd event-management-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env file
   MONGODB_URI=mongodb://localhost:27017/EventManagementWebAppDB
   PORT=3000
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running
   mongod
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Or production mode
   node app.js
   ```

## 🔑 Default Admin Accounts

### Primary Admin
- **Email**: `ADMIN@EVENTS.com`
- **Username**: `ADMIN`
- **Password**: `admin123`

### Secondary Admin
- **Email**: `nitesh@gmail.com`
- **Username**: `nitesh`
- **Password**: `nix@123`

> **Note**: Both accounts have full admin access and redirect to admin dashboard (`/userevents`)

## 📁 Project Structure

```
event-management-web-app/
├── models/                 # Database models
│   ├── usermodel.js       # User schema
│   └── postmodel.js       # Event schema
├── routes/                # Application routes
│   ├── login.js           # Login routes
│   ├── signup.js          # Registration routes
│   ├── home.js            # User dashboard
│   ├── newevent.js        # Event creation
│   ├── changepassword.js  # Password change
│   ├── logout.js          # Logout functionality
│   ├── messages.js        # Messaging system
│   └── Admin/            # Admin-specific routes
│       ├── userevents.js
│       ├── actions.js
│       ├── approvalrequests.js
│       ├── adminchangepass.js
│       ├── addnewuser.js
│       └── sendmessage.js
├── views/                # EJS templates
│   ├── partials/         # Reusable components
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   ├── Admin-Header.ejs
│   │   └── Admin-Footer.ejs
│   ├── index.ejs         # Login/Signup page
│   ├── Home.ejs          # User dashboard
│   ├── newevent.ejs      # Event creation form
│   ├── changepassword.ejs
│   └── admin views...
├── middlewares/           # Custom middleware
│   └── checkAuth.js      # Authentication middleware
├── public/               # Static assets
│   ├── css/
│   │   └── style5.css   # Main stylesheet
│   ├── images/
│   └── uploads/          # File upload directory
├── app.js               # Main application file
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 UI/UX Enhancements

### Modern Design Elements
- **Gradient Backgrounds**: Purple-blue color scheme
- **Glassmorphism**: Frosted glass effects on cards and panels
- **Smooth Animations**: CSS transitions and hover effects
- **Responsive Design**: Mobile-first approach with breakpoints
- **Interactive Navigation**: Animated sidebar and menu items

### Key Features
- **Animated Sidebar**: Collapsible navigation with smooth transitions
- **Enhanced Forms**: Modern input styling with focus effects
- **Interactive Buttons**: Gradient backgrounds with shimmer effects
- **Data Tables**: Enhanced DataTables with hover effects
- **Alert System**: Styled notifications with gradients

## 📱 Responsive Breakpoints

- **Desktop**: >1200px
- **Laptop**: 992px-1200px
- **Tablet**: 768px-992px
- **Mobile**: <768px

## 🔧 Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **bcrypt**: Password hashing
- **Multer**: File upload handling
- **sessionstorage**: Session management

### Frontend
- **EJS**: Templating engine
- **Bootstrap 4**: CSS framework
- **Semantic UI**: UI components
- **DataTables**: Table enhancement
- **Font Awesome**: Icons
- **jQuery**: JavaScript library

### Development Tools
- **nodemon**: Auto-restart development server
- **Git**: Version control

## 🚀 Deployment

### Production Setup
1. **Set environment variables**
   ```bash
   export NODE_ENV=production
   export MONGODB_URI=mongodb://your-production-db-url
   ```

2. **Install production dependencies**
   ```bash
   npm ci --production
   ```

3. **Start the server**
   ```bash
   node app.js
   ```

### Docker Deployment (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

## 📊 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /signup` - User registration
- `GET /logout` - User logout

### User Routes
- `GET /home` - User dashboard
- `POST /newevent` - Create new event
- `POST /changepassword` - Change password
- `GET /messages` - View messages

### Admin Routes
- `GET /userevents` - Admin dashboard
- `GET /approvalrequests` - Pending approvals
- `POST /addnewuser` - Add new user
- `POST /sendmessage` - Send message to user
- `POST /adminchangepass` - Admin password change

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **Session Management**: Secure session storage
- **Input Validation**: Form validation and sanitization
- **Role-Based Access**: Admin and user role separation
- **CSRF Protection**: Built-in Express security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Created and Enhanced by Nitesh Kumar**

- **LinkedIn**: [nitesh-kumar-4927bb2b9](https://www.linkedin.com/in/nitesh-kumar-4927bb2b9/)
- **GitHub**: [nitesh680](https://github.com/nitesh680)

## 🙏 Acknowledgments

- Original framework by Varadarajan M
- Enhanced with modern UI/UX improvements
- Built with Node.js and Express ecosystem
- Styled with modern CSS techniques

---

## 📞 Support

For any queries or support, please reach out via:
- **Email**: niteshhx@gmail.com
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/nitesh-kumar-4927bb2b9/)

**⭐ If you like this project, please give it a star!**
