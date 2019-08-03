/* eslint-disable no-undef */
import api from './http';

function loadMostPopular() {
  return api.get('/videos', { 
    params: { 
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 50
    }
  })
}

function searchVideos(searchTerm) {
  return api.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: searchTerm
    }
  });
}

export {
  loadMostPopular,
  searchVideos
};
