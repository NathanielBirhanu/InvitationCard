Wedding Invitation Card Project Documentation
Overview
The Wedding Invitation Card project aims to provide a secure and efficient method for generating invitation cards with barcodes to prevent unauthorized access to wedding ceremonies.

Technologies Used
Backend: Node.js, Express.js, MongoDB
Frontend: React
Additional Tools: Mongoose, Axios, react-barcode
Flow of the Project
Backend
API Endpoints:
/api/cards/create: Endpoint to create a new invitation card with a unique barcode.
/api/cards/scan: Endpoint to scan a barcode to verify the invitation.
Database Schema:
Card:
Name: String
ID: String
Barcode: String
DateCreated: Date
Functionality:
Inviter creates a card by providing the invited individual's name and ID.
The card with a unique barcode is generated and stored in the database.
Invited individuals receive printed cards with their details and barcode.
Frontend
Components:
CardForm: Component for creating new invitation cards.
ScanCard: Component for scanning barcodes at the event entrance.
Home: Landing page displaying project information and options.
API Integration:
Utilize Axios to communicate with backend API endpoints.
Fetch and display card information dynamically.
Barcode Generation:
Use react-barcode library to generate barcodes for invitation cards.
User Interface:
Design user-friendly interfaces for card creation and scanning functionalities.
Future Enhancements
Implement user authentication for secure access.
Add email or SMS notifications for invited individuals.
Enhance UI/UX for a more engaging user experience.
