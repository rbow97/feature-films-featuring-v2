import { atom } from "nanostores";

export const isModalOpen = atom<boolean>(false);

export function openModal(): void {
  isModalOpen.set(true);
}

export function closeModal(): void {
  isModalOpen.set(false);
}
