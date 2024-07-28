const BASE_URL = 'http://localhost:5000'; // Assuming your backend server is running on port 5000

export const getRecords = async () => {
  try {
    const response = await fetch(`${BASE_URL}/record`);
    if (response.ok) {
      console.log(`the url is ${BASE_URL} correct`);
    }
    if (!response.ok) {
      throw new Error('Failed to fetch records');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching records:', error.message);
    return null;
  }
};
