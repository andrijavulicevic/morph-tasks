/* eslint-disable no-undef */
import api from './http';

function loadMostPopular() {
  return api.get('/videos', { 
    params: { 
      part: 'snippet',
      chart: 'mostPopular',
      region: 'RS',
      maxResults: 50
    }
  })
}

export {
  loadMostPopular
};
