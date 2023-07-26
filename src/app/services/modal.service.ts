import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false;

  constructor() { }

  public isModalVisible = (): boolean => this.visible;

  public toggleModal = (): boolean => this.visible = !this.visible;
}