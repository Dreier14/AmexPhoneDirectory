import axios from 'axios';

export const getPhoneDirectoryData = async (pageNumber, paginationAmount) => {
    try {
        const phoneDirectoryData = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${paginationAmount}`);
        return phoneDirectoryData;
    } catch (error) {
        console.error('Error getting data', error);
        return;
    }
};