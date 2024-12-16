import { createClient } from '@sanity/client';

// Configure Sanity client
const sanityClient = createClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'production',       // Replace if you're using another dataset
  apiVersion: '2023-01-01',    // Use the current date or the API version
  useCdn: true,                // Enables faster response times with cached data
});

export default sanityClient;
