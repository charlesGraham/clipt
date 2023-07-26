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

  public isModalVisible = (id: string): boolean => {
    return Boolean(this.modals.find(elem => elem.id === id)?.visible);
  };

  public toggleModal = (id: string): void => {
    const modal = this.modals.find(elem => elem.id === id);

    if (modal) modal.visible = !modal.visible;
  };
}