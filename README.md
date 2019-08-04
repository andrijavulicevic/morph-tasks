# morph-tasks

## SPA Task
- [x] User should be able to log in (without api, just save session to localStorage)
- [x] Use youtube api to list all videos
- [x] Use youtube api to search through videos
- [x] User should be able to multi select videos and mark them as favorites to his profile
(store in localStorage)
- [x] User should have page to view and update his favorite videos
- [x] App should have an option to play video in a modal (popup) like window and
should have an option to move through the screen using mouse drag & drop
- [x] User should be able to play multiple videos at the same time and move them
around
- [x] It should have an option to stop all videos at the same time
- [x] It should have an option to add all videos that are currently playing to favorites

Bonus:
- [] In the favorites list it should be able to order by date added, or by length of the
video (for this you should use indexedDB instead of localStorage)

## Project setup

Before running project, create `.env` file and add `VUE_APP_API_KEY=${GOOGLE_API_KEY}` where `${GOOGLE_API_KEY}` is Google's API key with granted access to youtube_v3 service. 

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
