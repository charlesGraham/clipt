import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  public register(id: string) {
    this.modals.push({
      id: id,
      visible: false
    });
  }

  public unregister(id: string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  public isModalVisible = (id: string): boolean => {
    return Boolean(this.modals.find(modal => modal.id === id)?.visible);
  };

  public toggleModal = (id: string): void => {
    const modal = this.modals.find(modal => modal.id === id);

    if (modal) modal.visible = !modal.visible;
  };
}