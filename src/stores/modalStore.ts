import { atom } from "nanostores";

export const isModalOpen = atom<boolean>(false);

export function initializeModalState() {
  isModalOpen.set(false);
}

export function openModal() {
  isModalOpen.set(true);
}

export function closeModal() {
  isModalOpen.set(false);
}
