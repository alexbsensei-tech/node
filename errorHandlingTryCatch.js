async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`); // Handle non-2xx HTTP responses
    }   
    const user = await response.json();
    console.log('User data:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error if needed
  }
}

fetchUserData();