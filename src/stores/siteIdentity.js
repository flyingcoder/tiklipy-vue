
import { defineStore } from "pinia";

export const useIdentityStore = defineStore("siteIdentity", {
  state: () => ({
    logoSrc: '/tiklipy-logo-indigo.png',
    logoSrcBlack: '/tiklipy-logo-black.png',
    logoSrcIcon: '/tiklipy-logo-icon.png',
    siteName: 'Tiklipy',
  }), 
});