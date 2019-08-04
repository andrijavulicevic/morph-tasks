<template>
  <v-dialog
    v-model="dialog"
    persistent
    :width="width + 30"
    hide-overlay
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2 popup-header"
        primary-title
      >
        {{video.snippet.title}}
      </v-card-title>

      <v-card-text>
        <iframe 
          :src="videoSrc" 
          frameborder="0"
          :width="width"
          :height="height"
        ></iframe>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="closeVideoModal"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {REMOVE_PLAYING_VIDEO} from '../store/actions.type';

export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // NOTE: nije moj kod, uzeo odavde: https://github.com/vuetifyjs/vuetify/issues/4058#issuecomment-450636420
    (function () { // make vuetify dialogs movable
      const d = {};
      document.addEventListener("mousedown", e => {
        const closestDialog = e.target.closest(".v-dialog.v-dialog--active");
        if (e.button === 0 && closestDialog != null && e.target.classList.contains("v-card__title")) { // element which can be used to move element
          d.el = closestDialog; // element which should be moved
          d.mouseStartX = e.clientX;
          d.mouseStartY = e.clientY;
          d.elStartX = d.el.getBoundingClientRect().left;
          d.elStartY = d.el.getBoundingClientRect().top;
          d.el.style.position = "fixed";
          d.el.style.margin = 0;
          d.oldTransition = d.el.style.transition;
          d.el.style.transition = "none"
        }
      });
      document.addEventListener("mousemove", e => {
        if (d.el === undefined) return;
        d.el.style.left = Math.min(
          Math.max(d.elStartX + e.clientX - d.mouseStartX, 0),
          window.innerWidth - d.el.getBoundingClientRect().width
        ) + "px";
        d.el.style.top = Math.min(
          Math.max(d.elStartY + e.clientY - d.mouseStartY, 0),
          window.innerHeight - d.el.getBoundingClientRect().height
        ) + "px";
      });
      document.addEventListener("mouseup", () => {
        if (d.el === undefined) return;
        d.el.style.transition = d.oldTransition;
        d.el = undefined
      });

      setInterval(() => { // prevent out of bounds
        const dialog = document.querySelector(".v-dialog.v-dialog--active");
        if (dialog === null) return;
        dialog.style.left = Math.min(parseInt(dialog.style.left), window.innerWidth - dialog.getBoundingClientRect().width) + "px";
        dialog.style.top = Math.min(parseInt(dialog.style.top), window.innerHeight - dialog.getBoundingClientRect().height) + "px";
      }, 100);
    })();
  },
  data: () => ({
    dialog: true,
    width: 720,
    height: 360
  }),
  computed: {
    videoSrc() {
      const baseVideoURL = 'https://www.youtube.com/embed/';
      return `${baseVideoURL}${this.video.id}?autoplay=1&controls=0&fs=0&disablekb=1&modestbranding=1`;
    }
  },
  methods: {
    closeVideoModal() {
      this.$store.dispatch(REMOVE_PLAYING_VIDEO, this.video);
      this.dialog = false;
    }
  }
}
</script>

<style>
.v-dialog.v-dialog--active .popup-header {
  cursor: grab;
}
.v-dialog.v-dialog--active .popup-header:active {
  cursor: grabbing;
}
</style>
