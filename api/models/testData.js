import { db } from '../../config/dbConfig.js';

const loadTestData = async () => {
    try {

        const ownerDummyData = [
            {ownerId: '1', apiKey: 'abc123', email: 'owner1@example.com', password: 'password1', name: 'John Doe', phone: '1234567890'},
            {ownerId: '2', apiKey: 'def456', email: 'owner2@example.com', password: 'password2', name: 'Jane Smith', phone: '9876543210'},
        ]
        
        await db.owners.bulkCreate(ownerDummyData);

        const customerDummyData = [
            {customerId: '1',email: 'customer1@example.com',ebook: 'Ebook 1',ebookPassword: 'password1'},
            {customerId: '2',email: 'customer2@example.com',ebook: 'Ebook 2',ebookPassword: 'password2'},
        ]

        await db.customers.bulkCreate(customerDummyData);

        console.log('Test data loaded successfully.');
    } catch (error) {
        console.error('Failed to load test data:', error);
    } 
};

export default loadTestData;