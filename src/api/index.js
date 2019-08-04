import api from './http';

async function searchVideos(searchTerm, pageToken) {
  return api.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      q: searchTerm,
      pageToken
    }
  });
}

export {
  searchVideos
};
